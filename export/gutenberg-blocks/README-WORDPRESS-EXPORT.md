# 🚀 Exportación a WordPress - Sueño Andino

## 📋 Instrucciones de Exportación

### 1. **Preparación del Tema WordPress**

1. **Crear carpeta del tema:**

   ```
   wp-content/themes/sueno-andino/
   ```

2. **Copiar archivos base:**
   - `wordpress-theme.css` → `style.css`
   - Crear `index.php` básico
   - Crear `functions.php` para registrar estilos

### 2. **Instalación de Bloques Gutenberg**

#### **Método 1: Editor de Código (Recomendado)**

1. Ir a **Páginas** → **Añadir nueva**
2. Cambiar a **Editor de código** (icono `</>`)
3. Copiar y pegar cada bloque HTML
4. Cambiar a **Editor visual** para ver el resultado
5. **Guardar** como borrador o publicar

#### **Método 2: Patrones Reutilizables**

1. Ir a **Apariencia** → **Editor de patrones**
2. **Crear nuevo patrón**
3. Copiar y pegar cada bloque HTML
4. **Guardar** con nombre descriptivo
5. Usar en cualquier página

### 3. **Archivos de Bloques Disponibles**

| Archivo               | Descripción                        | Uso                   |
| --------------------- | ---------------------------------- | --------------------- |
| `hero-block.html`     | Sección principal con estadísticas | Página de inicio      |
| `services-block.html` | Servicios con CTA                  | Página de servicios   |
| `contact-block.html`  | Formulario de contacto             | Página de contacto    |
| `timeline-block.html` | Historia de la empresa             | Página sobre nosotros |
| `team-block.html`     | Equipo y directorio                | Página sobre nosotros |

### 4. **Configuración del Tema**

#### **functions.php**

```php
<?php
// Registrar estilos del tema
function sueno_andino_styles() {
    wp_enqueue_style('sueno-andino-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('inter-font', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
}
add_action('wp_enqueue_scripts', 'sueno_andino_styles');

// Registrar colores personalizados
function sueno_andino_custom_colors() {
    add_theme_support('editor-color-palette', array(
        array(
            'name' => 'SA Primary',
            'slug' => 'sa-primary',
            'color' => '#0E5E6F',
        ),
        array(
            'name' => 'SA Accent',
            'slug' => 'sa-accent',
            'color' => '#7FB069',
        ),
        array(
            'name' => 'SA Sand',
            'slug' => 'sa-sand',
            'color' => '#D9C8B4',
        ),
        array(
            'name' => 'SA Ink',
            'slug' => 'sa-ink',
            'color' => '#1C1C1E',
        ),
        array(
            'name' => 'SA Cloud',
            'slug' => 'sa-cloud',
            'color' => '#F5F6F7',
        ),
    ));
}
add_action('after_setup_theme', 'sueno_andino_custom_colors');
?>
```

#### **index.php**

```php
<?php get_header(); ?>
<main>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article>
            <?php the_content(); ?>
        </article>
    <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>
```

### 5. **Personalización de Contenido**

#### **Editar Textos:**

- Cambiar títulos, párrafos y botones directamente en el editor
- Los bloques mantienen la estructura pero permiten edición completa

#### **Cambiar Colores:**

- Usar la paleta de colores personalizada del tema
- Los colores `sa-primary`, `sa-accent`, etc. están disponibles

#### **Modificar Imágenes:**

- Reemplazar SVGs con imágenes reales
- Usar el bloque de imagen de WordPress

### 6. **Optimización SEO**

#### **Plugin Recomendado:**

- **Yoast SEO** o **RankMath**
- Configurar meta títulos y descripciones
- Optimizar imágenes con **Smush**

#### **Configuración Básica:**

```php
// En functions.php
function sueno_andino_meta_tags() {
    echo '<meta name="theme-color" content="#0E5E6F">';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">';
}
add_action('wp_head', 'sueno_andino_meta_tags');
```

### 7. **Formularios de Contacto**

#### **Plugin Recomendado:**

- **Contact Form 7** o **WPForms**
- Configurar campos: nombre, email, mensaje
- Conectar con email del sitio

#### **Configuración CF7:**

```html
<div class="sa-form-group">
  <label class="sa-form-label">Nombre completo *</label>
  [text* your-name placeholder "Tu nombre completo"]
</div>
<div class="sa-form-group">
  <label class="sa-form-label">Email *</label>
  [email* your-email placeholder "tu@email.com"]
</div>
<div class="sa-form-group">
  <label class="sa-form-label">Mensaje *</label>
  [textarea* your-message placeholder "Cuéntanos sobre tu proyecto..."]
</div>
[submit class:sa-btn class:sa-btn-primary "Enviar Mensaje"]
```

### 8. **Checklist de Implementación**

- [ ] Crear carpeta del tema
- [ ] Copiar `style.css` y archivos base
- [ ] Configurar `functions.php`
- [ ] Instalar bloques Gutenberg
- [ ] Personalizar contenidos
- [ ] Configurar formularios
- [ ] Optimizar SEO
- [ ] Probar responsive
- [ ] Verificar accesibilidad
- [ ] Publicar sitio

### 9. **Soporte y Mantenimiento**

#### **Actualizaciones:**

- Mantener WordPress actualizado
- Actualizar plugins regularmente
- Hacer backup antes de cambios

#### **Performance:**

- Usar plugin de caché (WP Rocket, W3 Total Cache)
- Optimizar imágenes
- Minificar CSS/JS

#### **Seguridad:**

- Usar plugin de seguridad (Wordfence)
- Mantener contraseñas seguras
- Actualizar regularmente

---

## 🎯 Resultado Final

Con esta exportación tendrás:

- ✅ **Diseño premium** idéntico al original
- ✅ **Bloques editables** en Gutenberg
- ✅ **Responsive design** completo
- ✅ **Formularios funcionales**
- ✅ **SEO optimizado**
- ✅ **Fácil mantenimiento**

¡Tu sitio estará listo para producción! 🚀
