'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What can you automate?',
    answer: 'We focus on the repeatable work between lead sources, websites, CRMs, scheduling, customer follow-up, review requests, and reporting. The first conversation is used to understand your current tools and identify which handoffs are worth automating.',
  },
  {
    question: 'Do I have to replace the tools I already use?',
    answer: 'Usually, no. We start by mapping the systems you already have and look for practical ways to connect them. If a tool is the source of the problem, we will explain the tradeoff before recommending a change.',
  },
  {
    question: 'What is the difference between the free Snapshot and the $650 audit?',
    answer: 'The free Business Systems Snapshot is a self-guided questionnaire to identify what may need attention. The $650 Business Process Audit includes deeper discovery, interviews, a current-state process map, and written recommendations. It does not include implementation.',
  },
  {
    question: 'Do I need to take an AI workshop before booking an audit?',
    answer: 'No. Education is a useful entry point, not a requirement. You can request an audit or discuss an implementation whenever you are ready.',
  },
  {
    question: 'How is automation priced?',
    answer: 'Automation work is custom-scoped after an audit because the number of systems, workflow complexity, access requirements, and testing needs vary. You will receive a clear scope before implementation begins.',
  },
  {
    question: 'Will automation remove people from the process?',
    answer: 'Not where judgment is useful. Good automation handles predictable steps, routes information, and prompts action. We define where a person should review, approve, or take over before the workflow is built.',
  },
  {
    question: 'How quickly can we get started?',
    answer: 'Timing depends on the systems involved and the complexity of the workflow. After the audit, we will give you a clear scope, implementation sequence, and testing plan.',
  },
  {
    question: 'Do you still build and improve websites?',
    answer: 'Yes. Website launches, ongoing local visibility support, and Website Tune-Ups remain available as supporting services. Those offers have published pricing on the website services page.',
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
                  <span className="text-2xl font-light text-accent" aria-hidden="true">{isOpen ? '−' : '+'}</span>
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
