import Link from 'next/link'

const principles = [
  ['Source', 'Identify where your customers are searching and make sure your business shows up.'],
  ['Convert', 'Turn visitors into leads with websites and funnels designed to drive action.'],
  ['Analyze', "Track what's working (and what's not) with clear data you can actually understand."],
  ['Automate', 'Save time with smart tools that handle follow-ups, missed calls, and scheduling.'],
  ['Report', 'Get simple, transparent updates that show your progress without the fluff.'],
  ['Optimize', "Continuously improve your online presence so your growth doesn't stall."],
]

export default function About() {
  return (
    <section id="process" className="overflow-hidden bg-text-primary py-24 text-white sm:py-32">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="eyebrow text-sun before:bg-sun">Our philosophy and process</div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
              Good technology should fit the way you work.
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-white/75">
              At LaunchLocal, we believe every small business deserves a professional online presence and practical tools that make the workday easier. We start with your digital front door, then improve how leads, reviews, follow-ups, and routine admin move through the business — <strong className="font-semibold text-white">without replacing the processes that already work</strong>.
            </p>
            <p className="mt-6 text-white/55">
              To keep things clear and effective, we follow six key principles.
            </p>
          </div>
        </div>

        <ol className="mt-16 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map(([title, description], index) => (
            <li key={title} className="min-h-56 border-b border-r border-white/15 p-7 sm:p-8">
              <span className="font-display text-sm font-bold text-sun">0{index + 1}</span>
              <h3 className="mt-10 font-display text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-white/60">{description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            The result is a stronger online presence now and a practical path to smarter operations later, so you can focus on running the business while we handle the digital work.
          </p>
          <Link href="/#contact" className="inline-flex shrink-0 items-center font-bold text-sun hover:text-white">
            Let&apos;s talk <span className="ml-2" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
