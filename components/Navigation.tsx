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
  // Mapeo específico de enlaces
  const getHref = (item: string) => {
    switch (item) {
      case 'Servicios':
        return '#servicios'
      case 'Nosotros':
        return '#equipo' // Nosotros lleva a la sección de equipo
      case 'Contacto':
        return '#contacto'
      case 'Blog':
        return '/blog' // Blog será una página separada
      default:
        return '#'
    }
  }

  const navItems = homeData.nav.map((item, index) => {
    const href = getHref(item)
    const isExternal = href.startsWith('/')
    
    if (isExternal) {
      return (
        <Link
          key={index}
          href={href}
          className={`text-sa-ink hover:text-sa-primary transition-colors font-medium ${
            isMobile ? 'py-2' : ''
          }`}
          onClick={onItemClick}
        >
          {item}
        </Link>
      )
    }
    
    return (
      <a
        key={index}
        href={href}
        className={`text-sa-ink hover:text-sa-primary transition-colors font-medium ${
          isMobile ? 'py-2' : ''
        }`}
        onClick={onItemClick}
      >
        {item}
      </a>
    )
  })

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
