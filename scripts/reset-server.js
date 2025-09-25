#!/usr/bin/env node

/**
 * Script para resetear completamente el servidor
 * Soluciona problemas de módulos faltantes y caché corrupta
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Reseteando servidor Sueño Andino...\n');

try {
  // 1. Detener todos los procesos Node.js
  console.log('1️⃣ Deteniendo procesos Node.js...');
  try {
    execSync('taskkill /f /im node.exe', { stdio: 'ignore' });
    console.log('✅ Procesos Node.js detenidos');
  } catch (error) {
    console.log('ℹ️  No hay procesos Node.js activos');
  }

  // 2. Limpiar caché de Next.js
  console.log('2️⃣ Limpiando caché de Next.js...');
  const nextDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('✅ Caché de Next.js limpiada');
  } else {
    console.log('ℹ️  No hay caché de Next.js');
  }

  // 3. Limpiar node_modules/.cache si existe
  console.log('3️⃣ Limpiando caché de node_modules...');
  const cacheDir = path.join(process.cwd(), 'node_modules', '.cache');
  if (fs.existsSync(cacheDir)) {
    fs.rmSync(cacheDir, { recursive: true, force: true });
    console.log('✅ Caché de node_modules limpiada');
  }

  // 4. Verificar archivos críticos
  console.log('4️⃣ Verificando archivos críticos...');
  const criticalFiles = [
    'package.json',
    'next.config.js',
    'app/layout.tsx',
    'app/page.tsx'
  ];

  let allFilesExist = true;
  criticalFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file}`);
    } else {
      console.log(`❌ ${file} - FALTANTE`);
      allFilesExist = false;
    }
  });

  if (!allFilesExist) {
    console.log('\n❌ Archivos críticos faltantes. Revisa la estructura del proyecto.');
    process.exit(1);
  }

  // 5. Ejecutar diagnóstico
  console.log('5️⃣ Ejecutando diagnóstico...');
  try {
    execSync('npm run diagnose', { stdio: 'inherit' });
  } catch (error) {
    console.log('⚠️  Diagnóstico falló, pero continuando...');
  }

  console.log('\n🎉 Reset del servidor completado');
  console.log('💡 Ahora ejecuta: npm run safe-dev');

} catch (error) {
  console.error('❌ Error durante el reset:', error.message);
  process.exit(1);
}
