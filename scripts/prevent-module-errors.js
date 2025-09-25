#!/usr/bin/env node

/**
 * Script para prevenir errores de módulos faltantes
 * Verifica la integridad del proyecto antes de iniciar
 */

const fs = require('fs');
const path = require('path');

console.log('🛡️ Verificando integridad del proyecto...\n');

// Verificar que no haya archivos corruptos en .next
const nextDir = path.join(process.cwd(), '.next');
if (fs.existsSync(nextDir)) {
  console.log('📁 Verificando archivos en .next...');
  
  // Verificar archivos críticos de webpack
  const criticalFiles = [
    'server/webpack-runtime.js',
    'server/pages/_document.js'
  ];
  
  let hasCorruptedFiles = false;
  criticalFiles.forEach(file => {
    const filePath = path.join(nextDir, file);
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Verificar que no contenga referencias a módulos inexistentes
        if (content.includes('./329.js') || content.includes('./638.js')) {
          console.log(`❌ ${file} contiene referencias a módulos corruptos`);
          hasCorruptedFiles = true;
        } else {
          console.log(`✅ ${file} está limpio`);
        }
      } catch (error) {
        console.log(`❌ ${file} está corrupto: ${error.message}`);
        hasCorruptedFiles = true;
      }
    }
  });
  
  if (hasCorruptedFiles) {
    console.log('\n🧹 Limpiando archivos corruptos...');
    try {
      fs.rmSync(nextDir, { recursive: true, force: true });
      console.log('✅ Caché corrupta eliminada');
    } catch (error) {
      console.log(`❌ Error al limpiar caché: ${error.message}`);
      process.exit(1);
    }
  } else {
    console.log('✅ No se encontraron archivos corruptos');
  }
} else {
  console.log('ℹ️  No hay caché de Next.js');
}

// Verificar componentes críticos
console.log('\n🔍 Verificando componentes críticos...');
const criticalComponents = [
  'components/Modal.tsx',
  'components/GuideModal.tsx',
  'hooks/useGuideModal.ts',
  'components/Navigation.tsx',
  'components/Hero.tsx'
];

let allComponentsValid = true;
criticalComponents.forEach(component => {
  const filePath = path.join(process.cwd(), component);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Verificar que tenga 'use client' si usa hooks
    if (component.includes('Modal') || component.includes('useGuideModal') || component.includes('Navigation') || component.includes('Hero')) {
      if (content.includes("'use client'")) {
        console.log(`✅ ${component} tiene directiva 'use client'`);
      } else {
        console.log(`❌ ${component} NO tiene directiva 'use client'`);
        allComponentsValid = false;
      }
    }
    
    // Verificar que no tenga imports problemáticos
    if (content.includes('import.*homeData.*from.*content/home.json')) {
      console.log(`⚠️  ${component} importa homeData (puede causar problemas)`);
    }
  } else {
    console.log(`❌ ${component} NO existe`);
    allComponentsValid = false;
  }
});

if (!allComponentsValid) {
  console.log('\n❌ Se encontraron problemas en los componentes');
  process.exit(1);
}

console.log('\n🎉 Proyecto verificado - Listo para iniciar');
console.log('💡 Usa: npm run dev para iniciar el servidor');
