import { NextRequest, NextResponse } from 'next/server'
import { validateApiGuide } from '@/lib/validations'

/**
 * API de lead magnet (guía gratuita) con validación de seguridad robusta
 * Protege contra XSS, inyección, spam y ataques comunes
 */

export async function POST(request: NextRequest) {
  try {
    // Verificar Content-Type
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type debe ser application/json' },
        { status: 400 }
      )
    }

    // Parsear y validar datos con Zod
    const body = await request.json()
    const validation = validateApiGuide(body)

    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Datos de entrada inválidos',
          details: validation.errors 
        },
        { status: 400 }
      )
    }

    const { name, email } = validation.data!

    // Log estructurado para monitoreo (sin datos sensibles)
    console.log('Nueva suscripción a guía:', {
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
      nameLength: name.length,
      emailDomain: email.split('@')[1]
    })

    // Simular suscripción (en producción integrar con servicio de email)
    // TODO: Implementar suscripción real con servicio de email marketing
    
    // En producción, descomentar estas líneas:
    // await subscribeToNewsletter({ name, email })
    // await sendWelcomeEmail({ name, email })

    return NextResponse.json(
      { 
        message: '¡Gracias por tu interés! Te enviaremos la guía pronto.',
        timestamp: new Date().toISOString()
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    )
  } catch (error) {
    // Log de error sin exponer detalles internos
    console.error('Error en API de guía:', {
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })

    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, must-revalidate'
        }
      }
    )
  }
}

// Método no permitido
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}
