'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary font-poppins leading-tight mb-6">
            Websites + Automation for{' '}
            <span className="text-accent relative">
              Small Businesses
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 rounded-full"></div>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary font-inter mb-8 max-w-3xl mx-auto leading-relaxed">
            Get online, get found, and save time — starting at just{' '}
            <span className="text-accent font-semibold">$50/month</span>.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-lg px-8 py-4 shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300"
            >
              Get Started Today
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Pricing
            </button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-muted/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
