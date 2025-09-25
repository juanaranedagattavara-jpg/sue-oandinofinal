'use client'

import { useMemo } from 'react'
import Container from './Container'
import Button from './Button'
import Icon from './Icon'
import { useContactForm } from '../hooks/useContactForm'
import homeData from '../content/home.json'

/**
 * Componente de contacto con formulario y información
 * Incluye validación, manejo de estados y feedback visual
 */
export default function Contact() {
  const {
    formData,
    status,
    errorMessage,
    handleChange,
    handleSubmit
  } = useContactForm()

  const contactInfo = useMemo(() => [
    { icon: 'location', label: 'Ubicación', value: homeData.contact.info.city },
    { icon: 'phone', label: 'Teléfono', value: homeData.contact.info.phone },
    { icon: 'email', label: 'Email', value: homeData.contact.info.email }
  ], [])

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
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sa-accent rounded-lg flex items-center justify-center">
                      <Icon name={item.icon as any} className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-white/80">{item.value}</div>
                    </div>
                  </div>
                ))}
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
                
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'loading'}
                  className="w-full"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
