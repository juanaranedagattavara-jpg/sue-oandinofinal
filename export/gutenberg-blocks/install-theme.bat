@echo off
REM 🚀 SCRIPT DE INSTALACIÓN AUTOMÁTICA - SUEÑO ANDINO
REM Ejecutar desde la carpeta del proyecto

echo 🚀 INSTALANDO TEMA SUEÑO ANDINO EN WORDPRESS...

REM Verificar que estamos en la carpeta correcta
if not exist "wordpress-theme.css" (
    echo ❌ Error: No se encontró wordpress-theme.css
    echo    Ejecuta este script desde la carpeta export/gutenberg-blocks/
    pause
    exit /b 1
)

REM Crear carpeta del tema
echo 📁 Creando carpeta del tema...
if not exist "wp-content\themes\sueno-andino" mkdir "wp-content\themes\sueno-andino"

REM Copiar archivos del tema
echo 📋 Copiando archivos del tema...
copy "wordpress-theme.css" "wp-content\themes\sueno-andino\style.css"
xcopy "wordpress-files\*" "wp-content\themes\sueno-andino\" /E /I

REM Verificar que los archivos se copiaron
if exist "wp-content\themes\sueno-andino\style.css" (
    echo ✅ Tema instalado correctamente
    echo.
    echo 🎯 PRÓXIMOS PASOS:
    echo 1. Ir a tu panel de WordPress
    echo 2. Apariencia → Temas
    echo 3. Activar 'Sueño Andino'
    echo 4. Seguir la guía INSTALACION-WORDPRESS.md
    echo.
    echo 📁 Archivos del tema en: wp-content\themes\sueno-andino\
) else (
    echo ❌ Error: No se pudieron copiar los archivos
    pause
    exit /b 1
)

echo 🎉 ¡Instalación completada!
pause
