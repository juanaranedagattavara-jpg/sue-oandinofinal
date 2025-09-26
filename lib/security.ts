/**
 * Configuración de seguridad centralizada para Sueño Andino
 * Incluye constantes, utilidades y configuraciones de seguridad
 */

// Configuración de rate limiting
export const RATE_LIMIT_CONFIG = {
  // Ventana de tiempo para rate limiting (15 minutos)
  WINDOW_MS: 15 * 60 * 1000,
  
  // Límites por tipo de endpoint
  GENERAL: {
    maxRequests: 100, // máximo 100 requests por IP en 15 minutos
  },
  FORMS: {
    maxRequests: 5, // máximo 5 envíos de formulario por IP en 15 minutos
  },
  API: {
    maxRequests: 50, // máximo 50 requests a API por IP en 15 minutos
  }
} as const

// Configuración de validación
export const VALIDATION_CONFIG = {
  // Longitudes máximas
  MAX_NAME_LENGTH: 50,
  MAX_EMAIL_LENGTH: 100,
  MAX_MESSAGE_LENGTH: 1000,
  
  // Patrones de validación
  NAME_PATTERN: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  
  // Caracteres prohibidos para prevenir XSS
  FORBIDDEN_CHARS: /[<>]/g,
  
  // Patrones de contenido malicioso
  MALICIOUS_PATTERNS: [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /data:text\/html/i,
    /vbscript:/i,
    /onload/i,
    /onerror/i
  ]
} as const

// Configuración de headers de seguridad
export const SECURITY_HEADERS = {
  // Content Security Policy compatible con Tailwind CSS y React
  CSP: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // Necesario para Next.js y Tailwind
    "style-src 'self' 'unsafe-inline'", // Necesario para Tailwind CSS
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "media-src 'self'",
    "worker-src 'self'",
  ].join('; '),
  
  // Headers de seguridad estándar
  X_FRAME_OPTIONS: 'DENY',
  X_CONTENT_TYPE_OPTIONS: 'nosniff',
  REFERRER_POLICY: 'strict-origin-when-cross-origin',
  PERMISSIONS_POLICY: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  X_DNS_PREFETCH_CONTROL: 'off',
  X_DOWNLOAD_OPTIONS: 'noopen',
  X_PERMITTED_CROSS_DOMAIN_POLICIES: 'none',
  
  // HSTS (solo en producción)
  HSTS: 'max-age=31536000; includeSubDomains; preload',
} as const

// Configuración de logging
export const LOGGING_CONFIG = {
  // Niveles de log
  LEVELS: {
    ERROR: 'error',
    WARN: 'warn',
    INFO: 'info',
    DEBUG: 'debug'
  },
  
  // Campos que no deben loggearse por seguridad
  SENSITIVE_FIELDS: ['password', 'token', 'secret', 'key', 'auth'],
  
  // Formato de timestamp
  TIMESTAMP_FORMAT: 'ISO',
} as const

// Utilidades de seguridad
export class SecurityUtils {
  /**
   * Sanitiza texto removiendo caracteres peligrosos
   */
  static sanitizeText(text: string, maxLength = 1000): string {
    return text
      .replace(VALIDATION_CONFIG.FORBIDDEN_CHARS, '')
      .trim()
      .substring(0, maxLength)
  }

  /**
   * Valida que el texto no contenga patrones maliciosos
   */
  static isSafeText(text: string): boolean {
    return !VALIDATION_CONFIG.MALICIOUS_PATTERNS.some(pattern => pattern.test(text))
  }

  /**
   * Valida formato de email
   */
  static isValidEmail(email: string): boolean {
    return VALIDATION_CONFIG.EMAIL_PATTERN.test(email)
  }

  /**
   * Valida formato de nombre
   */
  static isValidName(name: string): boolean {
    return VALIDATION_CONFIG.NAME_PATTERN.test(name)
  }

  /**
   * Obtiene IP real del cliente considerando proxies
   */
  static getClientIP(request: Request): string {
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

  /**
   * Crea log estructurado sin datos sensibles
   */
  static createSecureLog(data: Record<string, any>): Record<string, any> {
    const sanitized: Record<string, any> = {}
    
    Object.entries(data).forEach(([key, value]) => {
      const isSensitive = LOGGING_CONFIG.SENSITIVE_FIELDS.some(field => 
        key.toLowerCase().includes(field)
      )
      
      if (isSensitive) {
        sanitized[key] = '[REDACTED]'
      } else if (typeof value === 'string') {
        sanitized[key] = this.sanitizeText(value, 100)
      } else {
        sanitized[key] = value
      }
    })
    
    return {
      ...sanitized,
      timestamp: new Date().toISOString(),
      level: LOGGING_CONFIG.LEVELS.INFO
    }
  }

  /**
   * Genera nonce para CSP
   */
  static generateNonce(): string {
    return Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString('base64')
  }
}

// Configuración de CORS
export const CORS_CONFIG = {
  // Orígenes permitidos (en producción configurar según dominio)
  ALLOWED_ORIGINS: process.env.NODE_ENV === 'production' 
    ? ['https://sueñoandino.com', 'https://www.sueñoandino.com']
    : ['http://localhost:3000', 'http://localhost:3001'],
  
  // Métodos permitidos
  ALLOWED_METHODS: ['GET', 'POST', 'OPTIONS'],
  
  // Headers permitidos
  ALLOWED_HEADERS: ['Content-Type', 'Authorization', 'X-Requested-With'],
  
  // Credenciales
  CREDENTIALS: false, // No necesario para este proyecto
} as const

// Configuración de cookies de seguridad
export const COOKIE_CONFIG = {
  // Configuración por defecto para cookies seguras
  DEFAULT_OPTIONS: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict' as const,
    maxAge: 15 * 60 * 1000, // 15 minutos
  },
  
  // Configuración para cookies de sesión
  SESSION_OPTIONS: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict' as const,
    maxAge: 24 * 60 * 60 * 1000, // 24 horas
  }
} as const
