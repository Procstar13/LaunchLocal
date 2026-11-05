import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCta from '@/components/StickyCta'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI Education, Audits & Automation`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Practical AI education, business process audits, and custom automation for small businesses.',
  keywords: 'business automation Arizona, workflow automation, CRM integration, lead follow-up automation, service business systems',
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} | AI Education, Audits & Automation`,
    description: 'Connect your business systems and automate the repetitive work between leads, teams, and customers.',
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary',
    title: `${siteConfig.name} | AI Education, Audits & Automation`,
    description: 'Practical workflow automation and system integration for service businesses.',
  },
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="bg-background text-text-primary antialiased min-h-screen flex flex-col">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  )
}
