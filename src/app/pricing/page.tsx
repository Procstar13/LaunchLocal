import type { Metadata } from 'next'
import Link from 'next/link'
import Pricing from '../../components/Pricing'
import { comparisonRows, pricingFootnote, pricingTiers } from '@/data/pricing'

export const metadata: Metadata = {
  title: 'Local Business Launch & Operations Pricing',
  description: 'Launch your online presence for $750 one-time, with optional ongoing digital operations support for $150 per month.',
  alternates: { canonical: '/pricing' },
}

export default function PricingPage() {
  return (
    <div>
      <Pricing />

      <section className="bg-background py-24 sm:py-32">
        <div className="page-shell">
          <div className="eyebrow">Plan details</div>
          <h1 className="section-title">Launch your online presence. Add ongoing operations when you need them.</h1>
          <p className="section-copy mt-5">
            Local Business Launch gives you the website, Google foundation, lead tracking, and a starter automation. LaunchLocal Ops is the optional next step for ongoing management and workflow improvement.
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sun">Need something beyond the standard workflows?</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Custom automation can be scoped separately.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/65">
                LaunchLocal Ops includes practical lead response, follow-up, review requests, and ongoing improvements to those workflows. Scheduling, CRM, data entry, email or text communication, and more advanced agent-powered work start with a separate conversation and clear scope.
              </p>
            </div>
            <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-full bg-sun px-6 py-3 text-sm font-bold text-text-primary hover:bg-white">
              Discuss a custom workflow
            </Link>
          </div>

          <div className="mt-16 text-center">
            <h2 className="font-display text-3xl font-bold text-text-primary">Still deciding?</h2>
            <p className="mx-auto mt-3 max-w-xl text-text-secondary">Start with Local Business Launch, add Ops when it helps, or tell us what your business needs.</p>
            <Link href="/#contact" className="btn-primary mt-7">Book a free conversation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
