'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is there a contract?',
    answer: 'Plans begin with a three-month commitment because local visibility and SEO need time to produce useful signals. We will explain renewal and cancellation terms before you sign anything.',
  },
  {
    question: 'What if I already have a website?',
    answer: 'We can assess and improve your current site or rebuild it on our system. We will recommend the route that makes the most sense after reviewing what you have.',
  },
  {
    question: 'What can LaunchLocal automate?',
    answer: 'The standard launch and managed service can cover lead notifications, simple follow-up, review requests, and basic tracking. Scheduling, data entry, CRM workflows, email or text communication, and more advanced agent-powered work can be scoped separately when there is a clear business need.',
  },
  {
    question: 'Will I be able to edit my site myself?',
    answer: "Your plan includes managed edits, so you can send changes to us and keep running your business. If self-service editing is important, we can discuss that during your consultation.",
  },
  {
    question: 'How quickly can we get started?',
    answer: 'Timing depends on the size of the site and how quickly content is available. After the first conversation, we will give you a clear scope and launch schedule.',
  },
  {
    question: 'Do I need the monthly service?',
    answer: 'No. You own the website, and there is no required monthly plan. LaunchLocal Ops is optional for businesses that want us to keep managing their website, visibility, reporting, and included workflows.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <div className="eyebrow">Common questions</div>
          <h2 className="section-title">Straight answers before you commit.</h2>
          <p className="mt-6 max-w-sm leading-7 text-text-secondary">
            If your question is not here, send it our way. A useful first conversation should feel clear, not salesy.
          </p>
        </div>

        <div className="border-t border-line">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.question} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-bold text-text-primary sm:text-xl">{faq.question}</span>
                  <span className="text-2xl font-light text-rust" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="max-w-2xl pb-7 leading-7 text-text-secondary">{faq.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
