# 🚀 Guía de Instalación - Sueño Andino

## 📋 Opciones de Instalación

### 🌐 Opción 1: HTML Estático (Recomendado para empezar)

#### Instalación Local
```bash
# 1. Navegar a la carpeta del proyecto
cd Sueño-Andino-Export-Elite

# 2. Iniciar servidor local
python -m http.server 3000

# 3. Abrir en navegador
# http://localhost:3000
```

#### Instalación en Servidor
1. **Subir todos los archivos** a tu servidor web
2. **Configurar dominio** para apuntar al servidor
3. **Verificar que funcione** accediendo al dominio

### 🎨 Opción 2: WordPress con Bloques Gutenberg

#### Requisitos Previos
- WordPress 5.0 o superior
- PHP 7.4 o superior
- MySQL 5.7 o superior

#### Instalación del Tema
1. **Acceder a WordPress Admin** (`/wp-admin`)
2. **Ir a Apariencia > Temas**
3. **Hacer clic en "Añadir nuevo"**
4. **Seleccionar "Subir tema"**
5. **Comprimir carpeta `wp-theme` en ZIP**
6. **Subir archivo ZIP**
7. **Activar tema "Sueño Andino"**

#### Configuración de la Página Principal
1. **Crear nueva página** (Páginas > Añadir nueva)
2. **Título: "Inicio"**
3. **Seleccionar plantilla "Página Principal"**
4. **Agregar bloques "Sueño Andino":**
   - Hero Block
   - Servicios Block
   - Equipo Block
   - Contacto Block
5. **Publicar página**

#### Configuración de Menús
1. **Ir a Apariencia > Menús**
2. **Crear menú "Principal"**
3. **Agregar enlaces a secciones**
4. **Asignar a ubicación "Menú Principal"**

## 🛠️ Comandos Útiles

### Desarrollo Local
```bash
# Servidor HTML
python -m http.server 3000

# Servidor PHP (si tienes PHP instalado)
php -S localhost:8000

# Verificar archivos
dir /s
```

### Git (si usas control de versiones)
```bash
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Primer commit
git commit -m "Initial commit"

# Conectar con repositorio remoto
git remote add origin https://github.com/tu-usuario/sueño-andino.git

# Subir cambios
git push -u origin main
```

## 🔧 Configuración Avanzada

### Variables de Entorno
Crear archivo `.env` (opcional):
```
SITE_URL=https://tudominio.com
ADMIN_EMAIL=admin@tudominio.com
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Configuración del Servidor
- **Apache**: Usar archivo `.htaccess` incluido
- **Nginx**: Configurar reglas de reescritura
- **CDN**: Configurar para archivos estáticos

## 📱 Testing

### Verificar Funcionalidad
1. **Abrir página principal**
2. **Verificar que todas las secciones se vean**
3. **Probar formulario de contacto**
4. **Verificar responsive en móvil**
5. **Comprobar velocidad de carga**

### Herramientas de Testing
- **Google PageSpeed Insights**
- **GTmetrix**
- **Lighthouse** (Chrome DevTools)

## 🚨 Solución de Problemas

### Error 404
- Verificar que archivos estén en servidor
- Comprobar configuración de servidor web

### Error 500
- Verificar permisos de archivos
- Revisar logs de error del servidor

### Problemas de WordPress
- Verificar versión de PHP
- Comprobar plugins conflictivos
- Revisar logs de error

## 📞 Soporte

Si necesitas ayuda:
- **Email**: hola@sueñoandino.com
- **Teléfono**: +51 999 888 777
- **Documentación**: Ver README.md

---
**Última actualización**: 23 de septiembre de 2025
