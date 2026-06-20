# CLAUDE.md — POP Ingeniería (sitio web corporativo)

Guía para trabajar en este repositorio. Mantén este archivo sincronizado cuando cambie la
estructura, las rutas, los contratos de datos o las convenciones.

## Qué es

Sitio web corporativo **estático** de **POP Ingeniería**, empresa chilena de automatización
industrial (control e instrumentación, PLC/DCS, variadores, relés inteligentes). Es un sitio
de marketing/captación: presenta servicios, casos de éxito (proyectos), industrias atendidas
y canales de contacto (WhatsApp / email / formulario). No hay backend ni base de datos: todo
el contenido vive en archivos JS bajo `src/content/`.

## Stack

- **Next.js 16.1.6** (App Router, build con Turbopack)
- **React 19.2.3**
- **JavaScript puro** (sin TypeScript)
- **CSS Modules** + un `globals.css` con variables CSS de diseño
- **next/font** (Inter), sin librerías de UI ni de estado
- Despliegue previsto: Vercel / Netlify / hosting estático

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo en http://localhost:3000
npm run build      # build de producción (genera páginas estáticas)
npm start          # servir el build
```

No hay `lint`, `test` ni CI configurados (ver "Estado y pendientes").

## Estructura

```
src/
├── app/                      # App Router (cada carpeta = ruta)
│   ├── layout.js             # <html>/<body>, Header + Footer, metadata global y OpenGraph
│   ├── page.js               # Home (hero, stats, servicios/industrias/proyectos destacados, CTAs)
│   ├── globals.css           # variables CSS (:root), reset, tipografía, media queries globales
│   ├── page.module.css       # ⚠️ HUÉRFANO: plantilla de create-next-app, NO se usa
│   ├── servicios/page.js     # listado completo de servicios
│   ├── proyectos/page.js     # listado completo de proyectos (casos de éxito)
│   ├── acerca-de/page.js     # historia, misión/visión, proceso, valores
│   └── contacto/page.js      # métodos de contacto + formulario (NO funcional, ver abajo)
├── components/               # componentes reutilizables (cada uno con su .module.css)
│   ├── Header.jsx            # 'use client' — nav + menú móvil (useState, usePathname)
│   ├── Footer.jsx            # server component — usa new Date() para el año
│   ├── Container.jsx         # wrapper de ancho máximo (maxWidth: default|narrow|wide|fluid)
│   ├── Section.jsx           # <section> + Container (spacing y background configurables)
│   ├── Card.jsx              # Card compuesto: Card.Header/Body/Title/Description/Icon/Actions/Tags
│   └── Button.jsx            # botón polimórfico: con `href` renderiza <a>, si no <button>
└── content/                  # ÚNICA fuente de datos del sitio
    ├── site.js               # siteConfig: nombre, contacto, stats, navigation
    ├── services.js           # services[] + featuredServices (los que tienen featured:true)
    ├── projects.js           # projects[] + featuredProjects
    └── industries.js         # industries[] + featuredIndustries
