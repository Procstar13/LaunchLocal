'use client'

export default function Benefits() {
  const services = [
    {
      title: 'Custom Website Design',
      description: 'Professional, mobile-responsive websites tailored to your business needs. Modern design that converts visitors into customers.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Google Business Profile Optimization',
      description: 'Maximize your local visibility with optimized Google Business Profile. Get found by customers searching for your services.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'SEO',
      description: 'Search engine optimization to improve your website\'s ranking and drive organic traffic from potential customers.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: 'Google Analytics and Reporting',
      description: 'Track your website performance with detailed analytics and monthly reports to measure your success.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Custom Business Automations',
      description: 'Streamline your business processes with custom automation solutions. Save time and reduce manual work.',
      icon: (
        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: '/automations'
    }
  ]

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-poppins mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className={`text-center group hover:transform hover:scale-105 transition-all duration-300 ${service.link ? 'cursor-pointer' : ''}`}
              onClick={service.link ? () => window.location.href = service.link : undefined}
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300 border border-accent/20">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-text-primary font-poppins">
                  {service.title}
                </h3>
                <p className="text-text-muted font-inter leading-relaxed">
                  {service.description}
                </p>
                {service.link && (
                  <div className="text-accent font-inter text-sm font-medium">
                    Learn More →
                  </div>
                )}
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
