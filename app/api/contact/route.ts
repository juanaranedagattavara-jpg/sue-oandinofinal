import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) return NextResponse.json({ error: 'Campos requeridos' }, { status: 400 });
    console.log('📧 Contacto:', { name, email, message, timestamp: new Date().toISOString() });
    return NextResponse.json({ message: 'Enviado correctamente' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}