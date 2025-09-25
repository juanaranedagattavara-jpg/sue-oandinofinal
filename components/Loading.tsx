'use client'

import { memo } from 'react'

/**
 * Componente de loading optimizado
 * Muestra un spinner elegante mientras se cargan los datos
 */
const Loading = memo(() => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-sa-cloud border-t-sa-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-sa-accent rounded-full animate-spin animation-delay-150"></div>
      </div>
    </div>
  )
})

Loading.displayName = 'Loading'

export default Loading
