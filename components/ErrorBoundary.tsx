'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import Container from './Container'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

/**
 * Error Boundary para capturar errores de React
 * Proporciona una interfaz de error amigable al usuario
 */
export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <Container>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-md mx-auto p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-sa-ink mb-4">
                Algo salió mal
              </h2>
              <p className="text-sa-ink/80 mb-6">
                Lo sentimos, ha ocurrido un error inesperado. Por favor, recarga la página o contacta con nosotros si el problema persiste.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-sa-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-sa-primary/90 transition-colors"
              >
                Recargar página
              </button>
            </div>
          </div>
        </Container>
      )
    }

    return this.props.children
  }
}
