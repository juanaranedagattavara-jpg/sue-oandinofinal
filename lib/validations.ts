import { z } from 'zod'

/**
 * Esquemas de validación para formularios de Sueño Andino
 * Protege contra XSS, inyección y datos maliciosos
 */

// Sanitización básica para texto
const sanitizeText = (text: string): string => {
  return text
    .trim()
    .replace(/[<>]/g, '') // Remover caracteres potencialmente peligrosos
    .substring(0, 1000) // Limitar longitud
}

// Esquema para formulario de contacto
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres')
    .transform(sanitizeText)
    .refine(
      (val) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val),
      'El nombre solo puede contener letras y espacios'
    ),
  
  email: z
    .string()
    .email('Formato de email inválido')
    .max(100, 'El email no puede exceder 100 caracteres')
    .transform((val) => val.toLowerCase().trim()),
  
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres')
    .transform(sanitizeText)
    .refine(
      (val) => !/<script|javascript:|on\w+=/i.test(val),
      'El mensaje contiene contenido no permitido'
    ),
})

// Esquema para formulario de lead magnet (guía gratuita)
export const guideFormSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres')
    .transform(sanitizeText)
    .refine(
      (val) => /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(val),
      'El nombre solo puede contener letras y espacios'
    ),
  
  email: z
    .string()
    .email('Formato de email inválido')
    .max(100, 'El email no puede exceder 100 caracteres')
    .transform((val) => val.toLowerCase().trim()),
})

// Esquema para validación de API
export const apiContactSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email().max(100),
  message: z.string().min(1).max(1000),
})

// Esquema para validación de lead magnet API
export const apiGuideSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email().max(100),
})

// Tipos TypeScript derivados de los esquemas
export type ContactFormData = z.infer<typeof contactFormSchema>
export type GuideFormData = z.infer<typeof guideFormSchema>
export type ApiContactData = z.infer<typeof apiContactSchema>
export type ApiGuideData = z.infer<typeof apiGuideSchema>

// Función para validar datos del cliente
export function validateContactForm(data: unknown): {
  success: boolean
  data?: ContactFormData
  errors?: Record<string, string[]>
} {
  try {
    const validatedData = contactFormSchema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {}
      error.issues.forEach((err) => {
        const path = err.path.join('.')
        if (!errors[path]) {
          errors[path] = []
        }
        errors[path].push(err.message)
      })
      return { success: false, errors }
    }
    return { success: false, errors: { general: ['Error de validación'] } }
  }
}

// Función para validar datos del lead magnet
export function validateGuideForm(data: unknown): {
  success: boolean
  data?: GuideFormData
  errors?: Record<string, string[]>
} {
  try {
    const validatedData = guideFormSchema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {}
      error.issues.forEach((err) => {
        const path = err.path.join('.')
        if (!errors[path]) {
          errors[path] = []
        }
        errors[path].push(err.message)
      })
      return { success: false, errors }
    }
    return { success: false, errors: { general: ['Error de validación'] } }
  }
}

// Función para validar datos de API (más estricta)
export function validateApiContact(data: unknown): {
  success: boolean
  data?: ApiContactData
  errors?: Record<string, string[]>
} {
  try {
    const validatedData = apiContactSchema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {}
      error.issues.forEach((err) => {
        const path = err.path.join('.')
        if (!errors[path]) {
          errors[path] = []
        }
        errors[path].push(err.message)
      })
      return { success: false, errors }
    }
    return { success: false, errors: { general: ['Error de validación'] } }
  }
}

// Función para validar datos de API del lead magnet
export function validateApiGuide(data: unknown): {
  success: boolean
  data?: ApiGuideData
  errors?: Record<string, string[]>
} {
  try {
    const validatedData = apiGuideSchema.parse(data)
    return { success: true, data: validatedData }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string[]> = {}
      error.issues.forEach((err) => {
        const path = err.path.join('.')
        if (!errors[path]) {
          errors[path] = []
        }
        errors[path].push(err.message)
      })
      return { success: false, errors }
    }
    return { success: false, errors: { general: ['Error de validación'] } }
  }
}
