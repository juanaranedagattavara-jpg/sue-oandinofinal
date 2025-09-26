import { NextRequest, NextResponse } from 'next/server'

/**
 * Middleware de seguridad para Sueño Andino
 * Implementa headers de seguridad, rate limiting y protección CSRF
 * Compatible con Tailwind CSS y funcionalidades existentes
 */

// Rate limiting simple en memoria (para producción usar Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Configuración de rate limiting
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutos
  maxRequests: 100, // máximo 100 requests por IP
  maxFormSubmissions: 5, // máximo 5 envíos de formulario por IP
}

// Headers de seguridad compatibles con Tailwind CSS y React
const securityHeaders = {
  // Content Security Policy que permite Tailwind CSS y componentes React
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // Necesario para Next.js y Tailwind
    "style-src 'self' 'unsafe-inline'", // Necesario para Tailwind CSS
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),
  
  // Headers de seguridad estándar
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  'X-DNS-Prefetch-Control': 'off',
  'X-Download-Options': 'noopen',
  'X-Permitted-Cross-Domain-Policies': 'none',
  
  // HSTS (solo en producción con HTTPS)
  ...(process.env.NODE_ENV === 'production' && {
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  }),
}

// Función para verificar rate limiting
function checkRateLimit(ip: string, isFormSubmission = false): boolean {
  const now = Date.now()
  const key = `${ip}:${isFormSubmission ? 'form' : 'general'}`
  const limit = isFormSubmission ? RATE_LIMIT.maxFormSubmissions : RATE_LIMIT.maxRequests
  
  const current = rateLimitMap.get(key)
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT.windowMs })
    return true
  }
  
  if (current.count >= limit) {
    return false
  }
  
  current.count++
  return true
}

// Función para obtener IP real (considerando proxies)
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (realIP) {
    return realIP
  }
  
  return 'unknown'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const ip = getClientIP(request)
  
  // Aplicar headers de seguridad a todas las rutas
  const response = NextResponse.next()
  
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  
  // Rate limiting para APIs de contacto
  if (pathname.startsWith('/api/contact')) {
    const isFormSubmission = request.method === 'POST'
    
    if (!checkRateLimit(ip, isFormSubmission)) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Demasiadas solicitudes. Intenta de nuevo más tarde.',
          code: 'RATE_LIMIT_EXCEEDED'
        }),
        { 
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '900', // 15 minutos
          }
        }
      )
    }
  }
  
  // Rate limiting general (más permisivo)
  if (!checkRateLimit(ip, false)) {
    return new NextResponse(
      'Demasiadas solicitudes. Intenta de nuevo más tarde.',
      { 
        status: 429,
        headers: {
          'Retry-After': '900',
        }
      }
    )
  }
  
  // Protección contra ataques de path traversal
  if (pathname.includes('..') || pathname.includes('//')) {
    return new NextResponse('Bad Request', { status: 400 })
  }
  
  // Headers adicionales para APIs
  if (pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
  }
  
  return response
}

// Configuración del middleware
export const config = {
  matcher: [
    /*
     * Aplicar a todas las rutas excepto:
     * - _next/static (archivos estáticos)
     * - _next/image (optimización de imágenes)
     * - favicon.ico (favicon)
     * - public (archivos públicos)
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}
