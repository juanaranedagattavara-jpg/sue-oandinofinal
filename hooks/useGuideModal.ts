'use client'

import { useState, useCallback, useMemo } from 'react'
import { validateGuideForm, type GuideFormData } from '@/lib/validations'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

/**
 * Hook para manejar el estado del modal de guía con validación de seguridad
 * Incluye validación robusta, envío seguro y manejo de estados optimizado
 */
export default function useGuideModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<GuideFormData>({
    name: '',
    email: ''
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => {
    setIsOpen(false)
    // Resetear formulario al cerrar
    setFormData({ name: '', email: '' })
    setStatus('idle')
    setErrorMessage('')
    setFieldErrors({})
  }, [])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    // Sanitización básica en tiempo real
    const sanitizedValue = value
      .replace(/[<>]/g, '') // Remover caracteres potencialmente peligrosos
      .substring(0, 50) // Limitar longitud
    
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
    const validation = validateGuideForm(formData)
    
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
      const response = await fetch('/api/guide', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        // No cerrar el modal inmediatamente, mostrar mensaje de éxito
      } else {
        setStatus('error')
        if (data.details) {
          setFieldErrors(data.details)
          setErrorMessage('Por favor corrige los errores en el formulario')
        } else {
          setErrorMessage(data.error || 'Error al suscribirse')
        }
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Error de conexión. Intenta nuevamente.')
      console.error('Error en formulario de guía:', error)
    }
  }, [formData, validateForm])

  const isFormValid = useMemo(() => {
    const validation = validateGuideForm(formData)
    return validation.success
  }, [formData])

  const getFieldError = useCallback((fieldName: string) => {
    return fieldErrors[fieldName]?.[0] || ''
  }, [fieldErrors])

  return {
    isOpen,
    openModal,
    closeModal,
    formData,
    status,
    errorMessage,
    fieldErrors,
    handleChange,
    handleSubmit,
    isFormValid,
    getFieldError
  }
}
