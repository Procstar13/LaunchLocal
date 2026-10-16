import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCta from '@/components/StickyCta'
import { siteConfig } from '@/config/site'

const GA_MEASUREMENT_ID = 'G-99W9PQTM4B'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Business Systems & Automation`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'We connect the tools service businesses already use and automate repetitive work across leads, CRM, scheduling, follow-up, and reporting.',
  keywords: 'business automation Arizona, workflow automation, CRM integration, lead follow-up automation, service business systems',
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteConfig.name} | Business Systems & Automation`,
    description: 'Connect your business systems and automate the repetitive work between leads, teams, and customers.',
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary',
    title: `${siteConfig.name} | Business Systems & Automation`,
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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
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
