# Sitio Web POP Ingeniería - Automatización Industrial

Sitio web corporativo estático construido con Next.js 16 para empresa especializada en automatización industrial, control e instrumentación.

## 🚀 Características

- **Next.js 16** con App Router
- **JavaScript** (sin TypeScript para simplicidad)
- **CSS Modules** para estilos
- **Responsive Design** con enfoque mobile-first
- **SEO básico** con metadata por página
- **Paleta azul/gris ingenieril** profesional
- **Componentes reutilizables** y modulares

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales con variables CSS
│   ├── layout.js          # Layout principal con Header/Footer
│   ├── page.js            # Homepage
│   ├── servicios/         # Página de servicios
│   ├── proyectos/         # Página de proyectos
│   ├── acerca-de/         # Página acerca de
│   └── contacto/          # Página de contacto
├── components/            # Componentes reutilizables
│   ├── Header.jsx         # Navegación principal
│   ├── Footer.jsx         # Footer con links y contacto
│   ├── Container.jsx      # Wrapper de contenido
│   ├── Section.jsx        # Secciones de página
│   ├── Card.jsx           # Tarjetas de contenido
│   └── Button.jsx         # Botones con variantes
└── content/               # Datos estructurados
    ├── site.js            # Configuración general del sitio
    ├── services.js        # Información de servicios
    ├── projects.js        # Casos de éxito
    └── industries.js      # Industrias atendidas
```

## 🎨 Paleta de Colores

```css
--primary-blue: #1e3a8a /* Azul corporativo principal */
  --primary-blue-light: #3b82f6 /* Azul claro para acentos */
  --primary-blue-dark: #1e40af /* Azul oscuro para textos */
  --accent-orange: #f97316 /* Para CTAs importantes */ --gray-50 a --gray-900
  /* Escala de grises industriales */;
```

## 🛠️ Desarrollo

### Prerrequisitos

- Node.js 18+
- npm

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

### Build para Producción

```bash
npm run build
npm start
```

## 📝 Contenido Editable

Todo el contenido del sitio está centralizado en archivos de configuración:

- **src/content/site.js**: Información general, navegación, estadísticas
- **src/content/services.js**: Servicios detallados con características y beneficios
- **src/content/projects.js**: Casos de éxito estructurados (problema → solución → resultados)
- **src/content/industries.js**: Sectores industriales atendidos

> Para editar el contenido **sin saber programar**, sigue la guía paso a paso en
> [`docs/EDITAR-CONTENIDO.md`](docs/EDITAR-CONTENIDO.md).

## 🎯 Funcionalidades Implementadas

### ✅ Completadas

- [x] Homepage completa con todas las secciones
- [x] Navegación responsive con menú móvil
- [x] Páginas de listado (Servicios, Proyectos, Acerca de, Contacto)
- [x] Componentes reutilizables
- [x] Sistema de colores corporativo
- [x] Estructura de CTAs a WhatsApp (falta el número real, ver "Bloqueante")
- [x] Metadata por página (excepto la home) y Open Graph básico
- [x] Responsive design

### 🔴 Bloqueante (antes de publicar)

- [ ] Reemplazar teléfono y WhatsApp reales en `src/content/site.js` — hoy son placeholders
      (`+56 9 XXXX XXXX`, `569XXXXXXXX`) y los enlaces `tel:`/`wa.me` no funcionan
- [ ] Crear las páginas de detalle `servicios/[slug]` y `proyectos/[slug]`, o desactivar los
      botones "Ver Detalles"/"Ver Caso": hoy enlazan a rutas inexistentes → **404**
- [ ] Conectar el formulario de contacto a un servicio real (Formspree/Netlify): hoy el `<form>`
      no tiene `action`/`onSubmit` y no envía nada
- [ ] Validar/autorizar clientes, cifras y testimonios de `src/content/projects.js` (datos de ejemplo)

### 🔄 Por Implementar

- [ ] Optimización de imágenes (`next/image`) y assets reales (logo, favicon, imagen Open Graph)
- [ ] `sitemap.js`, `robots.js` y metadata propia de la home
- [ ] Datos estructurados JSON-LD (Organization/LocalBusiness)
- [ ] Google Analytics
- [ ] ESLint + tests básicos

## 🚀 Despliegue

Este sitio está listo para desplegar en:

- **Vercel** (recomendado para Next.js)
- **Netlify**
- **Cualquier hosting estático**

Para Vercel:

```bash
npm install -g vercel
vercel --prod
```

## 🔧 Personalización

### Cambiar Información de Contacto

Edita `src/content/site.js`:

```javascript
export const siteConfig = {
  phone: "+56 9 XXXX XXXX",
  email: "contacto@popingenieria.cl",
  whatsapp: "569XXXXXXXX",
  // ...
};
```

> ⚠️ Esos son los valores **placeholder actuales** del proyecto. Reemplázalos por los reales
> antes de publicar: mientras tengan `XXXX`, los enlaces de teléfono y WhatsApp no funcionan.
> El `whatsapp` va sin `+`, sin espacios ni guiones (ej. `56912345678`).

### Agregar/Modificar Servicios

Edita `src/content/services.js` y agrega nuevos objetos al array `services`.

### Cambiar Colores

Modifica las variables CSS en `src/app/globals.css`:

```css
:root {
  --primary-blue: #tu-color;
  /* ... */
}
```

## 📧 Integración de Formularios

Para hacer funcional el formulario de contacto, integra con:

1. **Formspree** (recomendado)
2. **Netlify Forms**
3. **EmailJS**
4. **Backend personalizado**

## 🎯 SEO y Performance

Estado actual:

- Metadata por página (la **home** aún no tiene metadata propia)
- Open Graph básico en el layout (sin imagen `og:image` todavía)
- Estructura semántica HTML5, `lang="es"` y un único `<h1>` por página
- URLs amigables

Pendiente: metadata de la home, `sitemap.js`, `robots.js`, imagen Open Graph, JSON-LD
(Organization) y revisión de Core Web Vitals.

---

**Desarrollado para POP Ingeniería** - Especialistas en Control e Instrumentación Industrial
