'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya ha aceptado las cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-sa-ink text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm md:text-base">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. 
              Al continuar navegando, aceptas nuestro uso de cookies.{' '}
              <Link 
                href="/politica-cookies" 
                className="text-sa-accent hover:text-sa-accent/80 underline"
              >
                Más información
              </Link>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-sa-primary text-white rounded-lg hover:bg-sa-primary/90 transition-colors"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
