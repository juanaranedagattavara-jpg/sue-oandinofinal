# 🛡️ Guía de Estabilidad - Sueño Andino

## ⚠️ Problemas Comunes y Soluciones

### 1. **Problema: Página se rompe después de cambios**
**Causa**: Imports de JSON externos en componentes React
**Solución**: Usar datos estáticos dentro de los componentes

❌ **MALO**:
```tsx
import homeData from '../content/home.json'
const { team } = homeData
```

✅ **BUENO**:
```tsx
const team = {
  title: "Nuestro Equipo",
  // ... datos estáticos
}
```

### 2. **Problema: Errores de hidratación**
**Causa**: Diferencias entre servidor y cliente
**Solución**: Evitar lógica condicional compleja en render

### 3. **Problema: Build falla**
**Causa**: Imports rotos o sintaxis incorrecta
**Solución**: Usar `npm run diagnose` antes de cada cambio

## 🔧 Scripts de Prevención

### Antes de hacer cambios:
```bash
npm run diagnose
```

### Para desarrollo seguro:
```bash
npm run safe-dev
```

### Para build seguro:
```bash
npm run safe-build
```

## 📋 Checklist de Estabilidad

Antes de cada commit, verificar:

- [ ] `npm run diagnose` pasa sin errores
- [ ] `npm run build` compila sin warnings
- [ ] No hay imports de JSON en componentes
- [ ] Todos los componentes tienen datos estáticos
- [ ] Navegación funciona correctamente

## 🚨 Señales de Alerta

Si ves estos errores, la página se va a romper:

1. **"Module not found"** - Import roto
2. **"Hydration mismatch"** - Diferencia servidor/cliente
3. **"Cannot read property"** - Datos undefined
4. **Build warnings** - Problemas de compilación

## 🛠️ Solución Rápida

Si la página se rompe:

1. **Detener servidor**: `Ctrl+C`
2. **Limpiar caché**: `Remove-Item -Recurse -Force .next`
3. **Diagnosticar**: `npm run diagnose`
4. **Reiniciar**: `npm run safe-dev`

## 📁 Estructura Segura

```
components/
├── Navigation.tsx    # Datos estáticos
├── Team.tsx         # Datos estáticos
└── Header.tsx       # Usa Navigation

content/
└── home.json        # Solo para páginas estáticas
```

## ✅ Reglas de Oro

1. **Nunca** importar JSON en componentes React
2. **Siempre** usar `npm run diagnose` antes de cambios
3. **Siempre** probar build antes de commit
4. **Mantener** datos estáticos en componentes
5. **Usar** scripts seguros (`safe-dev`, `safe-build`)

---

**🎯 Objetivo**: Página siempre estable y funcional
**🔒 Compromiso**: Cero errores, máxima estabilidad
