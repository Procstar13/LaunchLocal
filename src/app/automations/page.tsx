import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Business Systems & Automation',
  description:
    'We connect the website, CRM, leads, scheduling, and follow-up you already use, then automate the work between them.',
  alternates: { canonical: '/automations' },
}

const offerings = [
  {
    title: 'Systems Audit',
    description:
      'We map how your website, CRM, leads, scheduling, and follow-up work today — and where they drop the ball.',
  },
  {
    title: 'CRM Integration',
    description:
      'We connect your website and lead sources to the CRM you already use so new inquiries do not sit in an inbox.',
  },
  {
    title: 'Workflow Automation',
    description:
      'We automate the handoffs: follow-up, reminders, review requests, and the steps your team repeats between jobs.',
  },
  {
    title: 'Custom Integrations',
    description:
      'When your tools do not talk to each other, we connect them so the same information is not entered twice.',
  },
  {
    title: 'Reporting & Analytics',
    description:
      'We pull the useful numbers into one place so you can see leads, follow-up, and what is actually happening.',
  },
]

export default function AutomationsPage() {
  return (
    <div>
      <section className="overflow-hidden border-b border-line bg-text-primary py-24 text-white sm:py-32">
        <div className="page-shell relative">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full border border-white/10" />
          <div className="eyebrow text-sun before:bg-sun">Business Systems & Automation</div>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
            Connect the systems. Automate the work between them.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-white/70">
            Your website, CRM, leads, scheduling, and customer follow-up shouldn&apos;t operate independently. We connect the systems you already use and automate the work between them.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-sun px-6 py-3 text-sm font-bold text-text-primary hover:bg-white"
            >
              Talk about your systems
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white hover:border-white"
            >
              See website and growth plans
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="page-shell">
          <div className="max-w-3xl">
            <div className="eyebrow">How we help</div>
            <h2 className="section-title">From audit to reporting, in a clear order.</h2>
            <p className="section-copy mt-5">
              We start by understanding the tools you already have. Then we connect them, automate the work between them, and make the results visible.
            </p>
          </div>

          <ol className="mt-12 divide-y divide-line border-y border-line">
            {offerings.map((item, index) => (
              <li key={item.title} className="grid gap-4 py-8 sm:grid-cols-[70px_0.7fr_1.2fr] sm:items-start sm:gap-8">
                <span className="text-sm font-bold text-rust">0{index + 1}</span>
                <h3 className="font-display text-2xl font-bold leading-tight text-text-primary">{item.title}</h3>
                <p className="max-w-2xl leading-7 text-text-secondary">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-section-bg py-24">
        <div className="page-shell">
          <div className="grid gap-8 rounded-[2rem] bg-text-primary p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">Scoped after the audit</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Tell us what you use today.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                We will look at your website, CRM, and follow-up, then recommend the integrations and automations that are worth doing. No hard sell.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-sun px-6 py-3 text-sm font-bold text-text-primary hover:bg-white"
            >
              Start the conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
