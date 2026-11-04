'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-99W9PQTM4B'

export default function GoogleAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer ?? []

    if (typeof window.gtag !== 'function') {
      window.gtag = (...arguments_: unknown[]) => {
        window.dataLayer?.push(arguments_)
      }

      window.gtag('js', new Date())
      window.gtag('config', GA_MEASUREMENT_ID)
    }
  }, [])

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
  )
}
