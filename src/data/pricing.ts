export type PricingTier = {
  name: string
  shortName: string
  description: string
  price: number
  priceLabel: string
  cta: string
  label?: string
  featured?: boolean
  setupNote?: string
  features: string[]
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Local Business Launch',
    shortName: 'Launch',
    description: 'Everything you need to build a professional local presence and start getting found online.',
    price: 1000,
    priceLabel: 'setup',
    cta: 'Launch My Business',
    setupNote: 'One-time · No monthly plan required',
    features: [
      'Custom 4–10 page mobile-responsive website',
      'Professionally written, locally optimized website content',
      'Contact and quote forms with lead notifications',
      'Google Business Profile setup, cleanup, and optimization',
      'Local keyword research and on-page SEO',
      'Google Analytics and conversion tracking',
      'Google Search Console setup and indexing',
      'Domain connection and website launch',
      '90 days of minor website updates',
      'You own your website. No required monthly marketing plan',
    ],
  },
  {
    name: 'Local Growth',
    shortName: 'Growth',
    description: 'Ongoing management of your website, Google presence, local search visibility, and online reputation.',
    price: 399,
    priceLabel: '/ month',
    cta: 'Grow My Business',
    featured: true,
    setupNote: '$750 setup · Month-to-month',
    features: [
      'Everything in Local Business Launch, plus:',
      'Website hosting, maintenance, backups, and security',
      'Ongoing local SEO optimization',
      'Google Business Profile management and optimization',
      'Local keyword and Maps ranking monitoring',
      'Citation and local business listing management',
      'Online review monitoring and review-generation system',
      'Search performance and competitor monitoring',
      'Website content and SEO updates',
      'Lead and conversion tracking',
      'Monthly performance reporting',
      'Up to 3 managed website updates per month',
      'Ongoing recommendations to improve local visibility and lead generation',
    ],
  },
]

export const comparisonRows = [
  { label: 'Payment', values: ['$1,000 one-time', '$399 / month'] },
  { label: 'Setup', values: ['$1,000', '$750'] },
  { label: 'Veteran-owned discount', values: ['10% off setup', '10% off setup'] },
  { label: 'Commitment', values: ['No monthly plan required', 'Month-to-month'] },
  { label: 'Website', values: ['Custom 4–10 page site', 'Included + hosted'] },
  { label: 'Website content', values: ['Professionally written', 'Ongoing content and SEO updates'] },
  { label: 'Lead forms and notifications', values: ['Included', 'Included'] },
  { label: 'Google Business Profile', values: ['Setup, cleanup, and optimization', 'Ongoing management'] },
  { label: 'Local SEO', values: ['Keyword research and on-page', 'Ongoing optimization'] },
  { label: 'Analytics and conversion tracking', values: ['Setup included', 'Monitored monthly'] },
  { label: 'Search Console and indexing', values: ['Setup included', 'Search performance monitoring'] },
  { label: 'Maps ranking monitoring', values: ['—', 'Included'] },
  { label: 'Citations and listings', values: ['—', 'Managed'] },
  { label: 'Reviews', values: ['—', 'Monitoring and generation'] },
  { label: 'Competitor monitoring', values: ['—', 'Included'] },
  { label: 'Managed updates', values: ['90 days of minor edits', '3 / month'] },
  { label: 'Monthly reporting', values: ['—', 'Included'] },
  { label: 'Website ownership', values: ['Customer owns it', 'Customer owns it'] },
]

export const websiteTuneUp = {
  name: 'Website Tune-Up',
  shortName: 'Tune-Up',
  description:
    'Already have a website? We audit it, repair what is broken, and make sure leads actually reach you.',
  price: 350,
  priceLabel: 'starting',
  setupNote: 'Larger repairs quoted after the audit',
  href: '/website-tune-up',
  cta: 'See the Tune-Up',
  features: [
    'Audit of your existing website',
    'Repair broken pages, forms, and links',
    'WordPress and plugin maintenance',
    'Mobile cleanup so the site works on phones',
    'Basic SEO and indexing',
    'Analytics and conversion tracking',
    'Verify that leads actually reach the business',
  ],
}

export const veteranDiscountNote = '10% off setup for veteran-owned businesses'

export const pricingFootnote =
  'Minor updates include content, image, contact, and basic page edits. New pages, redesigns, or custom functionality are quoted separately.'
