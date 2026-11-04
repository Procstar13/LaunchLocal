import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Education & Hands-On Workshops',
  description: 'Practical AI education for small business owners and teams, from introductory sessions to customized working sessions built around your real work.',
  alternates: { canonical: '/ai-education' },
}

const individualSessions = [
  {
    title: 'AI Fundamentals for Business Owners',
    price: '$150',
    duration: '60-minute guided session',
    description: 'Understand what AI can do for your business, practice using ChatGPT effectively, and explore practical ways to save time.',
    outcomes: ['Understand AI capabilities and limitations', 'Practice prompts for real business tasks', 'Identify opportunities in your daily work'],
    plan: 'AI Fundamentals',
  },
  {
    title: 'Build & Manage Your Website With AI',
    price: '$250',
    duration: '90-minute hands-on workshop',
    description: 'Learn to create, publish, and maintain your own website using ChatGPT, GitHub, and Vercel, with an introduction to contact forms.',
    outcomes: ['Build and publish a starter website', 'Learn to make edits and manage updates', 'Understand hosting, domains, and contact form setup'],
    plan: 'AI Website Workshop',
  },
]

const businessSessions = [
  {
    title: 'AI Working Session',
    price: '$750',
    duration: 'Private half-day session',
    label: 'Introductory price',
    description: 'Build and practice two repeatable AI-assisted workflows using examples from your business.',
    outcomes: [
      '30–45-minute intake before the session',
      'Two repeatable workflows your team can run',
      'Customized prompt pack and written instructions',
      'One follow-up call',
    ],
    plan: 'AI Working Session',
  },
  {
    title: 'AI Operations Day',
    price: '$1,500',
    duration: 'Private full-day session',
    label: 'Introductory price',
    description: 'Turn several recurring business tasks into documented, reusable AI-assisted processes.',
    outcomes: [
      'Pre-session intake and example review',
      'Three to five repeatable workflows',
      'Customized prompt library and team operating guide',
      'One follow-up call',
    ],
    plan: 'AI Operations Day',
  },
]

