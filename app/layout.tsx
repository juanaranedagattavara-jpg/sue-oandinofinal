import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieBanner from '../components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sueño Andino - Desarrollo Territorial Regenerativo',
    template: '%s | Sueño Andino'
  },
  description: 'Impulsamos proyectos de desarrollo territorial que devuelven vitalidad a los ecosistemas, fortalecen comunidades y generan prosperidad consciente y regenerativa en Latinoamérica.',
  keywords: [
    'desarrollo territorial',
    'regenerativo',
    'comunidades andinas',
    'sostenibilidad',
    'Latinoamérica',
    'desarrollo sostenible',
    'regeneración ecosistémica',
    'comunidades rurales'
  ],
  authors: [{ name: 'Sueño Andino', url: 'https://sueñoandino.com' }],
  creator: 'Sueño Andino',
  publisher: 'Sueño Andino',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sueñoandino.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://sueñoandino.com',
    siteName: 'Sueño Andino',
    title: 'Sueño Andino - Desarrollo Territorial Regenerativo',
    description: 'Impulsamos proyectos de desarrollo territorial que devuelven vitalidad a los ecosistemas, fortalecen comunidades y generan prosperidad consciente y regenerativa.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sueño Andino - Desarrollo Territorial Regenerativo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sueño Andino - Desarrollo Territorial Regenerativo',
    description: 'Impulsamos proyectos de desarrollo territorial que devuelven vitalidad a los ecosistemas, fortalecen comunidades y generan prosperidad consciente y regenerativa.',
    images: ['/og-image.jpg'],
    creator: '@sueñoandino',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <CookieBanner />
      </body>
    </html>
  )
}
