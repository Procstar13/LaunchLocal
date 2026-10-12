import type { Metadata } from 'next'
import Link from 'next/link'
import Pricing from '../../components/Pricing'
import { comparisonRows, pricingFootnote, pricingTiers, veteranDiscountNote } from '@/data/pricing'

export const metadata: Metadata = {
  title: 'Website & Local Visibility Service Pricing',
  description: 'Launch for $999 setup, grow for $249/month with a $750 setup, or start a Website Tune-Up from $349. Veteran-owned businesses receive 10% off setup.',
  alternates: { canonical: '/pricing' },
}

export default function PricingPage() {
  return (
    <div>
      <Pricing />

      <section className="bg-background py-24 sm:py-32">
        <div className="page-shell">
          <div className="eyebrow">Plan details</div>
          <h1 className="section-title">Supporting website services with clear pricing.</h1>
          <p className="section-copy mt-5">
            Our primary work is business automation. When your customer-facing foundation also needs attention, Local Business Launch, Local Growth, and Website Tune-Up provide a straightforward place to start.
          </p>

          <div className="mt-12 overflow-x-auto rounded-xl border border-line bg-white">
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
          <p className="mt-4 max-w-3xl text-sm leading-6 text-text-muted">
            {veteranDiscountNote} on Local Business Launch and Local Growth. {pricingFootnote}
          </p>

          <div className="mt-16 grid gap-8 rounded-xl bg-text-primary p-8 text-white shadow-lg sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Not sure which service fits?</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Start with a conversation.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                Tell us what is slowing the business down. We&apos;ll recommend an automation audit, Local Business Launch, Local Growth, a Website Tune-Up, or a separately scoped project.
              </p>
            </div>
            <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-blue-600">
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
