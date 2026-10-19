import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'

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
async function db(path: string, method: string, value: unknown) {
  const { url, secret } = connection()
  const r = await fetch(url + '/rest/v1/' + path, { method, headers: { apikey: secret, Authorization: 'Bearer ' + secret, 'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates,return=minimal' }, body: JSON.stringify(value), cache: 'no-store' })
  if (!r.ok) throw new Error('Database request failed: ' + r.status)
}
export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get('origin')
    if (origin && new URL(origin).host !== req.nextUrl.host) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    const body = await req.json()
    const { action, visitorId, variant, step, answers, resumeConsent, honeypot } = body
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
      await db('audit_submissions?on_conflict=visitor_id', 'POST', { visitor_id: visitorId, variant, status: action === 'submit' ? 'submitted' : 'draft', answers, resume_consent: resumeConsent === true, updated_at: new Date().toISOString(), ...(action === 'submit' ? { submitted_at: new Date().toISOString() } : {}) })
      if (action === 'submit') await db('audit_events', 'POST', { visitor_id: visitorId, variant, step, event: 'submitted' })
    } else return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Business audit intake error', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json({ error: 'Unable to save response' }, { status: 503 })
  }
}
