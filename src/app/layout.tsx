import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://launchlocalaz.com'),
  title: {
    default: 'LaunchLocal Arizona | Online Presence & Business Automation',
    template: '%s | LaunchLocal Arizona',
  },
  description: 'LaunchLocal helps Arizona small businesses modernize their online presence and automate repetitive work — from websites and local visibility to leads, reviews, and follow-up.',
  keywords: 'Arizona small business website, local SEO Arizona, Google Business Profile, lead automation, review automation, business automation',
  authors: [{ name: 'LaunchLocal' }],
  creator: 'LaunchLocal',
  publisher: 'LaunchLocal',
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LaunchLocal Arizona | Online Presence & Business Automation',
    description: 'We build the digital front door for your business, then help automate the repetitive work behind it.',
    type: 'website',
    locale: 'en_US',
    url: 'https://launchlocalaz.com',
    siteName: 'LaunchLocal',
  },
  twitter: {
    card: 'summary',
    title: 'LaunchLocal Arizona | Online Presence & Business Automation',
    description: 'Modern websites. Smarter workflows. Less busywork.',
  },
  other: {
    'theme-color': '#f7f3ea',
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: 'LaunchLocal Arizona',
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-background text-text-primary antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
