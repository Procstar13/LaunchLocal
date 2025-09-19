import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://launchlocal.com'),
  title: 'LaunchLocal - Websites + Automation for Small Businesses',
  description: 'Get online, get found, and save time — starting at just $50/month. Professional websites and automation services for small businesses.',
  keywords: 'small business website, automation, local business, web development, digital marketing, affordable website, business automation, local SEO',
  authors: [{ name: 'LaunchLocal' }],
  creator: 'LaunchLocal',
  publisher: 'LaunchLocal',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://launchlocal.com',
  },
  openGraph: {
    title: 'LaunchLocal - Websites + Automation for Small Businesses',
    description: 'Get online, get found, and save time — starting at just $50/month.',
    type: 'website',
    locale: 'en_US',
    url: 'https://launchlocal.com',
    siteName: 'LaunchLocal',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LaunchLocal - Websites + Automation for Small Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LaunchLocal - Websites + Automation for Small Businesses',
    description: 'Get online, get found, and save time — starting at just $50/month.',
    images: ['/og-image.png'],
  },
  other: {
    'theme-color': '#0d1117',
    'color-scheme': 'dark',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
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
                    page_title: 'LaunchLocal - Home',
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
        {/* reCAPTCHA */}
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            async
            defer
          />
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
