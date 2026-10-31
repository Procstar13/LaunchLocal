import Link from 'next/link'

const services = [
  { number: '01', title: 'Educate', description: 'Build confidence with practical AI sessions and identify where AI could help your business.', href: '/ai-education', cta: 'Explore AI workshops' },
  { number: '02', title: 'Audit', description: 'Our $650 business process audit maps a workflow, identifies bottlenecks, and delivers written recommendations.', href: '/automations', cta: 'Explore business audits' },
  { number: '03', title: 'Implement', description: 'When a solution makes business sense, we scope, build, test, and hand off the right automation or integration.', href: '/automations', cta: 'See implementation services' },
]

export default function Benefits() {
  return (
    <section id="services" className="bg-section-bg py-24 sm:py-32">
      <div className="page-shell">
        <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="eyebrow">What we offer</div>
            <h2 className="section-title">Learn first. Improve what matters. Build with purpose.</h2>
          </div>
          <p className="section-copy lg:justify-self-end">
            Start with education, move to a deeper audit when you have a process to improve, and implement only what delivers value. You can enter at any stage.
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
              <Link href={service.href} className="text-sm font-bold text-accent hover:text-text-primary">{service.cta} →</Link>
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
