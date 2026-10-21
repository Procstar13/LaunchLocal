import { NextRequest, NextResponse } from 'next/server'
import { createHash, randomBytes } from 'crypto'

export const runtime = 'nodejs'
const allowed = ['view','step_complete','submitted']
const uuid = (s: unknown) => typeof s === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(s)
const email = (s: unknown) => typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && s.length <= 200
function connection() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const secret = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !secret) throw new Error('Audit storage is not configured')
  return { url: url.replace(/\/$/, ''), secret }
}
async function db(path: string, method: string, value?: unknown, prefer = 'resolution=merge-duplicates,return=minimal') {
  const { url, secret } = connection()
  const r = await fetch(url + '/rest/v1/' + path, { method, headers: { apikey: secret, Authorization: 'Bearer ' + secret, 'Content-Type': 'application/json', Prefer: prefer }, body: JSON.stringify(value), cache: 'no-store' })
  if (!r.ok) throw new Error('Database request failed: ' + r.status)
  if (prefer.includes('return=representation') || method === 'GET') return r.json()
  return null
}
const digest = (s: string) => createHash('sha256').update(s).digest('hex')
// Resume URLs use the current deployment host (preview or production).

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get('origin')
    if (origin && new URL(origin).host !== req.nextUrl.host) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    const body = await req.json()
    const { action, visitorId, variant, step, answers, resumeConsent, honeypot } = body
    const remote = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const { url, secret } = connection()
    const limit = await fetch(url + '/rest/v1/rpc/check_audit_rate_limit', { method:'POST', headers:{apikey:secret, Authorization:'Bearer '+secret,'Content-Type':'application/json'}, body:JSON.stringify({p_key:digest(remote),p_limit:60}),cache:'no-store' })
    if (!limit.ok) throw new Error('Rate limiter unavailable')
    if (await limit.json() !== true) return NextResponse.json({error:'Too many requests. Please try again later.'},{status:429})
    if (honeypot) return NextResponse.json({ ok: true })
    if (!uuid(visitorId) || !['A','B'].includes(variant) || !Number.isInteger(step) || step < 0 || step > 3) return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    if (action === 'event') {
      if (!allowed.includes(body.event)) return NextResponse.json({ error: 'Invalid event' }, { status: 400 })
      await db('audit_events', 'POST', { visitor_id: visitorId, variant, step, event: body.event })
    } else if (action === 'draft' || action === 'submit') {
      if (!answers || typeof answers !== 'object' || Array.isArray(answers) || JSON.stringify(answers).length > 14000) return NextResponse.json({ error: 'Invalid answers' }, { status: 400 })
      if (!email(answers.email) || typeof answers.name !== 'string' || !answers.name.trim() || typeof answers.business !== 'string' || !answers.business.trim()) return NextResponse.json({ error: 'Contact details required' }, { status: 400 })
      if (action === 'draft' && resumeConsent !== true) return NextResponse.json({ error: 'Consent required' }, { status: 400 })
      if (action === 'submit' && (
        !['industry','team_size','intent','goal'].every(k => typeof answers[k] === 'string' && answers[k].trim()) ||
        (answers.intent === 'I have a specific problem I want to solve' && (!String(answers.problem_department || '').trim() || (answers.problem_department === 'Other' && !String(answers.problem_department_other || '').trim()))) ||
        (answers.intent === "I'm curious what AI or automation could do for my business" && !String(answers.familiarity || '').trim()) ||
        (answers.intent === 'I want to get more from software we already use' && (!Array.isArray(answers.software) || answers.software.length === 0)) ||
        (answers.intent === "I'm not sure where to start" && !String(answers.pain_area || '').trim())
      )) return NextResponse.json({error:'Incomplete answers'},{status:400})
      let token: string | undefined
      if (action === 'draft') token = randomBytes(32).toString('hex')
      await db('audit_submissions?on_conflict=visitor_id', 'POST', { visitor_id: visitorId, variant, status: action === 'submit' ? 'submitted' : 'draft', answers, resume_consent: resumeConsent === true, updated_at: new Date().toISOString(), ...(token ? {resume_token_hash:digest(token),resume_expires_at:new Date(Date.now()+7*86400000).toISOString()} : {}), ...(action === 'submit' ? { submitted_at: new Date().toISOString(),resume_token_hash:null,resume_expires_at:null } : {}) })
      if (action === 'draft' && token) {
        const emailResult = await fetch('https://api.resend.com/emails', { method:'POST', headers:{ Authorization:'Bearer '+process.env.RESEND_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({from:'LeverVantage <hello@levervantage.com>',to:[answers.email],subject:'Your Business Systems Snapshot — resume link',text:'You asked us to save your progress. Continue your questionnaire using this private link (valid for 7 days): '+req.nextUrl.origin+'/business-audit?resume='+token+'\n\nIf you did not request this link, you can ignore this email.'}) })
        if (!emailResult.ok) throw new Error('Unable to send resume link')
        await db('audit_submissions?visitor_id=eq.'+visitorId,'PATCH',{resume_email_sent_at:new Date().toISOString()})
      }
      if (action === 'submit') {
        const existing = await db('leads?email=eq.'+encodeURIComponent(answers.email)+'&select=id&limit=1','GET') as {id:string}[]
        if (existing?.[0]) await db('audit_submissions?visitor_id=eq.'+visitorId,'PATCH',{lead_id:existing[0].id})
        else {
          const ownership = await db('leads?select=owner_id&limit=1','GET') as {owner_id:string}[]
          if (ownership?.[0]?.owner_id) {
            const rows = await db('leads','POST',{owner_id:ownership[0].owner_id,company_name:answers.business,contact_name:answers.name,email:answers.email,source:'business_audit',notes:'Business Systems Snapshot submitted.'},'return=representation') as {id:string}[]
            if (rows?.[0]?.id) await db('audit_submissions?visitor_id=eq.'+visitorId,'PATCH',{lead_id:rows[0].id})
          }
        }
      }
      if (action === 'submit') {
        await db('audit_events', 'POST', { visitor_id: visitorId, variant, step, event: 'submitted' })
        // Notification failure must not turn a successfully persisted snapshot into a failed submission.
        try {
          const records = await db('audit_submissions?visitor_id=eq.' + visitorId + '&select=id,owner_notified_at&limit=1','GET') as {id:string;owner_notified_at:string|null}[]
          if (records?.[0] && !records[0].owner_notified_at) {
            const lines: [string, unknown][] = [
              ['Contact', answers.name], ['Email', answers.email], ['Business', answers.business],
              ['Industry', answers.industry], ['Team size', answers.team_size], ['Reason for visit', answers.intent], ['Problem department', answers.problem_department], ['Other department', answers.problem_department_other], ['AI familiarity', answers.familiarity], ['Software challenge', answers.software_challenge], ['Pain area', answers.pain_area],
              ['Software', answers.software], ['Time-consuming tasks', answers.time_consumers],
              ['Duplicate entry', answers.duplicate_entry], ['Duplicate entry details', answers.duplicate_examples],
              ['Where work is delayed', answers.delays], ['Top priority', answers.priority],
              ['Hours per week', answers.hours], ['Consequence', answers.consequence],
              ['Desired outcome', answers.goal], ['Notes', answers.notes], ['Experiment', variant]
            ]
            const valueText = (v: unknown) => Array.isArray(v) ? v.join(', ') : String(v)
            const escapeHtml = (v: unknown) => valueText(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] || c))
            const visible = lines.filter(([,v]) => v !== undefined && v !== '')
            const summary = visible.map(([k,v]) => k + ': ' + valueText(v)).join('\n')
            const contactRows = visible.filter(([k]) => ['Contact','Email','Business','Industry','Team size','Reason for visit','AI familiarity'].includes(k))
            const operationsRows = visible.filter(([k]) => ['Software','Specific problem','Software challenge','Pain area'].includes(k))
            const opportunityRows = visible.filter(([k]) => ['Top priority','Hours per week','Consequence','Desired outcome','Notes'].includes(k))
            const tableRows = (rows: [string,unknown][]) => rows.map(([k,v]) => '<tr><td style="padding:11px 14px;border-bottom:1px solid #e2e8f0;color:#64748b;width:37%;vertical-align:top;font-size:13px">'+escapeHtml(k)+'</td><td style="padding:11px 14px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-size:14px;font-weight:500">'+escapeHtml(v)+'</td></tr>').join('')
            const section = (title:string,rows:[string,unknown][]) => '<h2 style="font-size:16px;color:#0f172a;margin:28px 0 10px">'+title+'</h2><table role="presentation" cellspacing="0" cellpadding="0" style="border-collapse:collapse;width:100%;background:#fff;border:1px solid #e2e8f0;border-radius:8px">'+tableRows(rows)+'</table>'
            const html = '<div style="background:#f1f5f9;padding:30px 12px;font-family:Arial,sans-serif"><div style="max-width:620px;margin:auto;background:#fff;padding:30px;border-radius:12px"><p style="font-size:12px;letter-spacing:2px;font-weight:bold;color:#2563eb">LEVERVANTAGE</p><h1 style="font-size:25px;line-height:1.2;margin:12px 0;color:#0f172a">New Business Systems Snapshot</h1><p style="color:#475569;font-size:14px">A business owner has completed the questionnaire.</p>'+section('Business & Contact',contactRows)+section('Current Systems & Bottlenecks',operationsRows)+section('Priority & Desired Results',opportunityRows)+'<p style="font-size:12px;color:#64748b;margin-top:25px">A/B variant: '+escapeHtml(variant)+' · Full submission stored in your LeverVantage audit database.</p></div></div>'
            const notification = await fetch('https://api.resend.com/emails', {
              method:'POST',
              headers:{Authorization:'Bearer ' + process.env.RESEND_API_KEY,'Content-Type':'application/json'},
              body:JSON.stringify({
                from:'LeverVantage <noreply@levervantage.com>',
                to:['zachproctor@levervantage.com'],
                reply_to:answers.email,
                subject:'New Business Systems Snapshot — ' + String(answers.business).slice(0,100),
                text:'New Business Systems Snapshot\n\n' + summary,
                html
              })
            })
            if (!notification.ok) throw new Error('Audit owner email failed: ' + notification.status)
            await db('audit_submissions?id=eq.' + records[0].id,'PATCH',{owner_notified_at:new Date().toISOString()})
          }
        } catch(e) {
          console.error('Audit owner notification failed', e instanceof Error ? e.message : 'unknown')
        }
      }
    } else return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Business audit intake error', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json({ error: 'Unable to save response' }, { status: 503 })
  }
}

export async function GET(req: NextRequest) {
 try {
  const token=req.nextUrl.searchParams.get('resume')
  if(!token || !/^[0-9a-f]{64}$/.test(token)) return NextResponse.json({error:'Invalid link'},{status:400})
  const {url,secret}=connection()
  const response=await fetch(url+'/rest/v1/audit_submissions?resume_token_hash=eq.'+digest(token)+'&status=eq.draft&resume_expires_at=gt.'+encodeURIComponent(new Date().toISOString())+'&select=answers,variant,visitor_id', {headers:{apikey:secret,Authorization:'Bearer '+secret},cache:'no-store'})
  if(!response.ok) throw Error('Unable to load draft')
  const records=await response.json()
  if(!records[0]) return NextResponse.json({error:'This resume link has expired'},{status:404})
  return NextResponse.json({answers:records[0].answers,variant:records[0].variant,visitorId:records[0].visitor_id},{headers:{'Cache-Control':'no-store'}})
 }catch{return NextResponse.json({error:'Unable to load draft'},{status:503})}
}
