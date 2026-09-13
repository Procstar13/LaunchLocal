import Link from 'next/link'
import { pricingFootnote, pricingTiers } from '@/data/pricing'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-section-bg py-24 sm:py-32">
      <div className="page-shell">
        <div className="max-w-3xl">
          <div className="eyebrow">Two simple ways to work with us</div>
          <h2 className="section-title">Launch the digital front door. Keep improving the operation.</h2>
          <p className="section-copy mt-5">
            Start with a complete online presence and one useful automation. Add optional ongoing support when you want us to manage the website, visibility, reporting, and included workflows.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-line bg-background lg:grid-cols-2">
          {pricingTiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`relative flex min-w-0 flex-col p-7 sm:p-10 ${
                index > 0 ? 'border-t border-line lg:border-l lg:border-t-0' : ''
              } ${
                tier.featured
                  ? 'bg-white shadow-[inset_0_4px_0_#b65332,0_25px_60px_rgba(25,38,33,0.08)]'
                  : ''
              }`}
            >
              {tier.label && (
                <span className="mb-5 w-fit rounded-full bg-rust/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-rust">
                  {tier.label}
                </span>
              )}

              <h3 className="font-display text-3xl font-bold text-text-primary">{tier.name}</h3>
              <p className="mt-4 max-w-xl min-h-20 text-lg leading-7 text-text-secondary">{tier.description}</p>

              <div className="mt-7 flex items-end gap-2">
                <span className="font-display text-5xl font-extrabold tracking-tight text-text-primary">
                  ${tier.price}
                </span>
                <span className="pb-1 text-sm font-semibold text-text-muted">{tier.priceLabel}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-4 border-t border-line pt-7">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/?plan=${encodeURIComponent(tier.shortName)}#contact`}
                className={tier.featured ? 'btn-primary mt-8' : 'btn-secondary mt-8'}
              >
                {tier.cta}
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-text-muted">
          {pricingFootnote}
        </p>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm leading-6 text-text-secondary">
            Custom or more advanced automation—including specialized AI or agent workflows—can be scoped separately around a clear business need.
          </p>
          <Link href="/pricing" className="shrink-0 text-sm font-bold text-text-primary hover:text-accent">
            Compare the offers <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
