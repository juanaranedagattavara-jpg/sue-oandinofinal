'use client'

import { useState } from 'react'
import Container from './Container'
import homeData from '../content/home.json'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Error de conexión. Intenta nuevamente.')
    }
  }

  return (
    <section id="contacto" className="bg-sa-primary text-white section-padding">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {homeData.contact.title}
              </h2>
              <p className="text-xl text-white/80 mb-8">
                ¿Tienes un proyecto en mente? Conversemos sobre cómo podemos trabajar juntos para transformar tu territorio.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sa-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Ubicación</div>
                    <div className="text-white/80">{homeData.contact.info.city}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sa-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div className="text-white/80">{homeData.contact.info.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-sa-accent rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/80">{homeData.contact.info.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sa-ink mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sa-primary focus:border-transparent text-sa-ink"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sa-ink mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sa-primary focus:border-transparent text-sa-ink"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sa-ink mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sa-primary focus:border-transparent text-sa-ink resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                
                {status === 'error' && (
                  <div className="text-red-600 text-sm">
                    {errorMessage}
                  </div>
                )}
                
                {status === 'success' && (
                  <div className="text-green-600 text-sm">
                    ¡Mensaje enviado correctamente! Te contactaremos pronto.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
