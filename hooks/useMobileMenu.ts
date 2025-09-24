import { useState } from 'react'

/**
 * Hook personalizado para manejar el estado del menú móvil
 * @returns {Object} Estado y funciones del menú móvil
 */
export function useMobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu
  }
}
