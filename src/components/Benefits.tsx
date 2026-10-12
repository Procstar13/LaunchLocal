import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Lead capture & routing',
    description: 'Move new inquiries from your website and lead sources into the right system, notify the right person, and reduce missed opportunities.',
  },
  {
    number: '02',
    title: 'CRM & system integration',
    description: 'Connect the tools your team already uses so customer information stays current without being copied from one place to another.',
  },
  {
    number: '03',
    title: 'Follow-up workflows',
    description: 'Automate routine reminders, status updates, review requests, and follow-up while keeping your team in control of the conversation.',
  },
  {
    number: '04',
    title: 'Reporting & visibility',
    description: 'Bring the useful numbers together so you can see what entered the pipeline, what happened next, and where work gets stuck.',
  },
]

export default function Benefits() {
  return (
    <section id="services" className="bg-section-bg py-24 sm:py-32">
      <div className="page-shell">
        <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="eyebrow">What we offer</div>
            <h2 className="section-title">Make the work between your tools happen automatically.</h2>
          </div>
          <p className="section-copy lg:justify-self-end">
            We map the handoffs that slow your team down, connect the systems involved, and automate the repeatable steps without forcing a full technology overhaul.
          </p>
        </div>

        <div className="divide-y divide-line">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid gap-4 py-8 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start sm:gap-8 sm:py-10"
            >
              <span className="font-display text-sm font-bold text-accent">{service.number}</span>
              <h3 className="font-display text-2xl font-bold leading-tight text-text-primary">
                {service.title}
              </h3>
              <p className="max-w-xl leading-7 text-text-secondary">{service.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-text-muted">
          Want the full approach?{' '}
          <Link href="/automations" className="font-bold text-text-primary hover:text-accent">
            See business systems &amp; automation
          </Link>
          . Need a website or local visibility support?{' '}
          <Link href="/pricing" className="font-bold text-text-primary hover:text-accent">
            Explore our web services
          </Link>.
        </p>
      </div>
    </section>
  )
}
