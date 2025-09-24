#!/usr/bin/env node

/**
 * QA Express - Script automatizado para verificación de calidad
 * Ejecuta todas las verificaciones de la Definición de Hecho (DoD)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando QA Express...\n');

// Colores para output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkMark() {
  return `${colors.green}✅${colors.reset}`;
}

function crossMark() {
  return `${colors.red}❌${colors.reset}`;
}

function warningMark() {
  return `${colors.yellow}⚠️${colors.reset}`;
}

// Verificaciones
const checks = {
  build: false,
  lint: false,
  contentJson: false,
  gutenbergExports: false,
  responsive: false,
  accessibility: false
};

try {
  // 1. Verificar build sin errores
  log('1. Verificando build...', 'blue');
  try {
    execSync('npm run build', { stdio: 'pipe' });
    log(`   ${checkMark()} Build exitoso sin errores`, 'green');
    checks.build = true;
  } catch (error) {
    log(`   ${crossMark()} Build falló:`, 'red');
    console.log(error.stdout?.toString() || error.message);
  }

  // 2. Verificar linting
  log('\n2. Verificando linting...', 'blue');
  try {
    execSync('npm run lint', { stdio: 'pipe' });
    log(`   ${checkMark()} Linting sin errores`, 'green');
    checks.lint = true;
  } catch (error) {
    log(`   ${crossMark()} Linting falló:`, 'red');
    console.log(error.stdout?.toString() || error.message);
  }

  // 3. Verificar content/home.json
  log('\n3. Verificando contenido centralizado...', 'blue');
  const contentPath = path.join(process.cwd(), 'content', 'home.json');
  if (fs.existsSync(contentPath)) {
    try {
      const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
      const requiredSections = ['nav', 'hero', 'about', 'services', 'cases', 'contact', 'footer'];
      const hasAllSections = requiredSections.every(section => content[section]);
      
      if (hasAllSections) {
        log(`   ${checkMark()} content/home.json completo`, 'green');
        checks.contentJson = true;
      } else {
        log(`   ${crossMark()} Faltan secciones en content/home.json`, 'red');
      }
    } catch (error) {
      log(`   ${crossMark()} Error al leer content/home.json: ${error.message}`, 'red');
    }
  } else {
    log(`   ${crossMark()} content/home.json no encontrado`, 'red');
  }

  // 4. Verificar exportaciones Gutenberg
  log('\n4. Verificando exportaciones Gutenberg...', 'blue');
  const exportsDir = path.join(process.cwd(), 'exports');
  if (fs.existsSync(exportsDir)) {
    const exportFiles = fs.readdirSync(exportsDir).filter(file => file.endsWith('.html'));
    if (exportFiles.length > 0) {
      log(`   ${checkMark()} ${exportFiles.length} archivos de exportación encontrados`, 'green');
      checks.gutenbergExports = true;
    } else {
      log(`   ${crossMark()} No se encontraron archivos de exportación`, 'red');
    }
  } else {
    log(`   ${crossMark()} Directorio exports no encontrado`, 'red');
  }

  // 5. Verificar responsive (verificar que existan breakpoints en CSS)
  log('\n5. Verificando responsive design...', 'blue');
  const globalsPath = path.join(process.cwd(), 'app', 'globals.css');
  if (fs.existsSync(globalsPath)) {
    const cssContent = fs.readFileSync(globalsPath, 'utf8');
    const hasResponsiveClasses = cssContent.includes('sm:') || cssContent.includes('md:') || cssContent.includes('lg:');
    if (hasResponsiveClasses) {
      log(`   ${checkMark()} Clases responsive detectadas`, 'green');
      checks.responsive = true;
    } else {
      log(`   ${warningMark()} No se detectaron clases responsive en globals.css`, 'yellow');
    }
  }

  // 6. Verificar accesibilidad (verificar aria-labels y semantic HTML)
  log('\n6. Verificando accesibilidad...', 'blue');
  const componentsDir = path.join(process.cwd(), 'components');
  if (fs.existsSync(componentsDir)) {
    const componentFiles = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));
    let hasAccessibilityFeatures = false;
    
    for (const file of componentFiles) {
      const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
      if (content.includes('aria-') || content.includes('role=') || content.includes('alt=')) {
        hasAccessibilityFeatures = true;
        break;
      }
    }
    
    if (hasAccessibilityFeatures) {
      log(`   ${checkMark()} Características de accesibilidad detectadas`, 'green');
      checks.accessibility = true;
    } else {
      log(`   ${warningMark()} Pocas características de accesibilidad detectadas`, 'yellow');
    }
  }

  // Resumen final
  log('\n' + '='.repeat(50), 'bold');
  log('📊 RESUMEN DE QA EXPRESS', 'bold');
  log('='.repeat(50), 'bold');

  const totalChecks = Object.keys(checks).length;
  const passedChecks = Object.values(checks).filter(Boolean).length;

  log(`\nVerificaciones pasadas: ${passedChecks}/${totalChecks}`, passedChecks === totalChecks ? 'green' : 'yellow');

  Object.entries(checks).forEach(([check, passed]) => {
    const status = passed ? checkMark() : crossMark();
    const checkName = check.charAt(0).toUpperCase() + check.slice(1);
    log(`${status} ${checkName}`, passed ? 'green' : 'red');
  });

  if (passedChecks === totalChecks) {
    log('\n🎉 ¡Todas las verificaciones pasaron! El proyecto cumple con la DoD.', 'green');
    process.exit(0);
  } else {
    log('\n⚠️  Algunas verificaciones fallaron. Revisa los errores arriba.', 'yellow');
    process.exit(1);
  }

} catch (error) {
  log(`\n💥 Error fatal en QA Express: ${error.message}`, 'red');
  process.exit(1);
}
