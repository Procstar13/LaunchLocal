'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Carousel slides data
  const slides = [
    {
      id: 1,
      type: 'website',
      title: 'Professional Website Design',
      image: '/images/carousel/website-1.jpg'
    },
    {
      id: 2,
      type: 'analytics',
      title: 'Analytics Dashboard',
      image: '/images/carousel/analytics-1.jpg'
    },
    {
      id: 3,
      type: 'website',
      title: 'Mobile-Responsive Design',
      image: '/images/carousel/website-2.jpg'
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-20">
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
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary font-poppins leading-tight mb-6">
              Websites + Automation for{' '}
              <span className="text-accent relative">
                Small Businesses
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/30 rounded-full"></div>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-text-secondary font-inter mb-8 leading-relaxed">
              Get online, get found, and save time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right side - Carousel */}
          <div className="relative">
            <div className="relative w-full h-80 lg:h-[400px] rounded-2xl overflow-hidden bg-section-bg border-4 border-accent/50 shadow-2xl">
              {/* Slides container */}
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
                    <div className="w-full h-full relative overflow-hidden bg-section-bg">
                      {/* Actual image */}
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full"
                        style={{ 
                          objectFit: 'contain',
                          objectPosition: 'center',
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#f8fafc'
                        }}
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center absolute inset-0" style={{ display: 'none' }}>
                        <div className="text-center p-8">
                          <div className="w-32 h-32 bg-accent/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {slide.type === 'website' ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              )}
                            </svg>
                          </div>
                          <p className="text-text-secondary font-inter text-sm">
                            {slide.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Navigation with arrows and dots */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              {/* Previous arrow */}
              <button
                onClick={prevSlide}
                className="w-8 h-8 bg-section-bg hover:bg-accent text-text-primary hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 border border-text-muted/20"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots navigation */}
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentSlide === index
                        ? 'bg-accent scale-125'
                        : 'bg-text-muted/40 hover:bg-text-muted/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next arrow */}
              <button
                onClick={nextSlide}
                className="w-8 h-8 bg-section-bg hover:bg-accent text-text-primary hover:text-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 border border-text-muted/20"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
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
