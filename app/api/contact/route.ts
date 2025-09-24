import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '../../../lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Simular envío de email (en producción usar sendEmail)
    console.log('Nuevo mensaje de contacto:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    // En producción, descomentar esta línea:
    // await sendEmail({ name, email, message })

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en API de contacto:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
