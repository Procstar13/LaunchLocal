'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
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
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false)
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/pricing"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-inter"
            >
              Pricing
            </Link>
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

          {/* Desktop CTA Button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block btn-primary"
          >
            Get Started Today
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={handleMobileMenuToggle}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-container md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-section-bg rounded-lg border border-text-muted/20 p-4 space-y-4">
            {/* Mobile Navigation Links */}
            <nav className="space-y-3">
              <Link 
                href="/pricing"
                className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors duration-200 font-inter py-2 px-3 rounded-lg hover:bg-background/50"
              >
                Pricing
              </Link>
              <Link 
                href="/automations"
                className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors duration-200 font-inter py-2 px-3 rounded-lg hover:bg-background/50"
              >
                Automations
              </Link>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors duration-200 font-inter py-2 px-3 rounded-lg hover:bg-background/50"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors duration-200 font-inter py-2 px-3 rounded-lg hover:bg-background/50"
              >
                Contact
              </button>
            </nav>
            
            {/* Mobile CTA Button */}
            <div className="pt-3 border-t border-text-muted/20">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full btn-primary py-3"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
