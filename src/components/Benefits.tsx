import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Websites & Online Presence',
    description: 'A professional, mobile-responsive digital home built around your brand, services, and the customers you want to reach.',
  },
  {
    number: '02',
    title: 'Google & Local Visibility',
    description: 'Google Business Profile optimization, local search foundations, and clear reporting that help nearby customers find you.',
  },
  {
    number: '03',
    title: 'Lead & Review Automation',
    description: 'Capture new inquiries, notify your team, follow up quickly, and make it easier for happy customers to leave reviews.',
  },
  {
    number: '04',
    title: 'Business Process Automation',
    description: 'Reduce repetitive work across follow-ups, scheduling, data entry, CRM handoffs, and customer communication.',
  },
  {
    number: '05',
    title: 'AI & Agent Workflows',
    description: 'Custom solutions for work that needs more than a standard automation — scoped around a clear business outcome, not technology for its own sake.',
    href: '/automations',
  },
]

export default function Benefits() {
  return (
    <section id="services" className="bg-section-bg py-24 sm:py-32">
      <div className="page-shell">
        <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="eyebrow">What we offer</div>
            <h2 className="section-title">Build the front door. Improve what happens behind it.</h2>
          </div>
          <p className="section-copy lg:justify-self-end">
            Your website is the starting point. From there, we help your business get found, capture leads, earn reviews, and spend less time on repetitive work.
          </p>
        </div>

        <div className="divide-y divide-line">
          {services.map((service) => (
            <article
              key={service.title}
              className="group grid gap-4 py-8 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start sm:gap-8 sm:py-10"
            >
              <span className="font-display text-sm font-bold text-rust">{service.number}</span>
              <h3 className="font-display text-2xl font-bold leading-tight text-text-primary">
                {service.title}
              </h3>
              <div>
                <p className="max-w-xl leading-7 text-text-secondary">{service.description}</p>
                {service.href && (
                  <Link href={service.href} className="mt-4 inline-flex border-b border-text-primary pb-1 text-sm font-bold text-text-primary transition-colors hover:border-accent hover:text-accent">
                    Explore custom workflows <span className="ml-2" aria-hidden="true">↗</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
