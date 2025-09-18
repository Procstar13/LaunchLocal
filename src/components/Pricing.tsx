'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const pricingTiers = [
    {
      name: 'Local Foundation',
      description: 'Perfect for getting found online and making a strong first impression.',
      monthlyPrice: 97,
      annualPrice: 87,
      setupFee: 150,
      features: [
        'Professional, mobile-responsive website',
        'Google Business Profile setup & optimization',
        'SEO foundation (keywords, meta tags, Google indexing)',
        'Contact form → email automation',
        '3 website edits per month'
      ],
      cta: 'Get Started',
      popular: false,
      tier: 'good'
    },
    {
      name: 'Reputation Builder',
      description: 'Level up your local presence and build customer trust automatically.',
      monthlyPrice: 197,
      annualPrice: 177,
      setupFee: 150,
      features: [
        'Everything in Local Foundation',
        'Automated review requests + professional responses',
        'Monthly keyword + reputation report',
        'Google Analytics setup & integration',
        '1 automation add-on of your choice (chatbot, CRM integration, intake, etc.)'
      ],
      cta: 'Get Started',
      popular: true,
      tier: 'better'
    },
    {
      name: 'Growth Accelerator',
      description: 'Hands-off growth with advanced SEO and full automation support.',
      monthlyPrice: 299,
      annualPrice: 269,
      setupFee: 150,
      features: [
        'Everything in Reputation Builder',
        '3 automation add-ons included free',
        'Advanced SEO (content optimization, backlinks, ranking reports)',
        'Social media business page setup & integration + lead tracking links',
        'Monthly performance report + strategy call'
      ],
      cta: 'Get Started',
      popular: false,
      tier: 'best'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-poppins mb-6">
            Choose Your Growth Level
          </h2>
          <p className="text-xl text-text-secondary font-inter mb-8 max-w-3xl mx-auto">
            From getting found online to dominating local search - we have the perfect plan for your business growth stage.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-text-primary' : 'text-text-muted'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`} />
              <span className={`inline-block h-4 w-4 transform rounded-full transition-colors ${
                isAnnual ? 'bg-accent' : 'bg-text-muted'
              }`} />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-text-primary' : 'text-text-muted'}`}>
              Annual
              <span className="ml-1 text-accent text-xs">(Save 10%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 flex flex-col h-full ${
                tier.popular
                  ? 'bg-section-bg border-accent shadow-2xl shadow-accent/20'
                  : 'bg-section-bg border-text-muted/20 hover:border-accent/50'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold font-poppins">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-text-primary font-poppins mb-2">
                  {tier.name}
                </h3>
                <p className="text-text-secondary font-inter mb-6">
                  {tier.description}
                </p>
                <div className="mb-2">
                  {tier.monthlyPrice !== null ? (
                    <>
                      <span className="text-4xl font-bold text-text-primary font-poppins">
                        ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                      </span>
                      <span className="text-text-muted font-inter">/month</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-text-primary font-poppins">
                      Contact for Pricing
                    </span>
                  )}
                </div>
                {tier.setupFee > 0 && !isAnnual && (
                  <p className="text-sm text-text-muted font-inter mb-2">
                    +${tier.setupFee} one-time setup fee
                  </p>
                )}
                {isAnnual && tier.annualPrice !== null && (
                  <p className="text-sm text-accent font-medium">
                    Billed annually (${tier.annualPrice * 12})
                  </p>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary font-inter">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  tier.popular
                    ? 'btn-primary text-lg'
                    : 'bg-section-bg hover:bg-section-bg/80 text-text-primary border-2 border-accent hover:bg-accent hover:text-white'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-text-muted font-inter mb-4">
            Need a custom solution? Let&apos;s discuss your specific requirements.
          </p>
          <Link href="#contact" className="btn-secondary inline-block">
            Contact Us for Custom Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
