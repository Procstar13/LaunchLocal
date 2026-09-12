import Image from 'next/image'

const work = [
  {
    title: "King Jack's",
    category: 'Local service website',
    image: '/Images/Carousel/website-1.jpg',
    alt: "King Jack's landscaping website",
  },
  {
    title: 'Golf Simulator Directory',
    category: 'Searchable business directory',
    image: '/Images/Carousel/website-2.jpg',
    alt: 'Golf Simulator Directory website',
  },
]

export default function Work() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="page-shell">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow">Selected builds</div>
            <h2 className="section-title">Designed around the business, not a template.</h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-text-secondary">
            The website is where customers meet the business. Clear lead capture and useful follow-up make sure the next step does not get lost.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {work.map((project, index) => (
            <figure key={project.title} className={index === 1 ? 'lg:mt-20' : ''}>
              <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white p-2">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1024}
                  height={547}
                  className="h-auto w-full rounded-[1.25rem]"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-bold text-text-primary">{project.title}</h3>
                <span className="text-sm text-text-muted">{project.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
