'use client'

import { useEffect } from 'react'
import Icon from './Icon'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

/**
 * Componente Modal reutilizable
 * @param isOpen - Si el modal está abierto
 * @param onClose - Función para cerrar el modal
 * @param title - Título del modal
 * @param children - Contenido del modal
 */
export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sa-cloud">
          <h2 className="text-2xl font-bold text-sa-ink">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-sa-cloud rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <Icon name="close" className="w-6 h-6 text-sa-ink" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
