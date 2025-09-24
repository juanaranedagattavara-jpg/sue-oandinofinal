'use client'

import Link from 'next/link'
import Container from './Container'
import Navigation from './Navigation'
import Icon from './Icon'
import { useMobileMenu } from '../hooks/useMobileMenu'

/**
 * Header principal con navegación responsive
 * Incluye logo, menú desktop/móvil y CTA
 */
export default function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-sa-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SA</span>
            </div>
            <span className="text-xl font-bold text-sa-ink">Sueño Andino</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sa-cloud">
            <Navigation isMobile onItemClick={closeMenu} />
          </div>
        )}
      </Container>
    </header>
  )
}
