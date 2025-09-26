import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();
    if (!name || !email) return NextResponse.json({ error: 'Campos requeridos' }, { status: 400 });
    console.log('📧 Guía:', { name, email, timestamp: new Date().toISOString() });
    return NextResponse.json({ message: 'Suscrito correctamente' }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}