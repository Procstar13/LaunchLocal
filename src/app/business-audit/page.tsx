'use client'

import { useEffect, useState } from 'react'

type Answer = string | string[]
type Answers = Record<string, Answer>
type Field = { key: string; label: string; type: 'text' | 'email' | 'single' | 'multi' | 'textarea'; options?: string[]; required?: boolean; max?: number }
const contact: Field[] = [
  { key: 'name', label: 'Your name', type: 'text', required: true },
  { key: 'email', label: 'Work email address', type: 'email', required: true },
  { key: 'business', label: 'Business name', type: 'text', required: true },
]
const intent: Field[] = [
  { key:'intent', label:'What brings you here today?', type:'single', required:true, options:[
    'I have a specific problem I want to solve',
    "I'm curious what AI or automation could do for my business",
    'I want to get more from software we already use',
    "I'm not sure where to start"
  ] }
]
const areas = ['Responding to new inquiries','Estimates and follow-up','Scheduling and dispatch','Job paperwork and information','Invoices and payments','Customer communication','Reporting and visibility','Not sure yet']
const context: Field[] = [
  { key:'industry',label:'What type of business do you run?',type:'single',required:true,options:['HVAC','Plumbing','Electrical','Landscaping','Cleaning','Construction / contracting','Other'] },
  { key:'team_size',label:'How many people are on your team?',type:'single',required:true,options:['1–5','6–10','11–25','26–50','51+'] },
  { key:'software',label:'Which tools does your team use? (Optional)',type:'multi',max:8,options:['Jobber','Housecall Pro','ServiceTitan','GoHighLevel','QuickBooks','Microsoft 365','Google Workspace','Spreadsheets','Other / not sure'] }
]
const goals: Field[] = [
  { key:'goal',label:'What would make this conversation worthwhile?',type:'single',required:true,options:['See practical AI examples for my business','Save my team time','Book or complete more jobs','Improve how our software works together','Get better visibility into the business','Figure out where to start'] },
  { key:'notes',label:'Anything else you would like us to know? (Optional)',type:'textarea' }
]
const groups = {
  contact:{title:'Let’s get acquainted',subtitle:'We’ll use this to follow up about your snapshot.',fields:contact},
  intent:{title:'What brings you here?',subtitle:'There is no right answer. We’ll tailor the next questions to you.',fields:intent},
  context:{title:'A little about your business',subtitle:'Just enough background to make our recommendations relevant.',fields:context},
  goals:{title:'What would success look like?',subtitle:'One last thing, then you’re done.',fields:goals}
}
type GroupKey = keyof typeof groups
const sequences: Record<'A' | 'B', GroupKey[]> = {A:['contact','intent','context','goals'],B:['intent','context','goals','contact']}
const intentExtras: Record<string,Field[]> = {
  'I have a specific problem I want to solve':[
    {key:'problem_department',label:'Which part of your business needs attention?',type:'single',required:true,options:['Accounting / finance','Project management','File / document organization','Sales / customer communication','Scheduling / operations','Other']}
  ],
  "I'm curious what AI or automation could do for my business":[
    {key:'familiarity',label:'How familiar are you with AI and business automation?',type:'single',required:true,options:["I'm completely new to it","I've tried a few AI tools","We already use AI or automations at work"]}
  ],
  'I want to get more from software we already use':[
    {key:'software',label:'Which tools do you already use?',type:'multi',required:true,max:8,options:['Jobber','Housecall Pro','ServiceTitan','GoHighLevel','QuickBooks','Microsoft 365','Google Workspace','Spreadsheets','Other / not sure']},
    {key:'software_challenge',label:'What would you like these tools to do better? (Optional)',type:'textarea'}
  ],
  "I'm not sure where to start":[
    {key:'pain_area',label:'Which part of running the business feels harder than it should?',type:'single',required:true,options:areas}
  ]
}
const emailValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
function getOrCreate(key: string) {
  let value = localStorage.getItem(key)
  if (!value) { value = crypto.randomUUID(); localStorage.setItem(key, value) }
  return value
}

