import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const startTime = Date.now()
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
  
  try {
    // Check environment variables
    const envCheck = {
      resendApiKey: !!process.env.RESEND_API_KEY,
      recaptchaSecretKey: !!process.env.RECAPTCHA_SECRET_KEY,
      recaptchaSiteKey: !!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
      gaId: !!process.env.NEXT_PUBLIC_GA_ID,
    }

    // Check if all required environment variables are present
    const allEnvVarsPresent = Object.values(envCheck).every(Boolean)
    
    const responseTime = Date.now() - startTime
    
    const healthData = {
      status: allEnvVarsPresent ? 'healthy' : 'degraded',
      timestamp: new Date().toISOString(),
      responseTime: `${responseTime}ms`,
      environment: process.env.NODE_ENV || 'development',
      ip,
      environmentVariables: envCheck,
      uptime: process.uptime ? `${Math.floor(process.uptime())}s` : 'unknown'
    }

    // Log health check
    console.log(`[${new Date().toISOString()}] HEALTH_CHECK - IP: ${ip}, Status: ${healthData.status}, ResponseTime: ${responseTime}ms`)

    return NextResponse.json(healthData, { 
      status: allEnvVarsPresent ? 200 : 503,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })

  } catch (error) {
    const errorId = Math.random().toString(36).substring(2, 15)
    console.error(`[${new Date().toISOString()}] HEALTH_CHECK_ERROR [${errorId}] - IP: ${ip}:`, error)
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Health check failed',
        errorId
      },
      { status: 500 }
    )
  }
}

// Handle other methods
export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
