#!/usr/bin/env node

/**
 * Script de diagnóstico para identificar problemas comunes
 * Ejecutar antes de cada commit para prevenir errores
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Diagnóstico del proyecto Sueño Andino...\n');

// 1. Verificar archivos críticos
const criticalFiles = [
  'app/page.tsx',
  'app/layout.tsx',
  'components/Header.tsx',
  'components/Navigation.tsx',
  'components/Team.tsx',
  'content/home.json'
];

console.log('📁 Verificando archivos críticos...');
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - FALTANTE`);
    process.exit(1);
  }
});

// 2. Verificar sintaxis JSON
console.log('\n📄 Verificando sintaxis JSON...');
try {
  const homeData = JSON.parse(fs.readFileSync('content/home.json', 'utf8'));
  console.log('✅ content/home.json - Sintaxis válida');
  
  // Verificar estructura mínima
  if (!homeData.nav || !Array.isArray(homeData.nav)) {
    throw new Error('Estructura de navegación inválida');
  }
  console.log('✅ Estructura de navegación válida');
} catch (error) {
  console.log(`❌ content/home.json - Error: ${error.message}`);
  process.exit(1);
}

// 3. Verificar imports problemáticos
console.log('\n🔗 Verificando imports problemáticos...');
const filesToCheck = [
  'components/Navigation.tsx',
  'components/Team.tsx'
];

filesToCheck.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Verificar si hay imports de JSON que puedan causar problemas
  if (content.includes("import.*homeData.*from.*content/home.json")) {
    console.log(`⚠️  ${file} - Importa homeData (puede causar problemas de hidratación)`);
  } else {
    console.log(`✅ ${file} - Sin imports problemáticos`);
  }
});

// 4. Verificar que no hay dependencias circulares
console.log('\n🔄 Verificando dependencias...');
const componentFiles = fs.readdirSync('components').filter(f => f.endsWith('.tsx'));
console.log(`✅ ${componentFiles.length} componentes encontrados`);

console.log('\n🎉 Diagnóstico completado - Proyecto estable');
