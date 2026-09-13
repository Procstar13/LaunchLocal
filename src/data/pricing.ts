export type PricingTier = {
  name: string
  shortName: string
  description: string
  price: number
  priceLabel: string
  cta: string
  label?: string
  featured?: boolean
  features: string[]
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Local Business Launch',
    shortName: 'Launch',
    description: 'A complete setup to strengthen your online presence and create a foundation for future automation.',
    price: 750,
    priceLabel: 'one-time',
    cta: 'Launch My Business',
    features: [
      'Custom 4–6 page mobile-responsive website built around your branding',
      'Contact or quote forms with lead notifications',
      'One starter automation: lead response, reviews, estimate follow-up, or lead tracking',
      'Business Automation Audit during onboarding',
      'Google Business Profile audit, cleanup, and optimization',
      'Analytics, conversion, and click-to-call tracking',
      'Search Console, indexing, and local SEO foundation',
      'Domain connection and launch',
      '90 days of minor website updates included after launch',
      'You own your website — no required monthly plan',
    ],
  },
  {
    name: 'LaunchLocal Ops',
    shortName: 'Ops',
    description: 'Ongoing digital operations support for your website, online presence, reporting, and included workflows.',
    price: 150,
    priceLabel: '/ month',
    cta: 'Keep My Business Managed',
    label: 'Optional',
    featured: true,
    features: [
      'Website hosting and technical maintenance',
      'Up to 3 managed website updates / month',
      'Analytics and lead tracking',
      'Simple monthly performance report',
      'Google Business Profile monitoring and optimization',
      'Search performance monitoring',
      'Review request automation',
      'Lead response and follow-up automation',
      'Ongoing optimization of included workflows',
      'Periodic business automation review',
    ],
  },
]

export const comparisonRows = [
  { label: 'Payment', values: ['$750 one-time', '$150 / month'] },
  { label: 'Website ownership', values: ['Customer owns it', 'Customer owns it'] },
  { label: 'Hosting and maintenance', values: ['—', 'Included'] },
  { label: 'Managed updates', values: ['90 days of minor edits', '3 / month'] },
  { label: 'Analytics and lead tracking', values: ['Setup included', 'Monitored monthly'] },
  { label: 'Google Business Profile', values: ['Audit and optimization', 'Monitored and optimized'] },
  { label: 'Starter automation', values: ['One included', 'Maintained and improved'] },
  { label: 'Review automation', values: ['Available starter option', 'Included'] },
  { label: 'Lead follow-up', values: ['Available starter option', 'Included'] },
  { label: 'Business Automation Audit', values: ['Included', 'Reviewed periodically'] },
]

export const pricingFootnote =
  'Minor updates include content, image, contact, and basic page edits. New pages, redesigns, or custom functionality are quoted separately.'
