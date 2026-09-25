'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const work = [
  {
    title: 'Desert Air',
    category: 'Local HVAC website',
    image: '/Images/Carousel/desert-air.png',
    alt: 'Desert Air Heating & Cooling website',
  },
  {
    title: 'B&B Custom Tile',
    category: 'Local tile installation website',
    image: '/Images/Carousel/bb-custom-tile.png',
    alt: 'B&B Custom Tile website',
  },
  {
    title: 'Golf Simulator Directory',
    category: 'Searchable business directory',
    image: '/Images/Carousel/website-2.jpg',
    alt: 'Golf Simulator Directory website',
  },
]

export default function Work() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % work.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [paused, current])

  const goTo = (index: number) => {
    setCurrent((index + work.length) % work.length)
  }

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="page-shell">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow">Selected builds</div>
            <h2 className="section-title">Designed around the business, not a template.</h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-text-secondary">
            The website, Google listing, and reviews should make it obvious who you are and how to get in touch.
          </p>
        </div>

        <div
          className="relative mt-12 min-w-0"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white p-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {work.map((project) => (
                <figure key={project.title} className="min-w-full">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-section-bg">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 1180px) 1100px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary">{work[current].title}</h3>
              <p className="text-sm text-text-muted">{work[current].category}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(current - 1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-text-primary hover:border-text-primary"
                aria-label="Previous project"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2" aria-label="Selected builds">
                {work.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      current === index ? 'w-7 bg-rust' : 'w-2.5 bg-line hover:bg-text-muted'
                    }`}
                    aria-label={`Show ${project.title}`}
                    aria-current={current === index}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(current + 1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-text-primary hover:border-text-primary"
                aria-label="Next project"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
