import { NextRequest, NextResponse } from 'next/server'

// In-memory rate limiting store (in production, use Redis)
const rateLimitMap = new Map<string, number[]>()

// Error logging utility
const logError = (error: unknown, context: string, additionalData?: Record<string, unknown>) => {
  const timestamp = new Date().toISOString()
  const errorId = Math.random().toString(36).substring(2, 15)
  
  console.error(`[${timestamp}] ERROR [${errorId}] - ${context}:`, {
    error: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    ...additionalData
  })
  
  return errorId
}

// Success logging utility
const logSuccess = (message: string, data?: Record<string, unknown>) => {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] SUCCESS - ${message}:`, data)
}

// Rate limiting function
const rateLimit = (ip: string, maxRequests: number = 5, windowMs: number = 15 * 60 * 1000): boolean => {
  const now = Date.now()
  const userRequests = rateLimitMap.get(ip) || []
  
  // Remove old requests outside window
  const validRequests = userRequests.filter((time: number) => now - time < windowMs)
  
  if (validRequests.length >= maxRequests) {
    return false // Rate limited
  }
  
  validRequests.push(now)
  rateLimitMap.set(ip, validRequests)
  return true
}

// Input sanitization function
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000) // Limit length
}

// reCAPTCHA verification function
const verifyRecaptcha = async (token: string, ip: string): Promise<{ success: boolean; error?: string; score?: number }> => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  if (!secretKey) {
    const errorId = logError(new Error('RECAPTCHA_SECRET_KEY not configured'), 'reCAPTCHA_CONFIG', { ip })
    return { success: false, error: `Configuration error (${errorId})` }
  }

  if (!token || token.length < 10) {
    logError(new Error('Invalid reCAPTCHA token'), 'reCAPTCHA_TOKEN_VALIDATION', { ip, tokenLength: token?.length })
    return { success: false, error: 'Invalid reCAPTCHA token' }
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}&remoteip=${ip}`,
    })

    if (!response.ok) {
      const errorId = logError(new Error(`reCAPTCHA API returned ${response.status}`), 'reCAPTCHA_API_ERROR', { 
        ip, 
        status: response.status,
        statusText: response.statusText 
      })
      return { success: false, error: `reCAPTCHA API error (${errorId})` }
    }

    const data = await response.json()
    
    if (!data.success) {
      logError(new Error('reCAPTCHA verification failed'), 'reCAPTCHA_VERIFICATION_FAILED', { 
        ip, 
        errors: data['error-codes'],
        score: data.score 
      })
      return { success: false, error: 'reCAPTCHA verification failed', score: data.score }
    }

    const score = data.score || 0
    const minScore = 0.5
    
    if (score < minScore) {
      logError(new Error(`reCAPTCHA score too low: ${score}`), 'reCAPTCHA_LOW_SCORE', { 
        ip, 
        score, 
        minScore 
      })
      return { success: false, error: 'reCAPTCHA score too low', score }
    }

    logSuccess('reCAPTCHA verification successful', { ip, score })
    return { success: true, score }
    
  } catch (error) {
    const errorId = logError(error, 'reCAPTCHA_NETWORK_ERROR', { ip })
    return { success: false, error: `Network error (${errorId})` }
  }
}

export async function POST(request: NextRequest) {
  const startTime = Date.now()
  let ip = 'unknown'
  let requestId = ''

  try {
    // Get client IP for rate limiting
    ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    requestId = Math.random().toString(36).substring(2, 15)
    
    logSuccess('Contact form request started', { requestId, ip, userAgent: request.headers.get('user-agent') })
    
    // Check rate limit
    if (!rateLimit(ip)) {
      logError(new Error('Rate limit exceeded'), 'RATE_LIMIT_EXCEEDED', { requestId, ip })
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body with error handling
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      const errorId = logError(parseError, 'JSON_PARSE_ERROR', { requestId, ip })
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      )
    }

    const { name, email, businessName, message, website, recaptchaToken } = body

    // Honeypot validation
    if (website && website.trim()) {
      logError(new Error('Honeypot triggered'), 'HONEYPOT_TRIGGERED', { requestId, ip, website })
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }

    // reCAPTCHA verification
    const recaptchaResult = await verifyRecaptcha(recaptchaToken, ip)
    if (!recaptchaResult.success) {
      logError(new Error(recaptchaResult.error || 'reCAPTCHA failed'), 'RECAPTCHA_FAILED', { 
        requestId, 
        ip, 
        error: recaptchaResult.error,
        score: recaptchaResult.score 
      })
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    // Basic validation
    if (!name || !email || !businessName || !message) {
      logError(new Error('Missing required fields'), 'VALIDATION_ERROR', { 
        requestId, 
        ip, 
        hasName: !!name,
        hasEmail: !!email,
        hasBusinessName: !!businessName,
        hasMessage: !!message
      })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedBusinessName = sanitizeInput(businessName)
    const sanitizedMessage = sanitizeInput(message)

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/
    if (!emailRegex.test(sanitizedEmail)) {
      logError(new Error('Invalid email format'), 'EMAIL_VALIDATION_ERROR', { 
        requestId, 
        ip, 
        email: sanitizedEmail 
      })
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Resend integration
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      const errorId = logError(new Error('RESEND_API_KEY not configured'), 'RESEND_CONFIG_ERROR', { requestId, ip })
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const emailData = {
      from: 'LaunchLocal <launchlocal@gmail.com>',
      to: ['launchlocal@gmail.com'], // Your business email
      subject: `New Contact Form Submission from ${sanitizedBusinessName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Business:</strong> ${sanitizedBusinessName}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
          <p style="color: #6c757d; font-size: 14px;">
            This message was sent from the LaunchLocal contact form.
          </p>
        </div>
      `,
      replyTo: sanitizedEmail
    }

    let resendResponse
    try {
      resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })
    } catch (networkError) {
      const errorId = logError(networkError, 'RESEND_NETWORK_ERROR', { requestId, ip })
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    if (!resendResponse.ok) {
      let errorData
      try {
        errorData = await resendResponse.json()
      } catch (parseError) {
        errorData = { error: 'Failed to parse error response' }
      }
      
      const errorId = logError(new Error('Resend API error'), 'RESEND_API_ERROR', { 
        requestId, 
        ip, 
        status: resendResponse.status,
        statusText: resendResponse.statusText,
        errorData 
      })
      
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      )
    }

    const responseTime = Date.now() - startTime
    
    // Log successful submission
    logSuccess('Contact form submission sent via Resend', {
      requestId,
      name: sanitizedName,
      email: sanitizedEmail,
      businessName: sanitizedBusinessName,
      message: sanitizedMessage,
      ip,
      responseTime,
      recaptchaScore: recaptchaResult.score
    })

    // Return success response
    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    const errorId = logError(error, 'UNEXPECTED_ERROR', { 
      requestId, 
      ip, 
      userAgent: request.headers.get('user-agent'),
      url: request.url 
    })
    
    return NextResponse.json(
      { 
        error: 'An unexpected error occurred. Please try again later.',
        success: false 
      },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  const ip = 'unknown'
  const requestId = Math.random().toString(36).substring(2, 15)
  
  logError(new Error('GET method not allowed'), 'METHOD_NOT_ALLOWED', { requestId, ip })
  
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

// Health check endpoint
export async function HEAD() {
  return new NextResponse(null, { status: 200 })
}