```

`public/` solo contiene los SVG de la plantilla (next.svg, vercel.svg, etc.); no hay assets
propios (logo, imágenes de proyectos, og-image). `src/app/favicon.ico` existe.

## Rutas

Reales (generadas por el build): `/`, `/servicios`, `/proyectos`, `/acerca-de`, `/contacto`.

⚠️ **Rutas dinámicas referenciadas pero INEXISTENTES** (dan 404): el código enlaza a
`/servicios/{service.id}` y `/proyectos/{project.id}` desde varios sitios (home, footer,
listados), pero **no existen** `src/app/servicios/[slug]/page.js` ni
`src/app/proyectos/[slug]/page.js`. Hasta crearlas, todos los botones "Ver Detalles" /
"Ver Caso Completo" están rotos. Los datos de detalle (features, benefits, problem/solution/
results, testimonial) ya existen en `content/`, listos para alimentar esas páginas.

## Modelo de datos (contratos)

`siteConfig` (`site.js`): `name`, `tagline`, `description`, `phone`, `email`, `address`,
`whatsapp`, `whatsappMessage`, `stats[]` (`{number,label,description}`), `navigation[]`
(`{name,href}`).

`services[]`: `id`, `title`, `description`, `shortDescription`, `icon` (emoji), `features[]`,
`benefits[]`, `technologies[]`, `applications[]`, `featured`. `featuredServices` = filtrados por
`featured`.

`projects[]`: `id`, `title`, `summary`, `industry`, `client`, `duration`, `year`, `image`
(rutas a `/images/projects/*.jpg` que **no existen** en `public/`), `technologies[]`,
`problem{}`, `solution{}` (con `timeline[]` en algunos), `results{}` (`metrics[]` con
before/after/improvement), `testimonial{}` (opcional), `featured`, `tags[]`.

`industries[]`: `id`, `name`, `description`, `icon` (emoji), `applications[]`, `featured`.

El enlace de WhatsApp se construye igual en varios componentes:
`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`.

## Convenciones

- **Alias de import**: `@/*` → `src/*` (ver `jsconfig.json`). Usa `@/components/...`, `@/content/...`.
- **Contenido centralizado**: para editar textos/datos, toca `src/content/*`, no los componentes.
- **Estilos**: los componentes usan CSS Modules; **las páginas (`app/**/page.js`) usan estilos
  inline** intensivamente (patrón actual, inconsistente pero deliberado). Los design tokens viven
  como variables CSS en `globals.css` (`--primary-blue`, `--accent-orange`, `--gray-50..900`,
  `--white`, etc.) y se referencian con `var(--token)`.
- **Server vs Client**: por defecto Server Components. Solo `Header.jsx` es `'use client'`
  (usa `useState`/`usePathname`). Mantén la interactividad aislada en componentes cliente.
- **Idioma**: todo el contenido y los textos de UI están en español (es_CL). `<html lang="es">`.

## Trampas / cosas a saber (gotchas)

- `page.module.css` es plantilla muerta: no lo edites esperando que afecte la home.
- El formulario de `contacto/page.js` **no envía nada**: es un `<form>` sin `action`/`onSubmit`
  en una página Server Component. Al pulsar "Enviar" se recarga la página. Falta integrar
  (Formspree/Netlify Forms/EmailJS/backend) y probablemente convertir a client component.
- Datos de contacto en `site.js` son **placeholders** (`phone: "+56 9 XXXX XXXX"`,
  `whatsapp: "569XXXXXXXX"`): los enlaces `tel:` y `wa.me` no funcionan hasta reemplazarlos.
- `Button.jsx`: cuando recibe `href` renderiza un `<a>` nativo (no `next/link`), perdiendo la
  navegación SPA/prefetch en enlaces internos. Además hace `<a className={classes} {...props}>`,
  por lo que si el padre pasa `className` (lo hace `Header` con `styles.ctaButton`) el spread
  **sobrescribe** las clases de variante/tamaño.
- `layout.js` define `--font-inter` vía `next/font` pero `globals.css` aplica
  `font-family: 'Inter', ...` por nombre literal en vez de `var(--font-inter)`: revisar que la
  fuente self-hosted se aplique realmente.
- Clientes, cifras y testimonios en `projects.js`/`site.js` parecen **datos de ejemplo**:
  validar antes de publicar.

## Estado y pendientes

El proyecto compila y las 5 páginas principales funcionan. Para considerarlo "terminado/lanzable"
falta, en orden de prioridad: (1) reemplazar los placeholders de contacto; (2) crear las rutas
dinámicas `[slug]` de servicios y proyectos; (3) hacer funcional el formulario de contacto;
(4) añadir imágenes reales / `next/image` / og-image; (5) SEO técnico (sitemap, robots,
metadataBase, JSON-LD); (6) tooling (ESLint, tests).

Documentación del repo: `README.md` (uso/instalación/personalización para devs), `TODO.md`
(backlog; su sección "🔴 Bloqueante" lista lo que impide publicar) y
`docs/EDITAR-CONTENIDO.md` (guía no técnica para que el cliente edite `src/content/*`).
