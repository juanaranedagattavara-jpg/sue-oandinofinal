import Link from 'next/link'
import Button from './Button'
import homeData from '../content/home.json'

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
  const navItems = homeData.nav.map((item, index) => (
    <a
      key={index}
      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
      className={`text-sa-ink hover:text-sa-primary transition-colors font-medium ${
        isMobile ? 'py-2' : ''
      }`}
      onClick={onItemClick}
    >
      {item}
    </a>
  ))

  const ctaButton = (
    <Link href="/guide" onClick={onItemClick}>
      <Button
        variant="secondary"
        className={isMobile ? 'w-full text-center' : ''}
      >
        {homeData.hero.ctaSecondary}
      </Button>
    </Link>
  )

  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-4">
        {navItems}
        {ctaButton}
      </nav>
    )
  }

  return (
    <nav className="flex items-center space-x-8">
      {navItems}
      {ctaButton}
    </nav>
  )
}
