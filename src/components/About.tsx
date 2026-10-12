import Link from 'next/link'

const principles = [
  ['Map', 'Document how information and work move through the business today, including the manual workarounds.'],
  ['Prioritize', 'Choose the bottlenecks where a reliable automation will save time or prevent missed follow-up.'],
  ['Connect', 'Link the tools you already use before recommending another platform or subscription.'],
  ['Automate', 'Build focused workflows with clear triggers, actions, ownership, and sensible safeguards.'],
  ['Verify', 'Test the complete path with real scenarios so the workflow does what the team expects.'],
  ['Measure', 'Make the result visible and improve the workflow when the business or process changes.'],
]

export default function About() {
  return (
    <section id="process" className="overflow-hidden bg-text-primary py-24 text-white sm:py-32">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="eyebrow text-blue-300 before:bg-blue-300">Our process</div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
              Understand first. Automate what is worth automating.
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-white/75">
              We start with the way your team works today, not a preselected software stack. Then we build the smallest reliable system that removes friction and keeps the right people informed.
            </p>
            <p className="mt-6 text-white/55">
              Every engagement is scoped after the audit, with the workflow and expected result made clear before implementation.
            </p>
          </div>
        </div>

        <ol className="mt-16 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(([title, description], index) => (
            <li key={title} className="min-h-56 border-b border-r border-white/15 p-7 sm:p-8">
              <span className="font-display text-sm font-bold text-blue-300">0{index + 1}</span>
              <h3 className="mt-10 font-display text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-white/60">{description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            Keep your tools. Improve the handoffs between them.
          </p>
          <Link href="/?plan=Automation#contact" className="inline-flex shrink-0 items-center font-bold text-blue-300 hover:text-white">
            Let&apos;s talk <span className="ml-2" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
