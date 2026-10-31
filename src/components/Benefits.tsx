import Link from 'next/link'

const stages = [
  {
    number: '01',
    eyebrow: 'Learn the tools',
    title: 'AI Education',
    price: 'From $150',
    description: 'Practical, beginner-friendly training that helps you use AI confidently and spot opportunities in your business.',
    points: ['AI Fundamentals — $150', 'Build & Manage Your Website With AI — $250'],
    cta: 'Explore AI sessions',
    href: '/ai-education',
  },
  {
    number: '02',
    eyebrow: 'Find the bottleneck',
    title: 'Business Process Audit',
    price: '$650',
    description: 'A deeper engagement with interviews, workflow mapping, bottleneck analysis, and written recommendations.',
    points: ['Current-state process map', 'Prioritized improvement opportunities', 'Written findings and recommendations'],
    cta: 'Request a process audit',
    href: '/?plan=Business%20Process%20Audit#contact',
  },
  {
    number: '03',
    eyebrow: 'Make it work',
    title: 'Implementation',
    price: 'Custom quote',
    description: 'Turn the right recommendations into working automations, integrations, or internal tools—tested around your team.',
    points: ['Clearly defined scope', 'Practical build and testing', 'Handoff and support options'],
    cta: 'Discuss an implementation',
    href: '/?plan=Automation#contact',
  },
]

export default function Benefits() {
  return (
    <section id="services" className="bg-section-bg py-24 sm:py-32">
      <div className="page-shell">
        <div className="max-w-3xl">
          <div className="eyebrow">How we help your business</div>
          <h2 className="section-title">Learn it. Improve it. Build it.</h2>
          <p className="section-copy mt-5">
            Begin with practical education, get a deeper look at your operations through an audit, and implement improvements that make sense. Already know what you need? Start at any stage.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {stages.map((stage) => (
            <article key={stage.title} className="flex flex-col rounded-xl border border-line bg-white p-7 shadow-sm sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-accent">{stage.number} / {stage.eyebrow}</span>
              </div>
              <h3 className="mt-6 font-display text-3xl font-bold text-text-primary">{stage.title}</h3>
              <p className="mt-3 font-display text-2xl font-extrabold text-accent">{stage.price}</p>
              <p className="mt-5 leading-7 text-text-secondary">{stage.description}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-5">
                {stage.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-text-secondary">
                    <span aria-hidden="true" className="font-bold text-accent">✓</span>{point}
                  </li>
                ))}
              </ul>
              <Link href={stage.href} className="btn-primary mt-8">{stage.cta}</Link>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 rounded-xl border border-line bg-background p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-text-primary">Not sure where to begin?</h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">Try our free Business Systems Snapshot to organize your challenges. It is not a substitute for the paid process audit.</p>
          </div>
          <Link href="/business-audit" className="btn-secondary shrink-0">Take the free Snapshot</Link>
        </div>
        <p className="mt-8 text-sm leading-6 text-text-muted">
          Need a website built for you instead? <Link href="/pricing" className="font-bold text-text-primary hover:text-accent">Explore website services</Link>, including Local Business Launch at $999.
        </p>
      </div>
    </section>
  )
}
