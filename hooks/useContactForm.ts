'use client'

import { useState, useCallback, useMemo } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

/**
 * Hook personalizado para manejar el formulario de contacto
 * Incluye validación, envío y manejo de estados optimizado
 */
export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const validateForm = useCallback((): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('El nombre es requerido')
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage('El email es requerido')
      return false
    }
    if (!formData.message.trim()) {
      setErrorMessage('El mensaje es requerido')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Formato de email inválido')
      return false
    }
    return true
  }, [formData])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Error al enviar el mensaje')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Error de conexión. Intenta nuevamente.')
      console.error('Error en formulario de contacto:', error)
    }
  }, [formData, validateForm])

  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', message: '' })
    setStatus('idle')
    setErrorMessage('')
  }, [])

  const isFormValid = useMemo(() => {
    return formData.name.trim() && formData.email.trim() && formData.message.trim()
  }, [formData])

  return {
    formData,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
    resetForm,
    isFormValid
  }
}
