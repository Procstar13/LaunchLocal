'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function StickyCta() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const isQuestionnaire = pathname === '/business-audit' || pathname.startsWith('/business-audit/')

  useEffect(() => {
    const update = () => {
      if (isQuestionnaire) { setVisible(false); return }
      const pastIntro = window.scrollY > 360
      const contact = document.getElementById('contact')

      if (!contact) {
        setVisible(pastIntro)
        return
      }

      const rect = contact.getBoundingClientRect()
      const contactInView = rect.top < window.innerHeight * 0.72
      setVisible(pastIntro && !contactInView)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname, isQuestionnaire])

  useEffect(() => {
    document.body.classList.toggle('pb-24', visible)
    return () => document.body.classList.remove('pb-24')
  }, [visible])

  if (isQuestionnaire) return null

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/95 backdrop-blur-xl transition-transform duration-200 ${
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="page-shell flex items-center justify-between gap-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="hidden min-w-0 sm:block">
          <p className="truncate font-display text-sm font-bold text-text-primary">
            Connect your systems. Automate the handoffs.
          </p>
          <p className="text-xs text-text-muted">Custom-scoped after a systems conversation</p>
        </div>
        <Link
          href="/?plan=Automation#contact"
          className="btn-primary w-full sm:w-auto sm:min-w-[220px]"
          tabIndex={visible ? 0 : -1}
        >
          Discuss a workflow
        </Link>
      </div>
    </div>
  )
}
