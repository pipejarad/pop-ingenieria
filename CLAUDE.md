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
- **Tailwind v4** + **lucide-react** en **todo el sitio** (componentes de diseño en
  `src/components/site/`). Tokens en `globals.css` (`@theme` para las clases Tailwind +
  `:root` para `var()` heredado). Estilos base en `@layer base`.
- **next/font** (Inter), sin librerías de UI ni de estado
- **Resend** para el envío del formulario de contacto (vía Server Action)
- Despliegue: **Vercel** o Node — ya **no** estático puro (las Server Actions descartan
  `output: 'export'`). Configuración por entorno en `.env.example`.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo en http://localhost:3000
npm run build      # build de producción (genera páginas estáticas)
npm start          # servir el build
npm run lint       # ESLint (eslint-config-next)
```

Hay ESLint (`npm run lint`) y CI en GitHub Actions (`.github/workflows/ci.yml`: lint + build en cada push/PR). No hay `test` configurado (ver "Estado y pendientes").

## Estructura

```
src/
├── app/                      # App Router (cada carpeta = ruta)
│   ├── layout.js             # <html>/<body>, Header + Footer, metadata global y OpenGraph
│   ├── page.js               # Home — diseño NUEVO (Tailwind + lucide, usa components/site/, hero con imagen)
│   ├── sitemap.js            # sitemap.xml (rutas estáticas + servicios/[slug])
│   ├── robots.js             # robots.txt (apunta al sitemap)
│   ├── globals.css           # variables CSS (:root), reset, tipografía, media queries globales
│   ├── servicios/page.js     # listado de servicios
│   ├── servicios/[slug]/page.js  # detalle de cada servicio (SSG, generateStaticParams)
│   ├── proyectos/page.js     # lista simple de proyectos (sin detalle)
│   ├── acerca-de/page.js     # historia, misión/visión, proceso, valores
│   ├── contacto/page.js      # métodos de contacto; renderiza <ContactForm />
│   └── contacto/actions.js   # 'use server' — Server Action enviarContacto() (Resend)
├── components/
│   ├── ContactForm.jsx       # 'use client' — formulario de contacto (useActionState + Server Action, Tailwind)
│   └── site/                 # componentes de diseño (Tailwind + lucide): Header ('use client'),
│                             #    Footer, Container, Section (eyebrow/title/intro/bg), Button (variant/size/href), Card
│                             #    El layout usa site/Header y site/Footer (globales).
└── content/                  # ÚNICA fuente de datos del sitio
    ├── site.js               # siteConfig: nombre, contacto, stats, navigation
    ├── services.js           # services[] + featuredServices (los que tienen featured:true)
    ├── projects.js           # projects[] + featuredProjects
    └── industries.js         # industries[] + featuredIndustries
