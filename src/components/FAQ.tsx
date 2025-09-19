'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do I need to sign a long-term contract?",
      answer: "There is a 3-month contract. This is due to the fact that SEO and online visibility take time. You'll see results in less than 90 days."
    },
    {
      question: "What if I already have a website?",
      answer: "We can either optimize your current site or rebuild a fresh one on our system at no extra cost beyond setup."
    },
    {
      question: "How do the automations work?",
      answer: "We connect your forms, CRM, or messaging tools to automate follow-ups, review requests, and more. We will make sure there isn't any additional work, or training, required from you and your team."
    },
    {
      question: "Can I choose which automations I want?",
      answer: "Yes! Each plan includes a set number of add-ons. You pick the ones that make the most sense for your business."
    },
    {
      question: "Will I be able to edit my site myself?",
      answer: "We include 3 monthly edits, so you can just email us and we'll handle it. If you'd like a one-time payment with a CMS so you can edit your site, let us know. We can make it happen."
    },
    {
      question: "How fast can I get started?",
      answer: "Most sites are live within 2 days after our initial consultation. Automations require further consultation because we do not want to impede on your current operations, or change your business processes that work for you."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-poppins mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary font-inter mb-8 max-w-3xl mx-auto">
            Got questions? We&apos;ve got answers. Here are the most common questions we receive about our services.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border border-text-muted/20 overflow-hidden transition-all duration-300 hover:border-accent/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-text-primary font-poppins pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-accent transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-text-secondary font-inter leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
