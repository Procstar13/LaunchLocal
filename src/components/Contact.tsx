'use client'

import { useState, useEffect } from 'react'

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    message: '',
    website: '' // Honeypot field
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  // Load reCAPTCHA script
  useEffect(() => {
    const loadRecaptcha = () => {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      if (!siteKey) return

      if (window.grecaptcha) {
        setRecaptchaLoaded(true)
        return
      }

      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`
      script.async = true
      script.defer = true
      script.onload = () => setRecaptchaLoaded(true)
      document.head.appendChild(script)
    }

    loadRecaptcha()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    // Honeypot validation - if filled, it's likely a bot
    if (formData.website.trim()) {
      newErrors.submit = 'Spam detected. Please try again.'
      setErrors(newErrors)
      return false
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const getRecaptchaToken = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha || !recaptchaLoaded) {
        reject(new Error('reCAPTCHA not loaded'))
        return
      }

      window.grecaptcha.ready(() => {
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
        if (!siteKey) {
          reject(new Error('reCAPTCHA site key not configured'))
          return
        }
        window.grecaptcha.execute(siteKey, { action: 'contact_form' })
          .then((token: string) => resolve(token))
          .catch((error: unknown) => reject(error))
      })
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Get reCAPTCHA token
      const recaptchaToken = await getRecaptchaToken()
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', businessName: '', message: '', website: '' })
        setErrors({})
      } else {
        setErrors({ submit: result.error || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="bg-section-bg py-24">
        <div className="page-shell">
          <div className="max-w-2xl mx-auto text-center">
            <div className="rounded-[2rem] border border-line bg-white p-8 sm:p-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage/15">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-text-primary mb-4">
                Your message is on its way.
              </h2>
              <p className="text-text-secondary mb-8">
                Thanks for reaching out. We&apos;ll respond within one business day to discuss what your business needs.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="bg-rust py-24 sm:py-32">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <div className="eyebrow text-sun before:bg-sun">Start a conversation</div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
            What should your digital front door do better?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/75">
            Tell us where your online presence or day-to-day workflow feels stuck. We&apos;ll respond within one business day with a useful next step.
          </p>
          <div className="mt-10 border-t border-white/20 pt-6 text-sm leading-7 text-white/70">
            <p>No hard sell.</p>
            <p>No technical homework.</p>
            <p>No commitment from the first conversation.</p>
          </div>
        </div>

        <div className="min-w-0">
          <div className="rounded-[2rem] bg-background p-6 shadow-[0_30px_70px_rgba(80,30,16,0.22)] sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-text-primary">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-xl border bg-white px-4 py-3.5 text-text-primary ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-text-muted/30 focus:border-accent'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm font-inter">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-text-primary">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-xl border bg-white px-4 py-3.5 text-text-primary ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-text-muted/30 focus:border-accent'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm font-inter">{errors.email}</p>
                )}
              </div>

              {/* Business Name Field */}
              <div>
                <label htmlFor="businessName" className="mb-2 block text-sm font-bold text-text-primary">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={`w-full rounded-xl border bg-white px-4 py-3.5 text-text-primary ${
                    errors.businessName 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-text-muted/30 focus:border-accent'
                  }`}
                  placeholder="Enter your business name"
                />
                {errors.businessName && (
                  <p className="mt-1 text-red-400 text-sm font-inter">{errors.businessName}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-text-primary">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full resize-none rounded-xl border bg-white px-4 py-3.5 text-text-primary ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-text-muted/30 focus:border-accent'
                  }`}
                  placeholder="What would you like to improve—your website, local visibility, leads, follow-up, reviews, or another repetitive task?"
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm font-inter">{errors.message}</p>
                )}
              </div>

              {/* Honeypot Field - Hidden from users */}
              <div style={{ display: 'none' }}>
                <label htmlFor="website">Website (leave blank)</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm font-inter">{errors.submit}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full py-4 text-base ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  'Send my message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