```

`public/` solo contiene los SVG de la plantilla (next.svg, vercel.svg, etc.); no hay assets
propios (logo, imágenes de proyectos, og-image). `src/app/favicon.ico` existe.

## Rutas

Reales (generadas por el build): `/`, `/servicios`, `/proyectos`, `/acerca-de`, `/contacto`,
y `/servicios/[slug]` (SSG: una página por servicio, vía `generateStaticParams`).

- **`servicios/[slug]`** (`src/app/servicios/[slug]/page.js`): detalle de cada servicio. Usa
  `getServiceBySlug(slug)` y `notFound()` si el slug no existe. Los botones "Ver Detalles" de la
  home/listado/footer apuntan aquí. `params` es asíncrono (Next 16): `const { slug } = await params`.
- **Proyectos NO tienen página de detalle:** son una **lista simple** (título + tecnologías). No
  existe `proyectos/[slug]` ni botones "Ver Caso" — es así a propósito (decisión del cliente, 2026-06).

## Modelo de datos (contratos)

`siteConfig` (`site.js`): `name`, `tagline`, `description`, `phone`, `email`, `address`,
`whatsapp`, `whatsappMessage`, `stats[]` (`{number,label,description}`), `navigation[]`
(`{name,href}`).

`services[]`: `id`, `title`, `description`, `shortDescription`, `icon` (emoji), `features[]`,
`benefits[]`, `technologies[]`, `applications[]`, `featured`. `featuredServices` = filtrados por
`featured`; `getServiceBySlug(slug)` busca un servicio por su id.

`projects[]` (**lista simple**): `id`, `title`, `technologies[]`, `featured`. `featuredProjects` =
filtrados por `featured`; `getProjectBySlug(slug)` existe como helper aunque no haya página de
detalle. Sin cliente/año/industria/métricas/caso de éxito (los 9 proyectos reales del cliente
solo traen título y, a veces, tecnologías).

`industries[]`: `id`, `name`, `description`, `icon` (emoji), `applications[]`, `featured`.

El enlace de WhatsApp se construye igual en varios componentes:
`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`.

## Convenciones

- **Alias de import**: `@/*` → `src/*` (ver `jsconfig.json`). Usa `@/components/...`, `@/content/...`.
- **Contenido centralizado**: para editar textos/datos, toca `src/content/*`, no los componentes.
- **Estilos**: **Tailwind v4** en todo el sitio, con los componentes de diseño en
  `src/components/site/` (`Section`, `Card`, `Button`, `Container`) y **lucide-react** para iconos.
  Clases de marca: `text-brand`/`bg-brand` (azul), `text-accent`/`bg-accent` (naranja CTA), escala
  `gray-*`. Tokens en `globals.css` (`@theme` + `:root`).
- **Server vs Client**: por defecto Server Components. Client components: `site/Header.jsx`
  (menú móvil, `useState`) y `ContactForm.jsx` (`useActionState`). Mantén la interactividad aislada.
- **Idioma**: todo el contenido y los textos de UI están en español (es_CL). `<html lang="es">`.

## Trampas / cosas a saber (gotchas)

- El formulario de contacto **ya funciona**: `ContactForm.jsx` (`'use client'`, `useActionState`)
  envía con la Server Action `contacto/actions.js`, que usa **Resend**. Necesita `RESEND_API_KEY`
  (ver `.env.example`); sin ella el action devuelve un error claro y no rompe. Incluye honeypot
  anti-spam y validación de servidor.
- Teléfono/WhatsApp **reales** en `site.js` (`+56943493458`); los enlaces `tel:` y `wa.me`
  funcionan. El `email` (`contacto@pop-ingenieria.cl`) y `address` (`Santiago, Chile`) siguen
  **a confirmar** con el cliente.
- `site/Button` con `href`: enlaces internos (empieza por `/`) usan `next/link`, externos `<a>`.
  Props: `variant` (`primary`=naranja, `secondary`=borde azul, `ghost`, `outline-light` para
  fondos azules) y `size` (`md`/`lg`).
- Las `stats` de `site.js` (200+, 50+, etc.) son cifras de marketing **a confirmar** con el
  cliente antes de publicar. (Las secciones de cifras inventadas de `proyectos/page.js` ya se
  eliminaron.)

## Estado y pendientes

El proyecto compila; las páginas principales y el detalle de servicio (`servicios/[slug]`)
funcionan. Para considerarlo "terminado/lanzable" falta, en orden de prioridad: (1) configurar
Resend en producción (`RESEND_API_KEY` + dominio verificado) y desplegar en Vercel; (2) JSON-LD
(Organization) y, cuando lleguen los assets del cliente, imágenes reales / `next/image` / og-image;
(3) tests (ESLint y CI lint+build ya configurados). Email y dirección de `site.js` están por
confirmar con el cliente.
Ya hecho: detalle de servicio, proyectos reales como lista simple, secciones inventadas eliminadas,
20 años, tecnologías y copy del cliente, formulario de contacto funcional (Server Action + Resend),
**SEO técnico básico (sitemap, robots, metadataBase, metadata de la home)**, ESLint, CI (GitHub Actions: lint + build) y el **teléfono/WhatsApp reales**.

Documentación del repo: `README.md` (uso/instalación/personalización para devs), `TODO.md`
(backlog; su sección "🔴 Bloqueante" lista lo que impide publicar) y
`docs/EDITAR-CONTENIDO.md` (guía no técnica para que el cliente edite `src/content/*`).
