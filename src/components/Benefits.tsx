import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Website',
    description: 'A professional, mobile-friendly site that makes it easy for local customers to understand what you do and contact you.',
  },
  {
    number: '02',
    title: 'Google presence',
    description: 'A complete, accurate Google Business Profile so your business shows up with the right services, photos, hours, and contact info.',
  },
  {
    number: '03',
    title: 'Local search visibility',
    description: 'Local SEO that helps nearby customers find you when they search for the services you offer.',
  },
  {
    number: '04',
    title: 'Reviews',
    description: 'A simple system to request, monitor, and grow the reviews that help people choose your business.',
  },
]

export default function Benefits() {
  return (
    <section id="services" className="bg-section-bg py-24 sm:py-32">
      <div className="page-shell">
        <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="eyebrow">What we offer</div>
            <h2 className="section-title">Four things that help local customers find you.</h2>
          </div>
          <p className="section-copy lg:justify-self-end">
            We build and manage your website, Google presence, local SEO, and reviews so you can spend more time on the job and less time trying to get found online.
          </p>
        </div>

        <div className="divide-y divide-line">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid gap-4 py-8 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start sm:gap-8 sm:py-10"
            >
              <span className="font-display text-sm font-bold text-rust">{service.number}</span>
              <h3 className="font-display text-2xl font-bold leading-tight text-text-primary">
                {service.title}
              </h3>
              <p className="max-w-xl leading-7 text-text-secondary">{service.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-text-muted">
          Need help with repetitive office work later?{' '}
          <Link href="/automations" className="font-bold text-text-primary hover:text-accent">
            See our automation options
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