export default function AIEducationPage() {
  return (
    <div>
      <section className="bg-text-primary py-24 text-white sm:py-32">
        <div className="page-shell">
          <div className="eyebrow text-blue-300 before:bg-blue-300">Practical AI education</div>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold tracking-tight sm:text-7xl">Learn to use AI with confidence.</h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-white/70">No hype or technical background required. Hands-on education for business owners who want to understand the tools and put them to work.</p>
        </div>
      </section>
      <section className="bg-background py-20 sm:py-28">
        <div className="page-shell">
          <div className="eyebrow">Individual learning</div>
          <h2 className="section-title">Start with a focused session.</h2>
          <p className="section-copy mt-4">Paid, guided learning experiences for business owners who want a practical introduction or a specific skill.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {individualSessions.map((session) => (
              <article key={session.title} className="flex flex-col rounded-xl border border-line bg-white p-8 shadow-sm">
                <p className="text-sm font-bold text-accent">{session.duration}</p>
                <h3 className="mt-4 font-display text-3xl font-bold text-text-primary">{session.title}</h3>
                <p className="mt-4 text-5xl font-extrabold text-text-primary">{session.price}</p>
                <p className="mt-5 leading-7 text-text-secondary">{session.description}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-text-secondary">
                  {session.outcomes.map((outcome) => <li key={outcome} className="flex gap-3"><span className="text-accent">✓</span>{outcome}</li>)}
                </ul>
                <Link className="btn-primary mt-8" href={`/?plan=${encodeURIComponent(session.plan)}#contact`}>Book Your Session</Link>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-text-muted">Website workshop participants may need free third-party accounts. Domain registration, paid services, and ongoing support are not included. Workshop results depend on the project scope and setup time. Session requests are confirmed before payment arrangements are made.</p>

          <div className="mt-20 max-w-3xl border-t border-line pt-16">
            <div className="eyebrow">Customized business training</div>
            <h2 className="section-title">Practice AI using the work your business already does.</h2>
            <p className="section-copy mt-5">We review real examples before the session, then build repeatable ways to handle tasks such as lead replies, customer updates, quotes, follow-up, and internal notes.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {businessSessions.map((session) => (
              <article key={session.title} className="flex flex-col rounded-xl border border-line bg-white p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-bold text-accent">{session.duration}</p>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">{session.label}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl font-bold text-text-primary">{session.title}</h3>
                <p className="mt-4 text-5xl font-extrabold text-text-primary">{session.price}</p>
                <p className="mt-5 leading-7 text-text-secondary">{session.description}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-text-secondary">
                  {session.outcomes.map((outcome) => <li key={outcome} className="flex gap-3"><span className="text-accent">✓</span>{outcome}</li>)}
                </ul>
                <Link className="btn-primary mt-8" href={`/?plan=${encodeURIComponent(session.plan)}#contact`}>Request This Session</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 sm:py-24">
        <div className="page-shell">
          <div className="max-w-3xl">
            <div className="eyebrow">Clear expectations</div>
            <h2 className="section-title">Training or implementation?</h2>
            <p className="section-copy mt-5">The difference is what happens after the engagement ends.</p>
          </div>
          <div className="mt-10 grid overflow-hidden rounded-xl border border-line lg:grid-cols-2">
            <article className="bg-background p-7 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent">Training</p>
              <h3 className="mt-3 font-display text-3xl font-bold text-text-primary">Your team runs the process.</h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-text-secondary">
                <li className="flex gap-3"><span className="text-accent">✓</span>Prompts, templates, and operating guides</li>
                <li className="flex gap-3"><span className="text-accent">✓</span>Practice using your real business tasks</li>
                <li className="flex gap-3"><span className="text-accent">✓</span>Your team owns and maintains the process</li>
              </ul>
            </article>
            <article className="border-t border-line bg-text-primary p-7 text-white sm:p-10 lg:border-l lg:border-t-0">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">Implementation</p>
              <h3 className="mt-3 font-display text-3xl font-bold">A connected system runs part of the process.</h3>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-white/70">
                <li className="flex gap-3"><span className="text-blue-300">✓</span>Integrations, automation, and technical configuration</li>
                <li className="flex gap-3"><span className="text-blue-300">✓</span>Testing and guardrails around the workflow</li>
                <li className="flex gap-3"><span className="text-blue-300">✓</span>Projects start at $2,500</li>
              </ul>
            </article>
          </div>
          <p className="mt-8 max-w-4xl font-display text-xl font-bold leading-8 text-text-primary">If your team can run it after we leave, it&apos;s training. If it depends on something we install, connect, or maintain, it&apos;s implementation.</p>
        </div>
      </section>
      <section className="bg-section-bg py-20">
        <div className="page-shell max-w-4xl">
          <div className="eyebrow">Not sure where to start?</div>
          <h2 className="section-title mt-3">Start with a free Business Systems Snapshot.</h2>
          <p className="section-copy mt-5">Tell us what challenges your team faces and where you would like to improve. Our short questionnaire helps identify potential opportunities for AI, automation, and better use of the software you already have.</p>
          <Link className="btn-primary mt-7" href="/business-audit">Start Your Free Systems Snapshot</Link>
          <div className="mt-12 border-t border-line pt-10">
            <div className="eyebrow">Ready for a deeper look?</div>
          <h2 className="section-title mt-3">Business Process Audit — $650</h2>
          <p className="section-copy mt-5">For businesses ready to improve a specific workflow, we conduct discovery and interviews, map the process, identify bottlenecks and automation opportunities, and provide a written findings report with prioritized recommendations. Implementation is scoped and priced separately.</p>
          <Link className="btn-secondary mt-7" href="/?plan=Business%20Process%20Audit#contact">Request an audit</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
