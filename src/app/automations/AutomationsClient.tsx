import Link from 'next/link'

const auditSteps = [
  ['Listen', 'We learn how leads, customers, scheduling, follow-ups, and admin work move through your business today.'],
  ['Map', 'We document the repeated tasks, handoffs, delays, and tools involved without assuming your process needs to be replaced.'],
  ['Prioritize', 'We score opportunities by time saved, customer impact, complexity, and risk so the useful work rises to the top.'],
  ['Recommend', 'You receive a plain-language action plan with next steps, dependencies, and realistic implementation options.'],
]

const areas = [
  'Lead capture and response',
  'Appointment scheduling and reminders',
  'Review requests and estimate follow-up',
  'Customer intake and data entry',
  'CRM and form handoffs',
  'Email and text communication',
  'Custom AI and agent workflows',
]

export default function AutomationsClient() {
  return (
    <div>
      <section className="overflow-hidden border-b border-line bg-text-primary py-24 text-white sm:py-32">
        <div className="page-shell relative">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full border border-white/10" />
          <div className="eyebrow text-sun before:bg-sun">Business automation</div>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
            Less busywork. Better follow-through.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-white/70">
            The website is the entry point. From there, LaunchLocal can help capture leads, send follow-ups, request reviews, connect business tools, and reduce the repetitive work happening behind the scenes.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-sun px-6 py-3 text-sm font-bold text-text-primary hover:bg-white">
              Talk about repetitive work
            </Link>
            <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white hover:border-white">
              See Local Business Launch
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <div className="eyebrow">What we review</div>
            <h2 className="section-title">Start with the work your team repeats.</h2>
            <p className="mt-5 leading-7 text-text-secondary">
              Local Growth includes review generation and ongoing visibility work. More specialized automation and agent-powered workflows can be scoped separately.
            </p>
          </div>
          <ul className="grid border-l border-t border-line sm:grid-cols-2">
            {areas.map((area, index) => (
              <li key={area} className="min-h-32 border-b border-r border-line p-6">
                <span className="text-xs font-bold text-rust">0{index + 1}</span>
                <p className="mt-6 font-display text-lg font-bold text-text-primary">{area}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-section-bg py-24 sm:py-32">
        <div className="page-shell">
          <div className="eyebrow">How it works</div>
          <h2 className="section-title">Understand the process before automating it.</h2>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {auditSteps.map(([title, description], index) => (
              <li key={title} className="grid gap-4 py-8 sm:grid-cols-[70px_0.55fr_1.2fr] sm:gap-8">
                <span className="text-sm font-bold text-rust">0{index + 1}</span>
                <h3 className="font-display text-2xl font-bold text-text-primary">{title}</h3>
                <p className="max-w-2xl leading-7 text-text-secondary">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="page-shell">
          <div className="grid gap-8 rounded-[2rem] border border-line bg-white p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">Leave with a plan, not a pitch.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-text-secondary">Standard lead, review, and follow-up workflows fit the core offers. Specialized CRM, scheduling, communication, or agent-powered solutions are proposed separately with a clear outcome and scope.</p>
            </div>
            <Link href="/#contact" className="btn-primary">Start the conversation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
