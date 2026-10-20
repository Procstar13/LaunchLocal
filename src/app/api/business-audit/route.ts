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
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://levervantage.com'

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
      if (action === 'submit' && !['industry','team_size','time_consumers','duplicate_entry','delays','priority','hours','consequence','goal'].every(k => Boolean(answers[k]) && (!Array.isArray(answers[k]) || answers[k].length))) return NextResponse.json({ error: 'Incomplete answers' }, { status: 400 })
      let token: string | undefined
      if (action === 'draft') token = randomBytes(32).toString('hex')
      await db('audit_submissions?on_conflict=visitor_id', 'POST', { visitor_id: visitorId, variant, status: action === 'submit' ? 'submitted' : 'draft', answers, resume_consent: resumeConsent === true, updated_at: new Date().toISOString(), ...(token ? {resume_token_hash:digest(token),resume_expires_at:new Date(Date.now()+7*86400000).toISOString()} : {}), ...(action === 'submit' ? { submitted_at: new Date().toISOString(),resume_token_hash:null,resume_expires_at:null } : {}) })
      if (action === 'draft' && token) {
        const emailResult = await fetch('https://api.resend.com/emails', { method:'POST', headers:{ Authorization:'Bearer '+process.env.RESEND_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({from:'LeverVantage <hello@levervantage.com>',to:[answers.email],subject:'Your Business Systems Snapshot — resume link',text:'You asked us to save your progress. Continue your questionnaire using this private link (valid for 7 days): '+baseUrl+'/business-audit?resume='+token+'\n\nIf you did not request this link, you can ignore this email.'}) })
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
      if (action === 'submit') await db('audit_events', 'POST', { visitor_id: visitorId, variant, step, event: 'submitted' })
    } else return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Business audit intake error', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json({ error: 'Unable to save response' }, { status: 503 })
  }
}
