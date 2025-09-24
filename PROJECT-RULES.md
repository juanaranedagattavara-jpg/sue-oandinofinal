# 🚀 Reglas del Proyecto – Productividad Worldclass

## 🔀 Flujo de Ramas & Commits

### Estructura de ramas:
- `main` → estable, siempre deploy-ready
- `feat/mvp-landing` → rama de desarrollo del MVP inicial
- Ramas adicionales solo si son features grandes (`feat/services-section`, `fix/form-contact`)

### Commits atómicos y claros (Conventional Commits):
- `feat:` → nueva funcionalidad (ej: `feat: add hero section layout`)
- `style:` → cambios visuales (ej: `style: update tailwind tokens`)
- `fix:` → correcciones (ej: `fix: form email validation`)
- `refactor:` → mejora de código sin cambiar funcionalidad
- `docs:` → cambios en documentación/README

**✅ Regla de oro: 1 commit = 1 aporte claro y testeado**

## ⏱️ Sprints Pomodoro

### Bloques de 50 min → 40' construcción + 10' pruebas & commit

### Orden fijo de implementación:
1. `layout.tsx` (estructura + SEO base)
2. `Header`
3. `Hero + Stats`
4. `About`
5. `Services`
6. `Cases`
7. `Contact` (form + info)
8. `Footer`
9. `QA general` (responsive, accesibilidad, build)

**👉 Regla express: No pasar a la siguiente sección hasta cumplir la definición de hecho**

## 🏁 Definición de Hecho (DoD)

Una tarea/feature está terminada solo si cumple:

- [ ] **Responsive**: funciona en sm, md, lg, 2xl
- [ ] **Accesible**: contraste AA+, labels en inputs, aria-* en botones
- [ ] **Desacoplado**: textos y copy editables en `content/home.json`
- [ ] **Optimizado**: build (`npm run build`) sin errores ni warnings
- [ ] **Validado**: formulario probado con casos válidos e inválidos
- [ ] **Medido**: Lighthouse ≥ 95 en Performance, Accesibilidad y SEO

## ⚡ Límites Técnicos (para mantener ligereza)

### Iconografía:
- Máximo 1 SVG inline por card (hero, services, about)

### Dependencias:
- Solo Tailwind (evitar UI kits pesados)

### Imágenes:
- Usar `next/image`
- Compresión previa (TinyPNG o Squoosh)
- Incluir sizes para carga responsive

### Estilos:
- Tokens en `tailwind.config.ts`
- Nada de CSS custom salvo en `globals.css` para reset y tipografía

### SEO:
- `<title>`, `<meta description>` y Open Graph básicos en `layout.tsx`

## ✅ QA Express

### Checklist obligatorio:
- [ ] `npm run build` sin warnings ni errores
- [ ] Prueba del formulario con:
  - [ ] Nombre vacío → error mostrado
  - [ ] Email inválido → error mostrado
  - [ ] Email válido + mensaje → éxito (console.log en dev)
- [ ] Lighthouse: correr en modo incognito → Performance ≥ 95, Accesibilidad ≥ 95
- [ ] Exportar al menos una sección (Hero) a Gutenberg (`export/hero.html`) y confirmar que WP lo convierte a bloques

## 🧭 Extra – Reglas de Exportación Gutenberg

- Cada sección exportada debe estar en `/exports` con comentarios `<!-- wp:... -->`
- Copiar/pegar en WP (editor de código) debe generar bloques nativos, no HTML plano
- Guardar secciones como Patrones en WP para reuso

## 📋 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build y verificación
npm run build
npm run lint

# QA Express
npm run qa

# Git flow
git checkout -b feat/nueva-feature
git add .
git commit -m "feat: descripción clara"
git push origin feat/nueva-feature
```

## 🎯 Métricas Objetivo

- **Performance**: ≥ 95
- **Accesibilidad**: ≥ 95
- **SEO**: ≥ 95
- **Best Practices**: ≥ 95
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
