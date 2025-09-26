# Sueño Andino - MVP Premium Landing

Landing corporativa premium para desarrollo territorial regenerativo construida con Next.js 14, TypeScript y TailwindCSS.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para type safety
- **TailwindCSS** con tokens personalizados SA
- **Contenido centralizado** en `content/home.json`
- **API de contacto** lista para escalar
- **Diseño accesible** y mobile-first
- **SEO optimizado** con metadata dinámica
- **Exportación Gutenberg** para WordPress
- **🛡️ Seguridad robusta** con headers, validación y rate limiting
- **🔒 Protección OWASP** contra XSS, CSRF e inyección

## 🎨 Tokens de Diseño

```css
sa.primary: #0E5E6F  /* azul andino profundo */
sa.accent: #7FB069   /* verde regenerativo */
sa.sand: #D9C8B4     /* tierra clara */
sa.ink: #1C1C1E      /* texto */
sa.cloud: #F5F6F7    /* fondo suave */
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal con SEO
│   ├── page.tsx            # Página de inicio
│   ├── guide/page.tsx      # Página de guía
│   ├── api/contact/route.ts # API de contacto
│   ├── globals.css         # Estilos globales
│   ├── sitemap.ts          # Sitemap XML
│   └── robots.ts           # Robots.txt
├── components/
│   ├── Container.tsx       # Contenedor base
│   ├── Header.tsx          # Navegación principal
│   ├── Hero.tsx            # Sección hero
│   ├── Stats.tsx           # Estadísticas
│   ├── About.tsx           # Sobre nosotros
│   ├── Services.tsx        # Servicios
│   ├── Cases.tsx           # Casos de éxito
│   ├── Contact.tsx         # Formulario de contacto
│   └── Footer.tsx          # Pie de página
├── content/
│   └── home.json           # Contenido centralizado
├── lib/
│   └── email.ts            # Configuración de email
├── exports/
│   ├── gutenberg-hero.html     # Exportación Hero
│   ├── gutenberg-about.html    # Exportación About
│   └── gutenberg-services.html # Exportación Services
└── public/
    └── logo-sa.svg         # Logo SVG
```

## 🛠️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# QA Express (verificación completa)
npm run qa

# QA completo (build + lint + qa)
npm run qa:full
```

## 🚀 Reglas del Proyecto

Este proyecto sigue las **Reglas de Productividad Worldclass** definidas en `PROJECT-RULES.md`:

### 🔀 Flujo de Ramas & Commits
- **Ramas**: `main` (estable) → `feat/mvp-landing` (desarrollo)
- **Commits**: Convención Conventional Commits (`feat:`, `fix:`, `style:`, etc.)
- **Regla de oro**: 1 commit = 1 aporte claro y testeado

### ⏱️ Sprints Pomodoro
- **Bloques**: 50 min (40' construcción + 10' pruebas & commit)
- **Orden fijo**: Layout → Header → Hero → Stats → About → Services → Cases → Contact → Footer → QA

### 🏁 Definición de Hecho (DoD)
Una feature está terminada solo si cumple:
- [ ] Responsive (sm, md, lg, 2xl)
- [ ] Accesible (contraste AA+, ARIA labels)
- [ ] Desacoplado (textos en `content/home.json`)
- [ ] Optimizado (build sin errores)
- [ ] Validado (formulario probado)
- [ ] Medido (Lighthouse ≥ 95)

## 📝 Edición de Contenido

Todo el contenido está centralizado en `content/home.json`. Edita este archivo para actualizar:

- Textos de navegación
- Contenido del hero
- Estadísticas
- Información de servicios
- Testimonios
- Datos de contacto

## 📧 Configuración de Email

Para activar el envío de emails, edita `lib/email.ts` y configura:

1. **Sendgrid**: Descomenta la sección y agrega `SENDGRID_API_KEY`
2. **SMTP**: Descomenta la sección y configura las variables de entorno

Variables de entorno necesarias:
```env
SENDGRID_API_KEY=tu_api_key
CONTACT_EMAIL=contacto@sueñoandino.com
FROM_EMAIL=noreply@sueñoandino.com
```

## 🌍 Exportación a WordPress

Los archivos en `exports/` contienen HTML nativo con comentarios Gutenberg:

1. Copia el contenido de cualquier archivo `.html`
2. En WordPress, ve a "Editor de código"
3. Pega el HTML
4. WordPress convertirá automáticamente a bloques nativos
5. Guarda como "Patrón" para reutilizar

## 🛡️ Seguridad

El proyecto implementa medidas de seguridad robustas siguiendo OWASP Top 10:

### Headers de Seguridad
- **CSP**: Content Security Policy estricto
- **X-Frame-Options**: Previene clickjacking
- **X-Content-Type-Options**: Previene MIME sniffing
- **Referrer-Policy**: Control de referrer

### Validación y Sanitización
- **Zod Schemas**: Validación robusta de formularios
- **XSS Protection**: Sanitización en tiempo real
- **Input Validation**: Límites de longitud y patrones
- **Rate Limiting**: Protección contra spam

### Monitoreo
- **Logging Seguro**: Sin datos sensibles
- **Auditoría Automática**: Scripts de verificación
- **CI/CD Seguro**: Pipeline con checks de seguridad

Ver [SECURITY.md](./SECURITY.md) para detalles completos.

## 🎯 Optimización Lighthouse

El proyecto está optimizado para Lighthouse ≥ 95:

- **Performance**: Imágenes optimizadas, lazy loading
- **Accesibilidad**: ARIA labels, contraste AA+
- **SEO**: Metadata dinámica, sitemap, robots.txt
- **Best Practices**: HTTPS, headers de seguridad

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), 2xl (1536px)
- **Grid System**: CSS Grid y Flexbox
- **Typography**: Escalas responsivas

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint

# Seguridad
npm run security:audit    # Auditoría de seguridad completa
npm run security:check    # Verificar vulnerabilidades
npm run security:fix      # Corregir vulnerabilidades automáticamente
npm run security:full     # Verificación completa de seguridad

# QA
npm run qa       # QA Express
npm run qa:full  # QA completo (build + lint + qa)
```

## 📊 Métricas de Build

```
Route (app)                              Size     First Load JS
┌ ○ /                                    2.81 kB        91.4 kB
├ ○ /_not-found                          869 B          82.7 kB
├ λ /api/contact                         0 B                0 B
└ ○ /guide                               175 B          88.8 kB
```

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir carpeta .next a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📄 Licencia

© 2024 Sueño Andino. Todos los derechos reservados.

---

**Desarrollado con ❤️ para el desarrollo territorial regenerativo en Latinoamérica**
