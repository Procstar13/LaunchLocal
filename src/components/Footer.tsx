import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-section-bg">
      <div className="page-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-display text-2xl font-extrabold tracking-[-0.045em] text-text-primary">{siteConfig.name}</span>
              <span className="h-2 w-2 rounded-full bg-accent" />
            </Link>
            <p className="mt-4 max-w-sm text-base leading-7 text-text-secondary">
              We connect business systems and automate the repetitive work between leads, teams, and customers.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Explore</h2>
            <nav className="mt-4 flex flex-col gap-3 text-sm font-semibold text-text-secondary">
              <Link href="/automations" className="hover:text-text-primary">Business Systems & Automation</Link>
              <Link href="/#process" className="hover:text-text-primary">Our process</Link>
              <Link href="/pricing" className="hover:text-text-primary">Website services</Link>
              <Link href="/ai-education" className="hover:text-text-primary">AI Education</Link>
              <Link href="/website-tune-up" className="hover:text-text-primary">Website Tune-Up</Link>
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-text-muted">Start here</h2>
            <p className="mt-4 text-sm leading-6 text-text-secondary">Tell us where work gets repeated or falls through. We&apos;ll respond within one business day.</p>
            <Link href="/?plan=Automation#contact" className="mt-4 inline-flex border-b border-text-primary pb-1 text-sm font-bold text-text-primary hover:text-accent">
              Discuss a workflow
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Arizona, USA.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-text-primary">Privacy</Link>
            <Link href="/terms" className="hover:text-text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
