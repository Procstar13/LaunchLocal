import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyCta from '@/components/StickyCta'

export const metadata: Metadata = {
  metadataBase: new URL('https://launchlocalaz.com'),
  title: {
    default: 'LaunchLocal Arizona | Websites, Google, Local SEO & Reviews',
    template: '%s | LaunchLocal Arizona',
  },
  description: 'We help Arizona service businesses get found and turn local searches into customers. We build and manage your website, Google presence, local SEO, and reviews.',
  keywords: 'Arizona service business website, Google Business Profile Arizona, local SEO Arizona, online reviews, local search visibility',
  authors: [{ name: 'LaunchLocal' }],
  creator: 'LaunchLocal',
  publisher: 'LaunchLocal',
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LaunchLocal Arizona | Websites, Google, Local SEO & Reviews',
    description: 'We help Arizona service businesses get found and turn local searches into customers.',
    type: 'website',
    locale: 'en_US',
    url: 'https://launchlocalaz.com',
    siteName: 'LaunchLocal',
  },
  twitter: {
    card: 'summary',
    title: 'LaunchLocal Arizona | Websites, Google, Local SEO & Reviews',
    description: 'Website, Google presence, local SEO, and reviews for Arizona service businesses.',
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
        <StickyCta />
      </body>
    </html>
  )
}
