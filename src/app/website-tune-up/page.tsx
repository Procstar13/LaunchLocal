import type { Metadata } from 'next'
import Link from 'next/link'
import { websiteTuneUp } from '@/data/pricing'

export const metadata: Metadata = {
  title: 'Website Tune-Up',
  description:
    'Audit and repair an existing website starting at $350. We fix broken pages, forms, and links, clean up mobile issues, set basic SEO and tracking, and verify that leads reach your business.',
  alternates: { canonical: '/website-tune-up' },
}

const included = [
  {
    title: 'Site audit',
    description: 'We review the pages you have, how visitors move through them, and what is getting in the way of a phone call or form submission.',
  },
  {
    title: 'Broken pages, forms, and links',
    description: 'Dead pages, failed contact forms, and links that go nowhere get repaired so customers can actually reach you.',
  },
  {
    title: 'WordPress and plugin maintenance',
    description: 'If the site is on WordPress, we update plugins, clean up what is unused, and reduce the risk of a neglected install.',
  },
  {
    title: 'Mobile cleanup',
    description: 'We fix layout, tap targets, and content that is hard to use on a phone, where most local searches happen.',
  },
  {
    title: 'Basic SEO and indexing',
    description: 'Titles, descriptions, and Search Console setup so Google can find the right pages and show the right business.',
  },
  {
    title: 'Analytics and conversion tracking',
    description: 'We install or repair analytics so you can see visits, calls, and form submissions instead of guessing.',
  },
  {
    title: 'Lead verification',
    description: 'We test the forms, notifications, and click-to-call paths and confirm that inquiries actually reach the business.',
  },
]

const steps = [
  {
    title: 'Audit',
    description: 'We inspect the current site and send a plain-language list of what is working, what is broken, and what should be fixed first.',
  },
  {
    title: 'Repair',
    description: 'Included fixes get done in the starting Tune-Up. Larger repairs, rebuilds, or new pages are quoted before we start that work.',
  },
  {
    title: 'Verify',
    description: 'We confirm the site loads on phones, forms send, and you receive the lead. Then we tell you what is next, if anything.',
  },
]

export default function WebsiteTuneUpPage() {
  return (
    <div>
      <section className="overflow-hidden border-b border-line bg-text-primary py-24 text-white sm:py-32">
        <div className="page-shell relative">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full border border-white/10" />
          <div className="eyebrow text-sun before:bg-sun">Website Tune-Up</div>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-7xl">
            Fix the site you already have.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-white/70">
            If the website is outdated, broken, or not sending leads, we audit it, repair the basics, and make sure inquiries reach you. Starting at ${websiteTuneUp.price}. Larger repairs are quoted after the audit.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/?plan=${encodeURIComponent(websiteTuneUp.shortName)}#contact`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-sun px-6 py-3 text-sm font-bold text-text-primary hover:bg-white"
            >
              Request a Tune-Up
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white hover:border-white"
            >
              See all pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="page-shell">
          <div className="max-w-3xl">
            <div className="eyebrow">What&apos;s included</div>
            <h2 className="section-title">A cleanup for the website you are already paying for.</h2>
            <p className="section-copy mt-5">
              This is for businesses that already have a site and need it working. It is not a redesign and not a new marketing plan.
            </p>
          </div>

          <div className="mt-12 divide-y divide-line border-y border-line">
            {included.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 py-8 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start sm:gap-8"
              >
                <span className="font-display text-sm font-bold text-rust">0{index + 1}</span>
                <h3 className="font-display text-2xl font-bold leading-tight text-text-primary">{item.title}</h3>
                <p className="max-w-xl leading-7 text-text-secondary">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section-bg py-24 sm:py-32">
        <div className="page-shell">
          <div className="eyebrow">How it works</div>
          <h2 className="section-title">Audit first. Quote the bigger work after.</h2>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {steps.map((step, index) => (
              <li key={step.title} className="grid gap-4 py-8 sm:grid-cols-[70px_0.55fr_1.2fr] sm:gap-8">
                <span className="text-sm font-bold text-rust">0{index + 1}</span>
                <h3 className="font-display text-2xl font-bold text-text-primary">{step.title}</h3>
                <p className="max-w-2xl leading-7 text-text-secondary">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background py-24 sm:py-32">
        <div className="page-shell grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-line bg-white p-8 sm:p-10">
            <h2 className="font-display text-3xl font-bold text-text-primary">A Tune-Up is the right start if</h2>
            <ul className="mt-6 space-y-4 text-text-secondary">
              {[
                'The site exists, but pages, forms, or links are broken.',
                'It looks fine on a computer and falls apart on a phone.',
                'You are not sure Google can find it, or whether leads reach you.',
                'WordPress or plugins have gone without maintenance.',
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-line bg-white p-8 sm:p-10">
            <h2 className="font-display text-3xl font-bold text-text-primary">A rebuild may be better if</h2>
            <ul className="mt-6 space-y-4 text-text-secondary">
              {[
                'The site no longer matches the business or the services you offer.',
                'You want a new site you own, with content, Google setup, and tracking included.',
                'The current platform is too far gone to repair at a reasonable cost.',
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="mt-8 inline-flex text-sm font-bold text-text-primary hover:text-accent">
              See Local Business Launch <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="bg-section-bg py-24">
        <div className="page-shell">
          <div className="grid gap-8 rounded-[2rem] bg-text-primary p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">Starting at ${websiteTuneUp.price}</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Send the site. We will tell you what it needs.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                No hard sell. After the audit, you will know what is included in the starting Tune-Up and what, if anything, should be quoted separately.
              </p>
            </div>
            <Link
              href={`/?plan=${encodeURIComponent(websiteTuneUp.shortName)}#contact`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-sun px-6 py-3 text-sm font-bold text-text-primary hover:bg-white"
            >
              Request a Tune-Up
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
