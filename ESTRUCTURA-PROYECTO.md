# 📁 Estructura del Proyecto - Sueño Andino

## 🌐 Versión HTML Estática

```
Sueño-Andino-Export-Elite/
├── index.html                 # Página principal
├── assets/                    # Recursos estáticos
│   ├── css/                   # Hojas de estilo
│   │   ├── base.css          # Estilos base
│   │   ├── components.css    # Componentes
│   │   ├── main.css          # Estilos principales
│   │   └── premium.css       # Estilos premium
│   ├── js/                   # Scripts JavaScript
│   │   ├── main.js           # Script principal
│   │   ├── utils.js          # Utilidades
│   │   ├── modals.js         # Modales
│   │   └── forms.js          # Formularios
│   └── img/                  # Imágenes
│       ├── hero-background.jpg
│       ├── logo-sa-blanco.png
│       └── [otras imágenes]
├── legal/                     # Páginas legales
│   ├── cookies-policy.html
│   ├── politica-privacidad.html
│   └── terminos-condiciones.html
├── pages/                     # Páginas adicionales
│   ├── 404.html
│   ├── 500.html
│   ├── blog.html
│   └── preview-equipo.html
├── parts/                     # Componentes reutilizables
│   ├── footer.html
│   └── header.html
├── patterns/                  # Patrones de diseño
│   ├── hero.html
│   ├── servicios.html
│   ├── equipo.html
│   ├── contacto.html
│   └── [otros patrones]
├── templates/                 # Plantillas HTML
│   ├── front-page.html
│   ├── page-arquitectura.html
│   └── page-estandar-calidad.html
├── testing/                   # Archivos de testing
│   ├── lighthouse-test.js
│   └── performance-test.html
└── docs/                      # Documentación
    ├── CONFIGURACION_GOOGLE_CALENDAR.md
    └── PERFORMANCE_REPORT.md
```

## 🎨 Tema WordPress

```
wp-theme/
├── style.css                  # Estilo principal del tema
├── index.php                  # Archivo principal
├── functions.php              # Funciones del tema
├── header.php                 # Cabecera
├── footer.php                 # Pie de página
├── assets/                    # Recursos del tema
│   ├── css/                   # Estilos del tema
│   │   ├── base.css
│   │   ├── blocks.css
│   │   ├── blocks-editor.css
│   │   ├── editor-style.css
│   │   └── premium.css
│   └── js/                    # Scripts del tema
│       ├── blocks.js
│       └── blocks-frontend.js
├── blocks/                    # Bloques Gutenberg
│   ├── hero-block/            # Bloque Hero
│   │   ├── block.json
│   │   ├── block.php
│   │   ├── editor.js
│   │   └── style.css
│   ├── servicios-block/       # Bloque Servicios
│   │   ├── block.json
│   │   ├── block.php
│   │   └── style.css
│   ├── equipo-block/          # Bloque Equipo
│   │   ├── block.json
│   │   ├── block.php
│   │   └── style.css
│   ├── contacto-block/        # Bloque Contacto
│   │   ├── block.json
│   │   ├── block.php
│   │   └── style.css
│   └── blocks.js              # Registro de bloques
├── templates/                 # Plantillas de WordPress
│   ├── front-page.php
│   └── page.php
├── template-parts/            # Partes de plantillas
│   ├── content-none.php
│   └── sections/
│       ├── hero.php
│       ├── servicios.php
│       ├── equipo.php
│       ├── contacto.php
│       └── [otras secciones]
├── inc/                       # Archivos de inclusión
│   ├── blocks.php
│   ├── custom-fields.php
│   ├── performance.php
│   ├── security.php
│   ├── seo.php
│   └── template-functions.php
└── README.md                  # Documentación del tema
```

## 🔧 Archivos de Configuración

```
Sueño-Andino-Export-Elite/
├── .gitignore                 # Archivos a ignorar en Git
├── .htaccess                  # Configuración del servidor
├── package.json               # Configuración de Node.js
├── server-config.json         # Configuración del servidor
├── README.md                  # Documentación principal
├── INSTALACION.md             # Guía de instalación
└── ESTRUCTURA-PROYECTO.md     # Este archivo
```

## 📋 Descripción de Archivos Clave

### HTML Estático
- **index.html**: Página principal con todas las secciones
- **assets/**: Recursos estáticos (CSS, JS, imágenes)
- **legal/**: Páginas legales requeridas
- **pages/**: Páginas adicionales del sitio

### WordPress
- **style.css**: Estilo principal del tema
- **functions.php**: Funciones y configuraciones
- **blocks/**: Bloques Gutenberg personalizados
- **templates/**: Plantillas de WordPress

### Configuración
- **.htaccess**: Configuración del servidor Apache
- **package.json**: Configuración de Node.js
- **server-config.json**: Configuración del servidor

## 🚀 Flujo de Trabajo

### Desarrollo HTML
1. Editar archivos en `assets/`
2. Modificar `index.html`
3. Probar localmente
4. Subir a servidor

### Desarrollo WordPress
1. Editar bloques en `wp-theme/blocks/`
2. Modificar funciones en `wp-theme/functions.php`
3. Probar en WordPress local
4. Subir tema a WordPress

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Archivos CSS
- **base.css**: Estilos base y reset
- **components.css**: Componentes reutilizables
- **main.css**: Estilos principales
- **premium.css**: Estilos avanzados

## ⚡ Performance

### Optimizaciones
- **Lazy Loading**: Imágenes y scripts
- **Minificación**: CSS y JS
- **Compresión**: Gzip habilitado
- **Caching**: Headers de cache configurados

### Archivos de Testing
- **lighthouse-test.js**: Tests de Lighthouse
- **performance-test.html**: Tests de performance

---
**Última actualización**: 23 de septiembre de 2025
