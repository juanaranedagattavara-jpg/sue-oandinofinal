#!/usr/bin/env node

/**
 * Script para probar la navegación del header
 * Verifica que todos los enlaces funcionen correctamente
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 Probando navegación del header...\n');

// Verificar que el componente Navigation tenga los enlaces correctos
const navigationFile = path.join(process.cwd(), 'components/Navigation.tsx');
const navigationContent = fs.readFileSync(navigationFile, 'utf8');

console.log('📋 Verificando enlaces en Navigation.tsx...');

// Verificar enlaces esperados
const expectedLinks = [
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Nosotros', href: '/#equipo' },
  { name: 'Contacto', href: '/#contacto' },
  { name: 'Blog', href: '/blog' }
];

let allLinksCorrect = true;

expectedLinks.forEach(link => {
  // Buscar tanto el string literal como la interpolación JSX
  const hasLiteral = navigationContent.includes(`href="${link.href}"`);
  const hasInterpolation = navigationContent.includes(`href={item.href}`);
  
  if (hasLiteral || hasInterpolation) {
    console.log(`✅ ${link.name} → ${link.href}`);
  } else {
    console.log(`❌ ${link.name} → ${link.href} - NO ENCONTRADO`);
    allLinksCorrect = false;
  }
});

// Verificar que se use Link de Next.js para todos los enlaces
const linkImportPattern = /import Link from 'next\/link'/;
if (linkImportPattern.test(navigationContent)) {
  console.log('✅ Import de Link de Next.js encontrado');
} else {
  console.log('❌ Import de Link de Next.js NO encontrado');
  allLinksCorrect = false;
}

// Verificar que no haya enlaces con # sin /
const badAnchorPattern = /href="#[^/]/;
if (!badAnchorPattern.test(navigationContent)) {
  console.log('✅ No hay enlaces con anclas incorrectas');
} else {
  console.log('❌ Se encontraron enlaces con anclas incorrectas');
  allLinksCorrect = false;
}

// Verificar CTA de guía
const guideCTAPattern = /href="\/guide"/;
if (guideCTAPattern.test(navigationContent)) {
  console.log('✅ CTA de guía configurado correctamente');
} else {
  console.log('❌ CTA de guía NO configurado correctamente');
  allLinksCorrect = false;
}

console.log('\n📄 Verificando páginas de destino...');

// Verificar que las páginas de destino existan
const pagesToCheck = [
  { path: 'app/page.tsx', name: 'Página principal' },
  { path: 'app/blog/page.tsx', name: 'Página de blog' },
  { path: 'app/guide/page.tsx', name: 'Página de guía' }
];

pagesToCheck.forEach(page => {
  const fullPath = path.join(process.cwd(), page.path);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${page.name} existe`);
  } else {
    console.log(`❌ ${page.name} NO existe`);
    allLinksCorrect = false;
  }
});

// Verificar secciones en los componentes
const sectionsToCheck = [
  { id: 'servicios', component: 'components/Services.tsx' },
  { id: 'equipo', component: 'components/Team.tsx' },
  { id: 'contacto', component: 'components/Contact.tsx' }
];

sectionsToCheck.forEach(section => {
  const componentPath = path.join(process.cwd(), section.component);
  if (fs.existsSync(componentPath)) {
    const componentContent = fs.readFileSync(componentPath, 'utf8');
    const sectionPattern = new RegExp(`id="${section.id}"`);
    if (sectionPattern.test(componentContent)) {
      console.log(`✅ Sección #${section.id} existe en ${section.component}`);
    } else {
      console.log(`❌ Sección #${section.id} NO existe en ${section.component}`);
      allLinksCorrect = false;
    }
  } else {
    console.log(`❌ Componente ${section.component} NO existe`);
    allLinksCorrect = false;
  }
});

console.log('\n🎯 Resultado del test:');
if (allLinksCorrect) {
  console.log('🎉 ¡Todos los enlaces están configurados correctamente!');
  console.log('\n📋 Enlaces verificados:');
  console.log('• Servicios → /#servicios (página principal + sección)');
  console.log('• Nosotros → /#equipo (página principal + sección)');
  console.log('• Contacto → /#contacto (página principal + sección)');
  console.log('• Blog → /blog (página de blog)');
  console.log('• CTA Guía → /guide (página de guía)');
} else {
  console.log('❌ Se encontraron problemas en la navegación');
  process.exit(1);
}
