import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Education & Hands-On Workshops',
  description: 'Practical AI education for small business owners. Learn AI fundamentals for $150 or build and manage your own website with AI for $250.',
  alternates: { canonical: '/ai-education' },
}

const sessions = [
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
          <h2 className="section-title">Choose your session</h2>
          <p className="section-copy mt-4">Both sessions are paid, guided learning experiences designed for beginners.</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {sessions.map((session) => (
              <article key={session.title} className="flex flex-col rounded-xl border border-line bg-white p-8 shadow-sm">
                <p className="text-sm font-bold text-accent">{session.duration}</p>
                <h3 className="mt-4 font-display text-3xl font-bold text-text-primary">{session.title}</h3>
                <p className="mt-4 text-5xl font-extrabold text-text-primary">{session.price}</p>
                <p className="mt-5 leading-7 text-text-secondary">{session.description}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-text-secondary">
                  {session.outcomes.map((outcome) => <li key={outcome} className="flex gap-3"><span className="text-accent">✓</span>{outcome}</li>)}
                </ul>
                <Link className="btn-primary mt-8" href={`/?plan=${encodeURIComponent(session.plan)}#contact`}>Request a session</Link>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-text-muted">Website workshop participants may need free third-party accounts. Domain registration, paid services, and ongoing support are not included. Workshop results depend on the project scope and setup time. Session requests are confirmed before payment arrangements are made.</p>
        </div>
      </section>
      <section className="bg-section-bg py-20">
        <div className="page-shell max-w-4xl">
          <div className="eyebrow">Need a deeper look at your business?</div>
          <h2 className="section-title mt-3">Business Process Audit — $650</h2>
          <p className="section-copy mt-5">For businesses ready to improve a specific workflow, we conduct discovery and interviews, map the process, identify bottlenecks and automation opportunities, and provide a written findings report with prioritized recommendations. Implementation is scoped and priced separately.</p>
          <Link className="btn-secondary mt-7" href="/?plan=Business%20Process%20Audit#contact">Request an audit</Link>
        </div>
      </section>
    </div>
  )
}
