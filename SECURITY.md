# 🛡️ Guía de Seguridad - Sueño Andino

Este documento describe las medidas de seguridad implementadas en el proyecto "Sueño Andino" y las mejores prácticas para mantener la seguridad del sistema.

## 📋 Resumen de Seguridad

El proyecto ha sido blindado contra los principales vectores de ataque siguiendo las mejores prácticas de OWASP Top 10 y estándares de seguridad modernos.

### ✅ Medidas Implementadas

- **Headers de Seguridad**: CSP, X-Frame-Options, X-Content-Type-Options, etc.
- **Validación Robusta**: Esquemas Zod para prevenir XSS e inyección
- **Rate Limiting**: Protección contra spam y ataques de fuerza bruta
- **Sanitización**: Limpieza de inputs en tiempo real
- **Logging Seguro**: Monitoreo sin exponer datos sensibles
- **Dependencias Actualizadas**: Sin vulnerabilidades críticas
- **CI/CD Seguro**: Pipeline automatizado con checks de seguridad

## 🔒 Headers de Seguridad

### Content Security Policy (CSP)
```
default-src 'self';
script-src 'self' 'unsafe-eval' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:;
font-src 'self' data:;
connect-src 'self';
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
```

### Headers Adicionales
- `X-Frame-Options: DENY` - Previene clickjacking
- `X-Content-Type-Options: nosniff` - Previene MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Control de referrer
- `Permissions-Policy` - Restricción de APIs del navegador

## 🛡️ Validación y Sanitización

### Esquemas de Validación (Zod)
- **Formulario de Contacto**: Validación de nombre, email y mensaje
- **Lead Magnet**: Validación de nombre y email
- **Sanitización**: Remoción de caracteres peligrosos (`<>`)
- **Longitud**: Límites máximos para prevenir ataques
- **Patrones**: Validación de formato de email y nombre

### Protección XSS
- Sanitización en tiempo real en formularios
- Validación de patrones maliciosos
- Escape automático en React
- CSP estricto para scripts

## 🚦 Rate Limiting

### Configuración
- **General**: 100 requests por IP en 15 minutos
- **Formularios**: 5 envíos por IP en 15 minutos
- **APIs**: 50 requests por IP en 15 minutos

### Implementación
- Middleware de Next.js
- Almacenamiento en memoria (desarrollo)
- Headers de retry-after
- Logging de intentos sospechosos

## 📊 Monitoreo y Logging

### Logs Estructurados
```json
{
  "timestamp": "2024-01-01T00:00:00.000Z",
  "level": "info",
  "event": "contact_form_submission",
  "ip": "192.168.1.1",
  "userAgent": "Mozilla/5.0...",
  "nameLength": 15,
  "emailDomain": "example.com",
  "messageLength": 200
}
```

### Campos Sensibles
- Contraseñas: `[REDACTED]`
- Tokens: `[REDACTED]`
- Claves: `[REDACTED]`

## 🔧 Comandos de Seguridad

### Auditoría Completa
```bash
npm run security:full
```

### Verificación de Vulnerabilidades
```bash
npm run security:check
```

### Auditoría Personalizada
```bash
npm run security:audit
```

### Corrección Automática
```bash
npm run security:fix
```

## 🚀 CI/CD Pipeline

### GitHub Actions
El pipeline incluye:
1. **Auditoría de Dependencias**: Verificación de vulnerabilidades
2. **Build Seguro**: Compilación con verificaciones
3. **Lighthouse Audit**: Puntuación de seguridad
4. **Headers Check**: Verificación de headers de seguridad
5. **Notificaciones**: Alertas en caso de fallos

### Archivos de Configuración
- `.github/workflows/security-ci.yml` - Pipeline principal
- `scripts/security-audit.js` - Script de auditoría
- `middleware.ts` - Headers de seguridad
- `lib/security.ts` - Configuración centralizada

## 🔐 Variables de Entorno

### Archivo de Ejemplo
Copia `env.example` a `.env.local` y configura:

```bash
# Seguridad
NEXTAUTH_SECRET=tu-clave-secreta-aqui
ENCRYPTION_KEY=tu-clave-de-encriptacion-aqui

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Email
SMTP_HOST=smtp.gmail.com
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-password-de-aplicacion
```

### Generación de Claves
```bash
# Clave secreta (32 bytes)
openssl rand -base64 32

# Clave de encriptación (32 bytes)
openssl rand -hex 32
```

## 🚨 Procedimientos de Emergencia

### En Caso de Breach
1. **Rotar Secretos**: Cambiar todas las claves inmediatamente
2. **Revocar Tokens**: Invalidar tokens de sesión
3. **Monitorear Logs**: Revisar logs de seguridad
4. **Notificar**: Informar a usuarios si es necesario
5. **Documentar**: Registrar el incidente

### Rotación de Claves
- **Cada 90 días**: Claves de encriptación
- **Cada 30 días**: Tokens de API
- **Inmediatamente**: En caso de compromiso

## 📈 Métricas de Seguridad

### KPIs a Monitorear
- **Vulnerabilidades**: 0 críticas, <5 altas
- **Rate Limiting**: <1% de requests bloqueados
- **Headers**: 100% de páginas con headers
- **Validación**: 0% de datos maliciosos procesados
- **Build**: 100% de builds exitosos

### Alertas Automáticas
- Vulnerabilidades críticas detectadas
- Rate limiting excedido consistentemente
- Headers de seguridad faltantes
- Builds fallidos por seguridad

## 🔍 Auditoría Regular

### Diaria
- Verificar logs de seguridad
- Revisar alertas de dependencias
- Monitorear rate limiting

### Semanal
- Ejecutar auditoría completa
- Revisar métricas de seguridad
- Actualizar documentación

### Mensual
- Rotar claves de desarrollo
- Revisar configuraciones
- Actualizar dependencias

## 📚 Recursos Adicionales

### Documentación
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/advanced-features/security-headers)
- [Zod Validation](https://zod.dev/)

### Herramientas
- [npm audit](https://docs.npmjs.com/cli/v8/commands/npm-audit)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Security Headers](https://securityheaders.com/)

## 🤝 Contribución

### Reportar Vulnerabilidades
Si encuentras una vulnerabilidad de seguridad:

1. **NO** crear un issue público
2. Enviar email a: security@sueñoandino.com
3. Incluir detalles técnicos
4. Esperar respuesta en 48 horas

### Mejoras de Seguridad
Las mejoras de seguridad son bienvenidas:

1. Crear branch: `security/descripcion`
2. Implementar cambios
3. Ejecutar: `npm run security:full`
4. Crear PR con detalles

## 📞 Contacto

- **Email de Seguridad**: security@sueñoandino.com
- **Documentación**: [README.md](./README.md)
- **Desarrollo**: [DEVELOPMENT.md](./DEVELOPMENT.md)

---

**Última actualización**: $(date)
**Versión de seguridad**: 1.0.0
**Próxima auditoría**: $(date -d "+30 days")
