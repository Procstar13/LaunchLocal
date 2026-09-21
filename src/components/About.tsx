import Link from 'next/link'

const principles = [
  ['Show up', 'Make sure your business appears where local customers are already searching.'],
  ['Convert', 'Turn those searches into calls, quotes, and booked jobs with a clear website and contact path.'],
  ['Build trust', 'Keep your Google listing accurate and make it easy for happy customers to leave reviews.'],
  ['Track', 'See what is working with simple reporting you can actually understand.'],
  ['Report', 'Get straightforward updates on visibility, leads, and reviews — without the fluff.'],
  ['Improve', 'Keep the website, Google presence, and local search working so growth does not stall.'],
]

export default function About() {
  return (
    <section id="process" className="overflow-hidden bg-text-primary py-24 text-white sm:py-32">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="eyebrow text-sun before:bg-sun">Our philosophy and process</div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
              Get found. Make it easy to choose you.
            </h2>
          </div>
          <div>
            <p className="text-xl leading-9 text-white/75">
              LaunchLocal helps Arizona service businesses get found and turn local searches into customers. We keep it simple: a professional website, a strong Google presence, local search visibility, and reviews — <strong className="font-semibold text-white">without making you become a marketer</strong>.
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
            You run the business. We manage the local presence that helps customers find you.
          </p>
          <Link href="/#contact" className="inline-flex shrink-0 items-center font-bold text-sun hover:text-white">
            Let&apos;s talk <span className="ml-2" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