export default function BusinessAudit() {
  const [variant, setVariant] = useState<'A' | 'B' | null>(null)
  const [visitorId, setVisitorId] = useState('')
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [resumeConsent, setResumeConsent] = useState(false)
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [botField, setBotField] = useState('')

  useEffect(() => {
    const resumeToken = new URLSearchParams(window.location.search).get('resume')
    if (resumeToken && /^[0-9a-f]{64}$/.test(resumeToken)) {
      fetch('/api/business-audit?resume='+resumeToken).then(r=>r.ok?r.json():Promise.reject()).then(data=>{
        localStorage.setItem('lv_audit_visitor',data.visitorId)
        localStorage.setItem('lv_audit_variant',data.variant)
        sessionStorage.setItem('lv_audit_answers',JSON.stringify(data.answers))
        setVisitorId(data.visitorId);setVariant(data.variant);setAnswers(data.answers)
        setStep(data.variant==='A'?1:3)
        window.history.replaceState({},'',window.location.pathname)
      }).catch(()=>{setError('Your resume link may have expired. You can start a new questionnaire.');setVisitorId(getOrCreate('lv_audit_visitor'));setVariant('A')})
      return
    }
    const id = getOrCreate('lv_audit_visitor')
    let assigned = localStorage.getItem('lv_audit_variant') as 'A' | 'B' | null
    if (assigned !== 'A' && assigned !== 'B') {
      assigned = crypto.getRandomValues(new Uint32Array(1))[0] % 2 === 0 ? 'A' : 'B'
      localStorage.setItem('lv_audit_variant', assigned)
    }
    const saved = sessionStorage.getItem('lv_audit_answers')
    if (saved) { try { setAnswers(JSON.parse(saved)) } catch {} }
    setVisitorId(id)
    setVariant(assigned)
    fetch('/api/business-audit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'event', visitorId: id, variant: assigned, event: 'view', step: 0 }) }).catch(() => {})
  }, [])

  if (!variant) return <div className="page-shell py-24">Loading questionnaire…</div>
  const order = sequences[variant]
  const key = order[step]
  const current = groups[key]
  const fields: Field[] = key === 'intent' ? [...current.fields, ...(intentExtras[String(answers.intent || '')] || []), ...(answers.intent === 'I have a specific problem I want to solve' && answers.problem_department === 'Other' ? [{key:'problem_department_other',label:'Which department or area? ',type:'text' as const,required:true}] : [])] : key === 'context' ? [...current.fields.filter(f => !(f.key === 'software' && answers.intent === 'I want to get more from software we already use')), ...(answers.industry === 'Other' ? [{key:'industry_other',label:'What type of business do you run?',type:'text' as const,required:true}] : [])] : current.fields
  const setAnswer = (field: string, value: Answer) => setAnswers(old => {
    const next = { ...old, [field]: value }
    sessionStorage.setItem('lv_audit_answers', JSON.stringify(next))
    return next
  })
  const valid = fields.every(f => !f.required || (Array.isArray(answers[f.key]) ? (answers[f.key] as string[]).length > 0 : typeof answers[f.key] === 'string' && (answers[f.key] as string).trim().length > 0)) && (key !== 'contact' || emailValid(String(answers.email || '')))
  async function send(action: string, extra: object = {}) {
    const response = await fetch('/api/business-audit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, visitorId, variant, step, answers, resumeConsent, honeypot: botField, ...extra }) })
    if (!response.ok) throw new Error('Unable to save your answers. Please try again.')
  }
  async function next() {
    if (!valid || busy) return
    setBusy(true); setError('')
    try {
      if (step === 3) {
        await send('submit')
        sessionStorage.removeItem('lv_audit_answers')
        setDone(true)
      } else {
        await send('event', { event: 'step_complete' })
        // Draft contact details are stored only if the visitor explicitly requests a resume email.
        if (key === 'contact' && resumeConsent) await send('draft')
        setStep(step + 1)
      }
    } catch (e) { setError(e instanceof Error ? e.message : 'Something went wrong.') }
    finally { setBusy(false) }
  }
  const inputClass = 'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100'
  return <div className="min-h-screen bg-slate-50 py-12 sm:py-20">
    <div className="mx-auto max-w-2xl px-4">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-700">LeverVantage • Business Systems Snapshot</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Find a smarter way to run your business.</h1>
        <p className="mt-3 text-slate-600">Tell us what brought you here. We'll help you explore the next step. About 3 minutes.</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
        {done ? <div className="py-12 text-center" role="status">
          <h2 className="text-2xl font-bold text-slate-900">Thanks for sharing!</h2>
          <p className="mt-3 text-slate-600">Your Business Systems Snapshot has been submitted. We’ll review your responses and follow up.</p>
        </div> : <>
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-slate-500"><span>Step {step + 1} of 4</span><span>{Math.round((step + 1) / 4 * 100)}%</span></div>
            <div className="mt-3 grid grid-cols-4 gap-2" aria-label="Questionnaire progress">{order.map((k, i) => <div key={k} className={`h-2 rounded-full ${i <= step ? 'bg-blue-600' : 'bg-slate-200'}`} />)}</div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{current.title}</h2>
          <p className="mb-7 mt-2 text-slate-600">{current.subtitle}</p>
          <div className="space-y-7">
            {fields.map(field => <fieldset key={field.key} className="space-y-2">
              <legend className="mb-2 text-sm font-semibold text-slate-900">{field.label} {field.required && <span className="text-blue-600">*</span>}</legend>
              {(field.type === 'text' || field.type === 'email') && <input className={inputClass} type={field.type} maxLength={150} autoComplete={field.key === 'email' ? 'email' : field.key === 'name' ? 'name' : 'organization'} value={String(answers[field.key] || '')} onChange={e => setAnswer(field.key, e.target.value)} />}
              {field.type === 'textarea' && <textarea className={inputClass} rows={3} maxLength={1200} value={String(answers[field.key] || '')} onChange={e => setAnswer(field.key, e.target.value)} />}
              {field.options && <div className={field.type === 'multi' ? 'grid grid-cols-1 gap-2 sm:grid-cols-2' : 'space-y-2'}>
                {field.options.map(option => {
                  const selected = field.type === 'multi' ? ((answers[field.key] as string[]) || []).includes(option) : answers[field.key] === option
                  return <label key={option} className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${selected ? 'border-blue-600 bg-blue-50 text-blue-950' : 'border-slate-200 hover:border-blue-300'}`}>
                    <input className="mt-0.5 accent-blue-600" type={field.type === 'multi' ? 'checkbox' : 'radio'} name={field.key} checked={selected} onChange={() => {
                      if (field.type === 'multi') {
                        const old = (answers[field.key] as string[]) || []
                        const updated = selected ? old.filter(s => s !== option) : old.length < (field.max || 99) ? [...old, option] : old
                        setAnswer(field.key, updated)
                      } else setAnswer(field.key, option)
                    }} />
                    {option}
                  </label>
                })}
              </div>}
            </fieldset>)}
            {key === 'contact' && <div className="rounded-xl bg-slate-50 p-4">
              <label className="flex items-start gap-3 text-sm text-slate-700">
                <input type="checkbox" className="mt-1 accent-blue-600" checked={resumeConsent} onChange={e => setResumeConsent(e.target.checked)} />
                Email me one link to resume if I don't finish. If selected, my contact details and draft answers may be saved before final submission.
              </label>
              <p className="mt-3 text-xs text-slate-500">Otherwise, your contact information is only sent when you submit the full questionnaire. Review our <a className="underline text-blue-700" href="/privacy">privacy notice</a> before submitting.</p>
            </div>}
            <div className="absolute -left-[10000px]" aria-hidden="true"><label>Leave this blank<input tabIndex={-1} autoComplete="off" value={botField} onChange={e => setBotField(e.target.value)} /></label></div>
          </div>
          {error && <p role="alert" className="mt-5 text-sm text-red-700">{error}</p>}
          <div className="mt-9 flex justify-between gap-3">
            <button type="button" disabled={step === 0 || busy} onClick={() => { setError(''); setStep(x => x - 1) }} className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 disabled:opacity-30">Back</button>
            <button type="button" disabled={!valid || busy} onClick={next} className="rounded-xl bg-blue-700 px-7 py-3 font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-40">{busy ? 'Saving…' : step === 3 ? 'Submit snapshot' : 'Next →'}</button>
          </div>
        </>}
      </div>
      <p className="mt-5 text-center text-xs text-slate-500">No obligation. We will never ask for your software passwords in this questionnaire.</p>
    </div>
  </div>
}
