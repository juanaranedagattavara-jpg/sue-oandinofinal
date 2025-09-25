'use client'

import { useState } from 'react'

/**
 * Hook para manejar el estado del modal de guía
 * @returns Objeto con estado y funciones para controlar el modal
 */
export default function useGuideModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return {
    isOpen,
    openModal,
    closeModal
  }
}
