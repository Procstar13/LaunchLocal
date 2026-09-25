'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is there a contract?',
    answer: 'Local Growth is month-to-month. Local Business Launch is a one-time project with no required monthly marketing plan. We will explain renewal and cancellation terms before you sign anything.',
  },
  {
    question: 'What if I already have a website?',
    answer: 'A Website Tune-Up starts at $350. We audit the current site, repair broken pages, forms, and links, clean up mobile issues, and confirm leads reach you. Larger repairs are quoted after the audit. If a rebuild is the better path, we will say so.',
  },
  {
    question: 'What do you manage each month?',
    answer: 'Local Growth covers your website, Google presence, local SEO, and reviews. That includes hosting, listing management, review requests, search monitoring, and up to three website updates each month.',
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
    answer: 'No. You own the website, and there is no required monthly marketing plan. Local Growth is optional for businesses that want ongoing management of their website, Google presence, local search, and reputation.',
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
