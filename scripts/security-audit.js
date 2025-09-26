#!/usr/bin/env node

/**
 * Script de auditoría de seguridad para Sueño Andino
 * Verifica vulnerabilidades, dependencias y configuraciones de seguridad
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Colores para output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
}

// Función para imprimir con colores
function print(color, message) {
  console.log(`${color}${message}${colors.reset}`)
}

// Función para ejecutar comando y capturar output
function runCommand(command, options = {}) {
  try {
    const output = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      ...options 
    })
    return { success: true, output: output.trim() }
  } catch (error) {
    return { 
      success: false, 
      error: error.message,
      output: error.stdout || error.stderr || ''
    }
  }
}

// Función para verificar archivos críticos
function checkCriticalFiles() {
  print(colors.blue, '\n🔍 Verificando archivos críticos de seguridad...')
  
  const criticalFiles = [
    'middleware.ts',
    'lib/security.ts',
    'lib/validations.ts',
    'app/api/contact/route.ts',
    'app/api/guide/route.ts'
  ]
  
  let allPresent = true
  
  criticalFiles.forEach(file => {
    if (fs.existsSync(file)) {
      print(colors.green, `  ✅ ${file}`)
    } else {
      print(colors.red, `  ❌ ${file} - FALTANTE`)
      allPresent = false
    }
  })
  
  return allPresent
}

// Función para verificar dependencias
function checkDependencies() {
  print(colors.blue, '\n📦 Verificando dependencias...')
  
  // Verificar package.json
  if (!fs.existsSync('package.json')) {
    print(colors.red, '  ❌ package.json no encontrado')
    return false
  }
  
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  const requiredDeps = ['next', 'react', 'typescript', 'zod']
  const missingDeps = requiredDeps.filter(dep => !packageJson.dependencies[dep])
  
  if (missingDeps.length > 0) {
    print(colors.red, `  ❌ Dependencias faltantes: ${missingDeps.join(', ')}`)
    return false
  }
  
  print(colors.green, '  ✅ Todas las dependencias requeridas están presentes')
  return true
}

// Función para verificar vulnerabilidades
function checkVulnerabilities() {
  print(colors.blue, '\n🛡️ Verificando vulnerabilidades...')
  
  const auditResult = runCommand('npm audit --json')
  
  if (!auditResult.success) {
    print(colors.red, '  ❌ Error ejecutando npm audit')
    return false
  }
  
  try {
    const auditData = JSON.parse(auditResult.output)
    const vulnerabilities = auditData.metadata?.vulnerabilities || {}
    
    const critical = vulnerabilities.critical || 0
    const high = vulnerabilities.high || 0
    const moderate = vulnerabilities.moderate || 0
    const low = vulnerabilities.low || 0
    
    if (critical > 0) {
      print(colors.red, `  ❌ ${critical} vulnerabilidades CRÍTICAS encontradas`)
      return false
    }
    
    if (high > 0) {
      print(colors.yellow, `  ⚠️  ${high} vulnerabilidades ALTAS encontradas`)
    }
    
    if (moderate > 0) {
      print(colors.yellow, `  ⚠️  ${moderate} vulnerabilidades MODERADAS encontradas`)
    }
    
    if (low > 0) {
      print(colors.blue, `  ℹ️  ${low} vulnerabilidades BAJAS encontradas`)
    }
    
    if (critical === 0 && high === 0) {
      print(colors.green, '  ✅ No hay vulnerabilidades críticas o altas')
      return true
    }
    
    return high === 0 // Aceptar si no hay vulnerabilidades altas
  } catch (error) {
    print(colors.red, '  ❌ Error parseando resultado de npm audit')
    return false
  }
}

// Función para verificar configuración de TypeScript
function checkTypeScriptConfig() {
  print(colors.blue, '\n🔧 Verificando configuración de TypeScript...')
  
  if (!fs.existsSync('tsconfig.json')) {
    print(colors.red, '  ❌ tsconfig.json no encontrado')
    return false
  }
  
  const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'))
  
  // Verificar configuración estricta
  const strictMode = tsconfig.compilerOptions?.strict === true
  const noImplicitAny = tsconfig.compilerOptions?.noImplicitAny === true
  const strictNullChecks = tsconfig.compilerOptions?.strictNullChecks === true
  
  if (!strictMode) {
    print(colors.yellow, '  ⚠️  Modo estricto no habilitado')
  } else {
    print(colors.green, '  ✅ Modo estricto habilitado')
  }
  
  return true
}

// Función para verificar ESLint
function checkESLint() {
  print(colors.blue, '\n🔍 Verificando configuración de ESLint...')
  
  const lintResult = runCommand('npm run lint')
  
  if (lintResult.success) {
    print(colors.green, '  ✅ ESLint pasa sin errores')
    return true
  } else {
    print(colors.yellow, '  ⚠️  ESLint encontró problemas:')
    print(colors.white, lintResult.output)
    return false
  }
}

// Función para verificar build
function checkBuild() {
  print(colors.blue, '\n🏗️ Verificando build...')
  
  const buildResult = runCommand('npm run build')
  
  if (buildResult.success) {
    print(colors.green, '  ✅ Build exitoso')
    return true
  } else {
    print(colors.red, '  ❌ Build falló:')
    print(colors.white, buildResult.output)
    return false
  }
}

// Función para verificar headers de seguridad
function checkSecurityHeaders() {
  print(colors.blue, '\n🔒 Verificando headers de seguridad...')
  
  if (!fs.existsSync('middleware.ts')) {
    print(colors.red, '  ❌ middleware.ts no encontrado')
    return false
  }
  
  const middlewareContent = fs.readFileSync('middleware.ts', 'utf8')
  
  const requiredHeaders = [
    'Content-Security-Policy',
    'X-Frame-Options',
    'X-Content-Type-Options',
    'Referrer-Policy'
  ]
  
  let allHeadersPresent = true
  
  requiredHeaders.forEach(header => {
    if (middlewareContent.includes(header)) {
      print(colors.green, `  ✅ ${header} configurado`)
    } else {
      print(colors.red, `  ❌ ${header} no configurado`)
      allHeadersPresent = false
    }
  })
  
  return allHeadersPresent
}

// Función para verificar validaciones
function checkValidations() {
  print(colors.blue, '\n✅ Verificando validaciones...')
  
  if (!fs.existsSync('lib/validations.ts')) {
    print(colors.red, '  ❌ lib/validations.ts no encontrado')
    return false
  }
  
  const validationsContent = fs.readFileSync('lib/validations.ts', 'utf8')
  
  const requiredValidations = [
    'contactFormSchema',
    'guideFormSchema',
    'validateContactForm',
    'validateGuideForm'
  ]
  
  let allValidationsPresent = true
  
  requiredValidations.forEach(validation => {
    if (validationsContent.includes(validation)) {
      print(colors.green, `  ✅ ${validation} implementado`)
    } else {
      print(colors.red, `  ❌ ${validation} no implementado`)
      allValidationsPresent = false
    }
  })
  
  return allValidationsPresent
}

// Función principal
function main() {
  print(colors.bold + colors.cyan, '🛡️ AUDITORÍA DE SEGURIDAD - SUEÑO ANDINO')
  print(colors.white, '=' .repeat(50))
  
  const checks = [
    { name: 'Archivos críticos', fn: checkCriticalFiles },
    { name: 'Dependencias', fn: checkDependencies },
    { name: 'Vulnerabilidades', fn: checkVulnerabilities },
    { name: 'TypeScript', fn: checkTypeScriptConfig },
    { name: 'ESLint', fn: checkESLint },
    { name: 'Build', fn: checkBuild },
    { name: 'Headers de seguridad', fn: checkSecurityHeaders },
    { name: 'Validaciones', fn: checkValidations }
  ]
  
  let passedChecks = 0
  let totalChecks = checks.length
  
  checks.forEach(check => {
    try {
      if (check.fn()) {
        passedChecks++
      }
    } catch (error) {
      print(colors.red, `  ❌ Error en ${check.name}: ${error.message}`)
    }
  })
  
  print(colors.white, '\n' + '='.repeat(50))
  print(colors.bold, `📊 RESULTADO: ${passedChecks}/${totalChecks} verificaciones pasaron`)
  
  if (passedChecks === totalChecks) {
    print(colors.green, '🎉 ¡Todas las verificaciones de seguridad pasaron!')
    process.exit(0)
  } else {
    print(colors.red, '⚠️  Algunas verificaciones fallaron. Revisa los errores arriba.')
    process.exit(1)
  }
}

// Ejecutar si es llamado directamente
if (require.main === module) {
  main()
}

module.exports = { main }
