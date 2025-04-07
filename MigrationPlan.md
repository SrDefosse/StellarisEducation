# Plan de Migración: Next.js a Vite

## 1. Estructura del Proyecto

### Estructura Actual
```
src/
├── pages/
│   ├── index.jsx (Home)
│   ├── about/
│   ├── academics/
│   ├── afterSchool/
│   ├── admissions/
│   ├── contact/
│   ├── _app.jsx
│   └── _document.jsx
├── components/
├── assets/
└── ...
```

## 2. Cambios Necesarios

### 2.1 Configuración Inicial
- [x] Configuración básica de Vite (ya realizada)
- [ ] Configurar rutas y navegación con React Router
- [ ] Migrar configuración de estilos y assets

### 2.2 Migración de Páginas
1. **Eliminar archivos específicos de Next.js**
   - Remover `_app.jsx` y `_document.jsx`
   - Crear nuevo `App.jsx` con React Router

2. **Migración de Páginas Principales**
   - Home (`pages/index.jsx` → `pages/Home.jsx`)
   - About Us (`pages/about/*` → `pages/AboutUs/*`)
   - Academics (`pages/academics/*` → `pages/Academics/*`)
     * Pre-K
     * IB Programme
     * Spanish Immersion
     * International Teachers
   - After School (`pages/afterSchool/*` → `pages/AfterSchool/*`)
   - Admissions (`pages/admissions/*` → `pages/Admissions/*`)
   - Contact (`pages/contact/*` → `pages/Contact/*`)

### 2.3 Ajustes de Componentes
1. **Revisar y Actualizar Imports**
   - Actualizar rutas de importación
   - Remover imports específicos de Next.js
   - Migrar `Link` de Next.js a React Router

2. **Actualizar Manejo de Imágenes**
   - Migrar `next/image` a elementos `<img>`
   - Configurar optimización de imágenes con Vite

### 2.4 Optimizaciones
1. **SEO y Metadata**
   - Implementar React Helmet para manejo de meta tags
   - Migrar configuraciones de SEO de Next.js

2. **Routing y Navegación**
   - Implementar React Router v6
   - Configurar rutas dinámicas
   - Manejar redirecciones

## 3. Pasos de Implementación

1. **Fase 1: Configuración Base**
   - Configurar React Router
   - Establecer layout base
   - Migrar componentes compartidos

2. **Fase 2: Migración de Páginas**
   - Migrar página por página en orden de prioridad
   - Comenzar con Home
   - Seguir con páginas estáticas (About, Contact)
   - Finalizar con páginas más complejas (Academics, Admissions)

3. **Fase 3: Optimización**
   - Implementar lazy loading
   - Optimizar performance
   - Realizar pruebas de navegación
   - Verificar SEO

## 4. Consideraciones Especiales

### 4.1 Performance
- Implementar lazy loading para rutas
- Optimizar carga de imágenes
- Minimizar bundle size

### 4.2 SEO
- Mantener URLs amigables
- Implementar meta tags dinámicos
- Asegurar indexación correcta

### 4.3 Testing
- Probar todas las rutas
- Verificar funcionalidad responsive
- Validar formularios
- Comprobar navegación

## 5. Timeline Estimado

1. **Configuración Inicial**: 1 día
2. **Migración de Páginas**: 3-4 días
3. **Optimización y Testing**: 1-2 días

Total estimado: 5-7 días laborables
