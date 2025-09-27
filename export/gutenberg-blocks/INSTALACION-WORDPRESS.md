# 🚀 GUÍA COMPLETA DE INSTALACIÓN EN WORDPRESS

## 📋 **PASO A PASO DETALLADO**

### **PASO 1: PREPARAR ARCHIVOS**

#### **1.1 Crear carpeta del tema:**

```bash
# En tu servidor WordPress, crear la carpeta:
mkdir wp-content/themes/sueno-andino
```

#### **1.2 Copiar archivos del tema:**

```bash
# Copiar el archivo CSS principal
cp wordpress-theme.css wp-content/themes/sueno-andino/style.css

# Copiar todos los archivos PHP
cp wordpress-files/* wp-content/themes/sueno-andino/
```

### **PASO 2: ACTIVAR TEMA EN WORDPRESS**

1. **Iniciar sesión** en tu panel de administración de WordPress
2. Ir a **Apariencia** → **Temas**
3. Buscar **"Sueño Andino"** en la lista de temas
4. Hacer clic en **"Activar"**

### **PASO 3: CONFIGURAR PÁGINA DE INICIO**

1. Ir a **Páginas** → **Añadir nueva**
2. Título: **"Inicio"**
3. Hacer clic en el **icono de código** `</>` (Editor de código)
4. Copiar y pegar el contenido de `complete-page.html`
5. **Guardar** y **Publicar**

### **PASO 4: CREAR PÁGINAS ADICIONALES**

#### **4.1 Página de Blog:**

1. **Páginas** → **Añadir nueva**
2. Título: **"Blog"**
3. Editor de código → Copiar contenido de `blog-page.html`
4. **Guardar** y **Publicar**

#### **4.2 Página de Guía:**

1. **Páginas** → **Añadir nueva**
2. Título: **"Guía Gratuita"**
3. Editor de código → Copiar contenido de `guide-page.html`
4. **Guardar** y **Publicar**

### **PASO 5: CONFIGURAR MENÚS**

1. Ir a **Apariencia** → **Menús**
2. Crear nuevo menú: **"Menú Principal"**
3. Añadir páginas:
   - Inicio
   - Blog
   - Guía Gratuita
4. Asignar ubicación: **"Menú Principal"**

### **PASO 6: CONFIGURAR PÁGINA DE INICIO**

1. Ir a **Ajustes** → **Lectura**
2. **"Tu página de inicio muestra"** → Seleccionar **"Una página estática"**
3. **Página de inicio:** Seleccionar **"Inicio"**
4. **Guardar cambios**

## 🎨 **PERSONALIZACIÓN ADICIONAL**

### **Cambiar Colores:**

1. Ir a **Apariencia** → **Personalizar**
2. **Colores** → **Paleta de colores**
3. Los colores SA ya están registrados

### **Cambiar Contenido:**

1. Editar cualquier página
2. Hacer clic en cualquier bloque
3. Modificar texto, colores, espaciado
4. **Actualizar**

### **Añadir Imágenes:**

1. En cualquier bloque de imagen
2. Hacer clic en **"Seleccionar imagen"**
3. Subir o seleccionar imagen
4. **Actualizar**

## 🔧 **CONFIGURACIÓN DE FORMULARIOS**

### **Instalar Contact Form 7:**

1. **Plugins** → **Añadir nuevo**
2. Buscar **"Contact Form 7"**
3. **Instalar** y **Activar**

### **Crear formulario de contacto:**

1. **Contacto** → **Formularios de contacto**
2. **Añadir nuevo**
3. Usar el formulario predeterminado
4. Copiar el shortcode: `[contact-form-7 id="123" title="Formulario de contacto"]`
5. Pegar en la página de contacto

## 📱 **VERIFICACIÓN FINAL**

### **Checklist de verificación:**

- [ ] Tema activado correctamente
- [ ] Página de inicio configurada
- [ ] Menú principal funcionando
- [ ] Todas las páginas creadas
- [ ] Formularios funcionando
- [ ] Diseño responsive en móvil
- [ ] Colores personalizados aplicados

## 🚨 **SOLUCIÓN DE PROBLEMAS**

### **Si el tema no aparece:**

- Verificar que los archivos estén en la carpeta correcta
- Comprobar permisos de archivos (755 para carpetas, 644 para archivos)

### **Si los estilos no se cargan:**

- Verificar que `style.css` esté en la raíz del tema
- Limpiar caché del sitio

### **Si los bloques no se ven:**

- Verificar que estés usando el **Editor de código**
- No el editor visual de bloques

## 🎯 **RESULTADO FINAL**

**¡Tu sitio estará listo con:**

- ✅ Diseño premium idéntico al original
- ✅ Todas las secciones editables
- ✅ Formularios funcionales
- ✅ Responsive design
- ✅ SEO optimizado
- ✅ Fácil personalización

**¡Disfruta tu nuevo sitio web! 🚀**
