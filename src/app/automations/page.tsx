import type { Metadata } from 'next'
import AutomationsClient from './AutomationsClient'

export const metadata: Metadata = {
  title: 'Add-ons & Automations - LaunchLocal',
  description: 'Discover powerful automation tools to streamline your business operations, increase efficiency, and boost revenue.',
  keywords: 'business automation, CRM integration, chat bots, lead tracking, appointment booking, reputation management',
}

export default function AutomationsPage() {
  return <AutomationsClient />
}
