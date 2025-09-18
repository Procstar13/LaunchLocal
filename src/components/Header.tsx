'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  
  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If not on homepage, navigate to homepage and scroll to section
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-text-muted/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold text-text-primary font-poppins">
              LaunchLocal
            </span>
            <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-200"></div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-inter"
            >
              Pricing
            </button>
            <Link 
              href="/automations"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-inter"
            >
              Automations
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-inter"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-inter"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Get Started Today
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
