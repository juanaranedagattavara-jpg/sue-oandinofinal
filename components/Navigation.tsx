'use client'

import Link from 'next/link'
import GuideModal from './GuideModal'
import useGuideModal from '../hooks/useGuideModal'

interface NavigationProps {
  isMobile?: boolean
  onItemClick?: () => void
}

/**
 * Componente de navegación reutilizable
 * @param isMobile - Si es true, muestra la versión móvil
 * @param onItemClick - Callback para cerrar menú móvil
 */
export default function Navigation({ isMobile = false, onItemClick }: NavigationProps) {
  const { isOpen, openModal, closeModal } = useGuideModal()

  // Navegación estática para evitar problemas de hidratación
  const navItems = [
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Nosotros', href: '/#equipo' },
    { name: 'Contacto', href: '/#contacto' },
    { name: 'Blog', href: '/blog' }
  ]

  const navElements = navItems.map((item, index) => {
    return (
      <Link
        key={index}
        href={item.href}
        className={`text-sa-ink hover:text-sa-primary transition-colors font-medium ${
          isMobile ? 'py-2' : ''
        }`}
        onClick={onItemClick}
      >
        {item.name}
      </Link>
    )
  })

  const ctaButton = (
    <button
      onClick={() => {
        openModal()
        onItemClick?.()
      }}
      className={`border-2 border-sa-primary text-sa-primary hover:bg-sa-primary hover:text-white focus:ring-sa-primary disabled:opacity-50 disabled:cursor-not-allowed font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-6 py-3 ${
        isMobile ? 'w-full text-center' : ''
      }`}
    >
      Descarga Guía Gratuita
    </button>
  )

  if (isMobile) {
    return (
      <>
        <nav className="flex flex-col space-y-4">
          {navElements}
          {ctaButton}
        </nav>
        <GuideModal isOpen={isOpen} onClose={closeModal} />
      </>
    )
  }

  return (
    <>
      <nav className="flex items-center space-x-8">
        {navElements}
        {ctaButton}
      </nav>
      <GuideModal isOpen={isOpen} onClose={closeModal} />
    </>
  )
}
