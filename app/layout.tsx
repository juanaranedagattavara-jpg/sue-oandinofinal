import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import homeData from '../content/home.json'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sueño Andino - Desarrollo Territorial Regenerativo',
  description: 'Impulsamos proyectos de desarrollo territorial que devuelven vitalidad a los ecosistemas, fortalecen comunidades y generan prosperidad consciente y regenerativa.',
  keywords: 'desarrollo territorial, regenerativo, comunidades andinas, sostenibilidad, Latinoamérica',
  authors: [{ name: 'Sueño Andino' }],
  openGraph: {
    title: 'Sueño Andino - Desarrollo Territorial Regenerativo',
    description: homeData.hero.desc,
    type: 'website',
    locale: 'es_PE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sueño Andino - Desarrollo Territorial Regenerativo',
    description: homeData.hero.desc,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
