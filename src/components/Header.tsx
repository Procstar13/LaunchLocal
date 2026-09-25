'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const links = [
    { href: '/#services', label: 'What we offer' },
    { href: '/#process', label: 'Our process' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/website-tune-up', label: 'Tune-Up' },
    { href: '/automations', label: 'Systems & Automation' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/90 backdrop-blur-xl">
      <div className="page-shell flex h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-2" aria-label="LaunchLocal home">
          <span className="font-display text-xl font-extrabold tracking-[-0.045em] text-text-primary">
            LaunchLocal
          </span>
          <span className="h-2 w-2 rounded-full bg-accent transition-transform group-hover:translate-y-[-2px]" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/#contact" className="btn-primary min-h-10 px-5">
            Book a conversation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="grid h-11 w-11 place-items-center rounded-full border border-line text-text-primary md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeWidth={2} d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path strokeLinecap="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-line bg-background md:hidden">
          <nav className="page-shell flex flex-col py-5" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-line py-4 font-display text-lg font-bold text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn-primary mt-5">
              Book a conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
