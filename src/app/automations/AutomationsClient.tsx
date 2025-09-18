'use client'

const automationServices = [
  {
    name: 'Form Integration into your existing CRM',
    description: 'Seamlessly connect your website forms to your existing sales CRM system for automatic lead capture and management.',
    businessImpact: 'Eliminate manual data entry, reduce lead response time, and ensure no potential customer falls through the cracks.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    name: 'On-site chat: Answer FAQs, or customer communication',
    description: 'Intelligent chat solutions that answer customer questions and enable real-time communication with your team.',
    businessImpact: 'Reduce support calls, capture leads 24/7, and provide instant customer service that improves satisfaction scores.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    name: 'Customer Intake',
    description: 'Automated customer intake forms and processes that streamline onboarding and data collection.',
    businessImpact: 'Reduce paperwork, improve data accuracy, and speed up the customer onboarding process while reducing administrative overhead.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    name: 'Social Media Lead Tracking',
    description: 'Automated social media posting with advanced lead tracking and CRM integration.',
    businessImpact: 'Increase qualified leads, reduce cost-per-acquisition, and automatically nurture prospects through your sales funnel.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
      </svg>
    )
  },
  {
    name: 'Appointment booking system',
    description: 'Automated scheduling that integrates with your calendar and sends reminders to reduce no-shows.',
    businessImpact: 'Eliminate phone tag, reduce no-shows, and free up staff time for revenue-generating activities while improving customer satisfaction.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Email follow-up automation',
    description: 'Automated email sequences that nurture leads and keep customers engaged.',
    businessImpact: 'Increase customer retention, boost repeat sales, and maintain consistent communication without manual effort.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    name: 'Automated Review Requests',
    description: 'Automatically request reviews from satisfied customers to boost your online reputation.',
    businessImpact: 'Increase positive reviews, improve search rankings, and build trust with potential customers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    name: 'Automated Review Response',
    description: 'Automatically respond to customer reviews to show engagement and address concerns.',
    businessImpact: 'Improve customer satisfaction, demonstrate responsiveness, and maintain a positive online presence.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    name: 'Inbound voice admin',
    description: 'AI-powered phone systems that answer calls, capture leads, and automatically store information in your CRM.',
    businessImpact: 'Never miss a call, capture all phone leads, and provide professional customer service even during off-hours.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  }
]

export default function AutomationsClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-transparent to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary font-poppins leading-tight mb-6">
            Automate Your Business
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-inter mb-8 max-w-4xl mx-auto leading-relaxed">
            Stop doing repetitive tasks manually. Our automation tools integrate seamlessly with your existing systems to save time, reduce errors, and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                window.location.href = '/#contact'
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Custom Quote
            </button>
            <button 
              onClick={() => {
                window.location.href = '/#pricing'
              }}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-poppins mb-6">
              Automation Services
            </h2>
            <p className="text-xl text-text-secondary font-inter max-w-3xl mx-auto">
              Each service is designed to solve specific business challenges and can be customized to fit your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {automationServices.map((service, index) => (
              <div
                key={index}
                className="bg-section-bg rounded-xl p-8 border border-text-muted/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-text-primary font-poppins mb-4">
                  {service.name}
                </h3>
                
                <p className="text-text-secondary font-inter mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="bg-accent/5 border-l-4 border-accent pl-4 py-3 mt-auto">
                  <h4 className="text-sm font-semibold text-accent mb-2 font-poppins">
                    Business Impact
                  </h4>
                  <p className="text-sm text-text-secondary font-inter">
                    {service.businessImpact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-poppins mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-text-secondary font-inter mb-8">
              Let's discuss which automations will have the biggest impact on your business. We'll create a custom solution that fits your budget and goals.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  window.location.href = '/#contact'
                }}
                className="btn-primary text-lg px-8 py-4"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
