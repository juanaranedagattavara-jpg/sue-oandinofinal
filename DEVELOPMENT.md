# 🚀 Guía de Desarrollo - Sueño Andino

## 📋 Flujo de Trabajo

### 1. Configuración Inicial
```bash
# Clonar repositorio
git clone https://github.com/juanaranedagattavara-jpg/sue-oandinofinal.git
cd sue-oandinofinal

# Instalar dependencias
npm install

# Configurar Git hooks (si no están configurados)
npm install -g husky
npx husky install
```

### 2. Desarrollo Diario

#### Sprints Pomodoro (50 min)
1. **40 minutos**: Construcción/desarrollo
2. **10 minutos**: Pruebas y commit

#### Orden de Implementación
1. `layout.tsx` (estructura + SEO base)
2. `Header`
3. `Hero + Stats`
4. `About`
5. `Services`
6. `Cases`
7. `Contact` (form + info)
8. `Footer`
9. `QA general` (responsive, accesibilidad, build)

### 3. Comandos Esenciales

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo (localhost:3001)

# Construcción
npm run build        # Build de producción
npm run start        # Servidor de producción

# Calidad
npm run lint         # Linting con ESLint
npm run qa           # QA Express (verificación completa)
npm run qa:full      # QA completo (build + lint + qa)

# Git
git checkout -b feat/nueva-feature  # Nueva feature
git add .                           # Agregar cambios
git commit -m "feat: descripción"   # Commit con convención
git push origin feat/nueva-feature  # Subir cambios
```

### 4. Convención de Commits

**Formato**: `tipo(scope): descripción`

**Tipos válidos**:
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato/estilo
- `refactor:` - Refactorización de código
- `test:` - Agregar o modificar tests
- `chore:` - Cambios en build/tools

**Ejemplos**:
```bash
feat: add hero section layout
fix: form email validation
style: update tailwind tokens
docs: update README with new features
refactor: improve component structure
```

### 5. Definición de Hecho (DoD)

Antes de marcar una tarea como completada, verificar:

- [ ] **Responsive**: Funciona en sm, md, lg, 2xl
- [ ] **Accesible**: Contraste AA+, labels en inputs, aria-* en botones
- [ ] **Desacoplado**: Textos editables en `content/home.json`
- [ ] **Optimizado**: `npm run build` sin errores ni warnings
- [ ] **Validado**: Formulario probado con casos válidos e inválidos
- [ ] **Medido**: Lighthouse ≥ 95 en Performance, Accesibilidad y SEO

### 6. QA Express

El script `npm run qa` verifica automáticamente:

1. ✅ Build exitoso sin errores
2. ✅ Linting sin errores
3. ✅ Contenido centralizado en `content/home.json`
4. ✅ Exportaciones Gutenberg disponibles
5. ✅ Clases responsive detectadas
6. ✅ Características de accesibilidad

### 7. Estructura de Archivos

```
├── app/                    # Next.js App Router
├── components/             # Componentes React
├── content/               # Contenido centralizado
├── exports/               # Exportaciones Gutenberg
├── lib/                   # Utilidades y configuraciones
├── public/                # Assets estáticos
├── scripts/               # Scripts de automatización
├── .husky/                # Git hooks
├── .vscode/               # Configuración VSCode
├── PROJECT-RULES.md       # Reglas del proyecto
└── DEVELOPMENT.md         # Esta guía
```

### 8. Límites Técnicos

- **Iconografía**: Máximo 1 SVG inline por card
- **Dependencias**: Solo Tailwind (evitar UI kits pesados)
- **Imágenes**: Usar `next/image` con compresión
- **Estilos**: Tokens en `tailwind.config.ts`
- **SEO**: Metadata básica en `layout.tsx`

### 9. Exportación Gutenberg

Para exportar secciones a WordPress:

1. Copiar contenido de archivos en `exports/`
2. Pegar en WordPress (Editor de código)
3. WordPress convertirá automáticamente a bloques nativos
4. Guardar como Patrón para reutilizar

### 10. Troubleshooting

**Error de build**:
```bash
npm run build
# Revisar errores en consola
# Corregir y volver a intentar
```

**Error de linting**:
```bash
npm run lint
# Corregir errores mostrados
# O usar --fix para corrección automática
```

**QA falla**:
```bash
npm run qa
# Revisar qué verificaciones fallan
# Corregir y volver a ejecutar
```

---

**¡Recuerda**: 1 commit = 1 aporte claro y testeado 🎯
