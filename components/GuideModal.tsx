'use client'

import { useState } from 'react'
import Modal from './Modal'
import Button from './Button'

interface GuideModalProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Modal para lead magnet de guía gratuita
 * Incluye resumen de la guía y formulario de captura de leads
 */
export default function GuideModal({ isOpen, onClose }: GuideModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleDownload = () => {
    // Simular descarga
    const link = document.createElement('a')
    link.href = '/guide.pdf' // Ruta del archivo PDF
    link.download = 'Guia-Desarrollo-Territorial-Regenerativo.pdf'
    link.click()
    
    onClose()
  }

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="¡Guía Descargada!">
        <div className="text-center">
          <div className="w-16 h-16 bg-sa-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-sa-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-sa-ink mb-4">
            ¡Gracias por tu interés!
          </h3>
          <p className="text-sa-ink/80 mb-6">
            Tu guía de desarrollo territorial regenerativo ha sido enviada a tu correo electrónico.
          </p>
          <Button variant="primary" size="lg" onClick={handleDownload}>
            Descargar Guía PDF
          </Button>
        </div>
      </Modal>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Descarga Guía Gratuita">
      <div className="space-y-6">
        {/* Resumen de la guía */}
        <div className="bg-gradient-to-br from-sa-primary/10 to-sa-accent/10 rounded-xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-sa-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-sa-ink mb-2">
                📖 Guía de Desarrollo Territorial Regenerativo
              </h3>
              <p className="text-sa-ink/80 text-sm">
                Una guía completa con metodologías, casos de éxito y herramientas prácticas 
                para implementar proyectos de desarrollo territorial regenerativo en tu comunidad.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-sa-primary">📄</span>
              <span className="text-sa-ink/70">32 páginas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sa-primary">⏱️</span>
              <span className="text-sa-ink/70">15 min lectura</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sa-primary">📊</span>
              <span className="text-sa-ink/70">5 casos de éxito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sa-primary">🛠️</span>
              <span className="text-sa-ink/70">Herramientas prácticas</span>
            </div>
          </div>
        </div>

        {/* Formulario de captura */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-sa-ink mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-sa-cloud rounded-lg focus:ring-2 focus:ring-sa-primary focus:border-transparent outline-none transition-colors"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-sa-ink mb-2">
              Correo electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-sa-cloud rounded-lg focus:ring-2 focus:ring-sa-primary focus:border-transparent outline-none transition-colors"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-sa-ink mb-2">
              Organización (opcional)
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-sa-cloud rounded-lg focus:ring-2 focus:ring-sa-primary focus:border-transparent outline-none transition-colors"
              placeholder="Tu organización o comunidad"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? 'Enviando...' : 'Descargar Guía'}
            </Button>
          </div>
        </form>

        <p className="text-xs text-sa-ink/60 text-center">
          Al descargar la guía, aceptas recibir información sobre nuestros proyectos y metodologías.
        </p>
      </div>
    </Modal>
  )
}
