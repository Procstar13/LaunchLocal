'use client'

export default function Benefits() {
  const benefits = [
    {
      title: 'Affordable',
      description: 'Professional websites, local SEO, and automation tools. No hidden fees, no surprises.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Fast Setup',
      description: 'Get your business online in 48 hours or less. From design to launch, we handle everything quickly.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Local SEO',
      description: 'Optimized for local search so your customers can find you. Google My Business integration included.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Fully Managed',
      description: 'We handle updates, security, backups, and maintenance. Focus on your business, not your website.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-poppins mb-6">
            Why Choose LaunchLocal?
          </h2>
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            We make it simple for small businesses to get online and grow. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300 border border-accent/20">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary font-poppins">
                  {benefit.title}
                </h3>
                <p className="text-text-muted font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-1 gap-8 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent font-poppins">48hrs</div>
            <div className="text-text-secondary font-inter">Average Setup Time</div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-text-secondary font-inter mb-6">
            Ready to take your business online?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started Today
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
