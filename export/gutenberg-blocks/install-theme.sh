#!/bin/bash

# 🚀 SCRIPT DE INSTALACIÓN AUTOMÁTICA - SUEÑO ANDINO
# Ejecutar desde la carpeta del proyecto

echo "🚀 INSTALANDO TEMA SUEÑO ANDINO EN WORDPRESS..."

# Verificar que estamos en la carpeta correcta
if [ ! -f "wordpress-theme.css" ]; then
    echo "❌ Error: No se encontró wordpress-theme.css"
    echo "   Ejecuta este script desde la carpeta export/gutenberg-blocks/"
    exit 1
fi

# Crear carpeta del tema
echo "📁 Creando carpeta del tema..."
mkdir -p wp-content/themes/sueno-andino

# Copiar archivos del tema
echo "📋 Copiando archivos del tema..."
cp wordpress-theme.css wp-content/themes/sueno-andino/style.css
cp wordpress-files/* wp-content/themes/sueno-andino/

# Verificar que los archivos se copiaron
if [ -f "wp-content/themes/sueno-andino/style.css" ]; then
    echo "✅ Tema instalado correctamente"
    echo ""
    echo "🎯 PRÓXIMOS PASOS:"
    echo "1. Ir a tu panel de WordPress"
    echo "2. Apariencia → Temas"
    echo "3. Activar 'Sueño Andino'"
    echo "4. Seguir la guía INSTALACION-WORDPRESS.md"
    echo ""
    echo "📁 Archivos del tema en: wp-content/themes/sueno-andino/"
else
    echo "❌ Error: No se pudieron copiar los archivos"
    exit 1
fi

echo "🎉 ¡Instalación completada!"
