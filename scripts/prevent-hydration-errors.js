const fs = require('fs');
const path = require('path');

console.log('🛡️ Previniendo errores de hidratación...');

// 1. Verificar que todos los componentes que usan hooks tengan 'use client'
const componentsDir = path.join(process.cwd(), 'components');
const componentFiles = fs.readdirSync(componentsDir).filter(file => file.endsWith('.tsx'));

const componentsWithHooks = [
  'Button.tsx',
  'Navigation.tsx', 
  'Hero.tsx',
  'GuideModal.tsx',
  'Modal.tsx',
  'Header.tsx',
  'Contact.tsx'
];

console.log('1️⃣ Verificando directivas "use client"...');
let hasErrors = false;

componentsWithHooks.forEach(component => {
  const filePath = path.join(componentsDir, component);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes("'use client'")) {
      console.error(`❌ ${component} - Falta directiva 'use client'`);
      hasErrors = true;
    } else {
      console.log(`✅ ${component} - Tiene 'use client'`);
    }
  }
});

// 2. Verificar que no haya botones anidados
console.log('\n2️⃣ Verificando botones anidados...');
const problematicPatterns = [
  { pattern: /<button[^>]*>[\s\S]*?<Button/g, message: 'Botón nativo dentro de Button component' },
  { pattern: /<Button[^>]*>[\s\S]*?<button/g, message: 'Button component dentro de botón nativo' }
];

componentFiles.forEach(file => {
  const filePath = path.join(componentsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  problematicPatterns.forEach(({ pattern, message }) => {
    if (pattern.test(content)) {
      console.error(`❌ ${file} - ${message}`);
      hasErrors = true;
    }
  });
});

if (!hasErrors) {
  console.log('✅ Sin botones anidados encontrados');
}

// 3. Verificar imports de JSON en componentes client
console.log('\n3️⃣ Verificando imports de JSON en componentes client...');
const jsonImports = [
  { file: 'components/Hero.tsx', import: "import homeData from '../content/home.json'" },
  { file: 'components/Team.tsx', import: "import homeData from '../content/home.json'" }
];

jsonImports.forEach(({ file, import: importStr }) => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(importStr)) {
      console.error(`❌ ${file} - Import de JSON en componente client`);
      hasErrors = true;
    } else {
      console.log(`✅ ${file} - Sin import de JSON`);
    }
  }
});

// 4. Verificar que los hooks estén en archivos separados
console.log('\n4️⃣ Verificando hooks...');
const hooksDir = path.join(process.cwd(), 'hooks');
if (fs.existsSync(hooksDir)) {
  const hookFiles = fs.readdirSync(hooksDir).filter(file => file.endsWith('.ts'));
  hookFiles.forEach(file => {
    const filePath = path.join(hooksDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes("'use client'")) {
      console.error(`❌ hooks/${file} - Falta directiva 'use client'`);
      hasErrors = true;
    } else {
      console.log(`✅ hooks/${file} - Tiene 'use client'`);
    }
  });
}

if (hasErrors) {
  console.log('\n❌ Se encontraron errores de hidratación. Corrige antes de continuar.');
  process.exit(1);
} else {
  console.log('\n🎉 Verificación de hidratación completada. Sin errores encontrados.');
}
