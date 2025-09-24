'use client'

import Link from 'next/link'
import { useState } from 'react'
import Container from './Container'
import homeData from '../content/home.json'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <nav className="hidden md:flex items-center space-x-8">
            {homeData.nav.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sa-ink hover:text-sa-primary transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <Link
              href="/guide"
              className="btn-secondary"
            >
              {homeData.hero.ctaSecondary}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sa-cloud">
            <nav className="flex flex-col space-y-4">
              {homeData.nav.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sa-ink hover:text-sa-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Link
                href="/guide"
                className="btn-secondary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {homeData.hero.ctaSecondary}
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
