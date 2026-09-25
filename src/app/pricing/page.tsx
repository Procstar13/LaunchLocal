import type { Metadata } from 'next'
import Link from 'next/link'
import Pricing from '../../components/Pricing'
import { comparisonRows, pricingFootnote, pricingTiers } from '@/data/pricing'

export const metadata: Metadata = {
  title: 'Local Business Launch, Local Growth & Website Tune-Up Pricing',
  description: 'Launch for $750, grow for $399/month, or start a Website Tune-Up from $350 if you already have a site.',
  alternates: { canonical: '/pricing' },
}

export default function PricingPage() {
  return (
    <div>
      <Pricing />

      <section className="bg-background py-24 sm:py-32">
        <div className="page-shell">
          <div className="eyebrow">Plan details</div>
          <h1 className="section-title">Launch your local presence. Add growth when you are ready.</h1>
          <p className="section-copy mt-5">
            Local Business Launch gives you the website, content, Google foundation, and tracking to get found. Local Growth is the ongoing plan for website, Google presence, local search, and reputation. If you already have a site, start with a Website Tune-Up.
          </p>

          <div className="mt-12 overflow-x-auto rounded-[1.5rem] border border-line bg-white">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-section-bg">
                  <th className="p-5 text-xs font-bold uppercase tracking-wider text-text-muted">Service</th>
                  {pricingTiers.map((tier) => (
                    <th key={tier.name} className="p-5 font-display text-lg font-bold text-text-primary">{tier.shortName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-line last:border-b-0">
                    <th className="p-5 text-sm font-semibold text-text-primary">{row.label}</th>
                    {row.values.map((value, index) => (
                      <td key={`${row.label}-${index}`} className={`p-5 text-sm ${value === '—' ? 'text-text-muted' : 'font-medium text-text-secondary'}`}>
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-text-muted">{pricingFootnote}</p>

          <div className="mt-16 grid gap-8 rounded-[2rem] bg-text-primary p-8 text-white sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">Not sure which plan fits?</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Start with a conversation.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                Tell us where you want more local customers. We&apos;ll recommend Local Business Launch, Local Growth, a Website Tune-Up, or a scoped project around your website, Google presence, local SEO, and reviews.
              </p>
            </div>
            <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-sun px-6 py-3 text-sm font-bold text-text-primary hover:bg-white">
              Book a conversation
            </Link>
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-display text-3xl font-bold text-text-primary">Still deciding?</h2>
            <p className="mx-auto mt-3 max-w-xl text-text-secondary">Start with Local Business Launch, add Local Growth when it helps, book a Website Tune-Up, or tell us what your business needs.</p>
            <Link href="/#contact" className="btn-primary mt-7">Book a free conversation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
