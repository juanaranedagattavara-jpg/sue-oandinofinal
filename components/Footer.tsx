import Link from 'next/link'
import Container from './Container'
import homeData from '../content/home.json'

export default function Footer() {
  return (
    <footer className="bg-sa-ink text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-sa-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SA</span>
                </div>
                <span className="text-xl font-bold">Sueño Andino</span>
              </Link>
              <p className="text-white/80 mb-6 max-w-md">
                {homeData.footer.mini}
              </p>
            </div>

            {/* Navegación */}
            <div>
              <h3 className="font-semibold mb-4">Navegación</h3>
              <nav className="space-y-2">
                {homeData.nav.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <Link
                  href="/guide"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Guía Gratuita
                </Link>
              </nav>
            </div>

            {/* Contacto */}
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-white/80">
                <div>{homeData.contact.info.city}</div>
                <div>{homeData.contact.info.phone}</div>
                <div>{homeData.contact.info.email}</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60">
                {homeData.footer.copyright} Sueño Andino. Todos los derechos reservados.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <Link 
                  href="/politica-privacidad" 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Política de Privacidad
                </Link>
                <Link 
                  href="/terminos-condiciones" 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Términos y Condiciones
                </Link>
                <Link 
                  href="/aviso-legal" 
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Aviso Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
