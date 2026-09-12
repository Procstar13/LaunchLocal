import type { Metadata } from 'next'
import AutomationsClient from './AutomationsClient'

export const metadata: Metadata = {
  title: 'Business Automation',
  description: 'Practical lead, review, follow-up, scheduling, CRM, and administrative workflow automation for Arizona small businesses.',
  alternates: { canonical: '/automations' },
}

export default function AutomationsPage() {
  return <AutomationsClient />
}
