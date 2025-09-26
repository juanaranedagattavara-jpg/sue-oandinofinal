'use client'

import { useState, useCallback, useMemo } from 'react'
import { validateContactForm, type ContactFormData } from '@/lib/validations'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

/**
 * Hook personalizado para manejar el formulario de contacto con validación de seguridad
 * Incluye validación robusta, envío seguro y manejo de estados optimizado
 */
export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Sanitización básica en tiempo real
    const sanitizedValue = value
      .replace(/[<>]/g, '') // Remover caracteres potencialmente peligrosos
      .substring(0, name === 'message' ? 1000 : 50) // Limitar longitud
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }))
    
    // Limpiar errores del campo cuando el usuario empiece a escribir
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }, [fieldErrors])

  const validateForm = useCallback((): boolean => {
    const validation = validateContactForm(formData)
    
    if (!validation.success) {
      setFieldErrors(validation.errors || {})
      setErrorMessage('Por favor corrige los errores en el formulario')
      return false
    }
    
    setFieldErrors({})
    setErrorMessage('')
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
    setFieldErrors({})

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
        setFieldErrors({})
      } else {
        setStatus('error')
        if (data.details) {
          setFieldErrors(data.details)
          setErrorMessage('Por favor corrige los errores en el formulario')
        } else {
          setErrorMessage(data.error || 'Error al enviar el mensaje')
        }
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
    setFieldErrors({})
  }, [])

  const isFormValid = useMemo(() => {
    const validation = validateContactForm(formData)
    return validation.success
  }, [formData])

  const getFieldError = useCallback((fieldName: string) => {
    return fieldErrors[fieldName]?.[0] || ''
  }, [fieldErrors])

  return {
    formData,
    status,
    errorMessage,
    fieldErrors,
    handleChange,
    handleSubmit,
    resetForm,
    isFormValid,
    getFieldError
  }
}
