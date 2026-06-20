# Diseño: Páginas de detalle de servicios y proyectos (`[slug]`)

**Fecha:** 2026-06-20
**Estado:** Actualizado el 2026-06-20 por correcciones del cliente (ver sección siguiente).

## Actualización de alcance — 2026-06-20 (correcciones del cliente)

Tras recibir `correcciones_pag_web_pop_2026.md` y dos decisiones del responsable:

- **Proyectos = lista simple, sin página de detalle.** Se **descarta `proyectos/[slug]`**. Los 4
  proyectos de ejemplo se reemplazan por los **9 reales** del cliente, mostrados solo con título
  y las tecnologías mencionadas (sin cliente/año/industria/métricas/testimonio). Se **quitan los
  botones** "Ver Caso Completo"/"Ver Caso de Éxito" → esto elimina los 404 de proyectos sin crear
  rutas. **La sección 6 de este spec queda anulada.**
- **Servicios:** se mantiene `servicios/[slug]` (sección 5, sin cambios). Se actualizan las
  `technologies` de los 6 servicios con las marcas reales del cliente.
- **Contenido global:** experiencia **15 → 20 años**; nuevo copy del hero ("…20 años… Soluciones
  integrales para la minería y la industria"); tagline de servicios ("Soluciones de acuerdo con la
  complejidad del proceso y la simplicidad que nos brinda la tecnología").
- **Industrias:** se mantienen las 8 (no se reenfoca solo a minería).

El detalle de implementación vive en `docs/superpowers/plans/2026-06-20-paginas-detalle.md`.

## 1. Contexto y problema

El sitio enlaza a rutas de detalle `/servicios/{id}` y `/proyectos/{id}` desde la home
(`page.js:179,307`), los listados (`servicios/page.js:83`, `proyectos/page.js:156`) y el Footer
(`Footer.jsx:58`), pero **esas rutas no existen**: el build solo genera 5 páginas + `_not-found`.
Hoy cada clic en "Ver Detalles" / "Ver Caso Completo" / "Ver Caso de Éxito" produce un **404**.

Los datos para esas páginas **ya existen y son ricos** en `src/content/services.js` y
`src/content/projects.js` (incluyen el caso de éxito estructurado problema → solución →
resultados, métricas y testimonios). Solo falta construir las páginas que los consumen.

## 2. Objetivo

Crear dos rutas dinámicas estáticas que rendericen el detalle de cada servicio y cada proyecto,
eliminando los 404 y aprovechando los datos existentes, con coherencia visual con el resto del
sitio.

### Criterios de éxito
- `npm run build` genera una página estática por cada servicio (6) y proyecto (4), sin errores.
- Los botones "Ver Detalles" / "Ver Caso Completo" navegan a contenido real (ya no 404).
- Un slug inexistente (p. ej. `/servicios/no-existe`) responde con la página 404 (`notFound()`).
- Cada página de detalle tiene su propio `<title>` y `description` (SEO).

## 3. Alcance

**Incluye:** las dos páginas `[slug]`, sus helpers de datos, `generateStaticParams`,
`generateMetadata`, manejo de `notFound`, y el banner placeholder de proyecto.

**No incluye (anotado, intencional):**
- Cambiar `Button` para usar `next/link` en enlaces internos (mejora M1, separada). La
  navegación a estas páginas funcionará, pero con recarga completa de página.
- Imágenes reales de proyecto (se usa placeholder; las fotos se añadirán después a
  `public/images/projects/`).
- Tests automatizados (el proyecto no tiene runner; la verificación es build + revisión visual).

## 4. Arquitectura de rutas

Dos archivos nuevos, ambos **Server Components** con prerenderizado estático:

```
src/app/servicios/[slug]/page.js
src/app/proyectos/[slug]/page.js
```

Cada uno exporta:

- `generateStaticParams()` → lista de `{ slug }` para prerenderizar todas las páginas en build.
  - Servicios: `services.map((s) => ({ slug: s.id }))`
  - Proyectos: `projects.map((p) => ({ slug: p.id }))`
- `generateMetadata({ params })` → `title` y `description` por ítem.
- Componente `page` por defecto que recibe `params`, busca el ítem y llama `notFound()` si no existe.

> **Next.js 16:** `params` es asíncrono. En ambos `page` y `generateMetadata` se debe usar
> `const { slug } = await params;`.

### Helpers de datos

Para no duplicar la lógica de búsqueda en las páginas, se añaden a los archivos de contenido:

```js
// en src/content/services.js
export function getServiceBySlug(slug) {
  return services.find((s) => s.id === slug);
}

// en src/content/projects.js
export function getProjectBySlug(slug) {
  return projects.find((p) => p.id === slug);
}
```

## 5. Página de servicio — `servicios/[slug]/page.js`

**Datos usados:** `title`, `description`, `icon`, `features[]`, `benefits[]`,
`technologies[]`, `applications[]`. (`shortDescription` y `featured` no se usan aquí.)

**Estructura (de arriba a abajo), reutilizando `Section` / `Container` / `Card` / `Button`:**

1. **Breadcrumb**: `Inicio / Servicios / {title}` (enlaces `next/link` a `/` y `/servicios`;
   el actual como texto). Va dentro de la primera `Section`.
2. **Hero** (`Section background="gray"`): `icon` grande, `<h1>{title}</h1>`, `description`.
3. **Características y Beneficios** (`Section`): dos columnas en grid responsivo
   (`repeat(auto-fit, minmax(280px, 1fr))`), cada una con su `<h2>` y una lista de ítems
   (`features[]` / `benefits[]`) con viñeta de check.
4. **Tecnologías y Aplicaciones** (`Section background="gray"`): `technologies[]` como tags
   (reutilizar `Card.Tags` o `<span>` con estilo de etiqueta) y `applications[]` como lista
   separada por `·`.
5. **Otros servicios** (`Section`): enlaces al resto de servicios (todos menos el actual),
   como fila de enlaces a `/servicios/{id}`. Mejora navegación interna.
6. **CTA final** (`Section background="primary"`): botón WhatsApp (`accent`) + botón a
   `/contacto`, idéntico patrón al resto del sitio.

**`generateMetadata`:**
- `title: service.title` (el template del layout añade `| POP Ingeniería`).
- `description: service.description` (la descripción larga, más informativa para SEO).

## 6. Página de proyecto — `proyectos/[slug]/page.js`

**Datos usados:** `title`, `summary`, `industry`, `client`, `duration`, `year`,
`technologies[]`, `problem{description, impacts[]}`, `solution{description, approach[],
timeline[]?}`, `results{description, metrics[]{metric, before, after, improvement}, benefits[]?}`,
`testimonial{text, author, position, company}?`. Los campos `problem.title`, `solution.title`,
`results.title` ("El Desafío" / "La Solución" / "Los Resultados") se usan como títulos de sección.

> **Renderizado condicional:** `solution.timeline`, `results.benefits` y `testimonial` solo
> existen en algunos proyectos (p. ej. solo `modernizacion-dcs-refineria` tiene los tres). Cada
> bloque se renderiza únicamente si su dato existe.

**Estructura:**

1. **Breadcrumb**: `Inicio / Proyectos / {title}`.
2. **Banner placeholder** (`Section`): caja con gradiente azul corporativo
   (`linear-gradient(135deg, var(--primary-blue), var(--primary-blue-light))`) que muestra el
   emoji de la industria + el nombre de la industria. El emoji se obtiene cruzando
   `project.industry` con `industries.js`:
   `industries.find((i) => i.name === project.industry)?.icon ?? '🏭'`.
   (Verificado: los cuatro valores de `industry` coinciden exactamente con un `name` de
   `industries.js`.)
3. **Cabecera**: `<h1>{title}</h1>`, línea meta `Cliente: {client} · {year} · {duration}`,
   `summary` como subtítulo, y `technologies[]` como tags.
4. **El Desafío** (`problem`): `description` + lista de `impacts[]`.
5. **La Solución** (`solution`): `description` + `approach[]` como lista numerada; si existe
   `timeline[]`, mostrar las fases (`{phase} — {duration}`) como pasos horizontales/verticales.
6. **Los Resultados** (`results`): `description` + grid/tabla de `metrics[]` con columnas
   Indicador / Antes / Después / **Mejora** (mejora destacada en azul); si existe `benefits[]`,
   listarlos debajo.
7. **Testimonio** (si existe): bloque destacado con `text` entrecomillado y
   `— {author}, {position}, {company}`.
8. **CTA final** (`Section background="primary"`): WhatsApp + `/contacto`.

**`generateMetadata`:**
- `title: project.title`.
- `description: project.summary`.

## 7. Manejo de errores

- Si `getServiceBySlug` / `getProjectBySlug` devuelve `undefined`, la página llama
  `notFound()` (de `next/navigation`), que renderiza el 404 por defecto de Next (ya presente
  como `_not-found` en el build). No se crea un `not-found.js` personalizado (YAGNI).

## 8. Estilado y coherencia

Se sigue el patrón vigente del sitio: composición con `Section`/`Container`/`Card`/`Button`
más estilos inline (`style={{...}}`) para el layout específico, igual que las 5 páginas
actuales. No se introducen CSS Modules nuevos en esta entrega, para no crear un tercer patrón
de estilado y mantener la consistencia. Se usan los design tokens existentes (`var(--primary-blue)`,
`var(--gray-*)`, etc.).

## 9. Verificación

1. `npm run build` → confirma rutas nuevas estáticas (10 páginas de detalle: 6 servicios +
   4 proyectos) y **0 errores**.
2. `npm run dev` → revisión visual de: un servicio, un proyecto con todos los bloques
   (`modernizacion-dcs-refineria`), un proyecto sin timeline/testimonial/benefits
   (p. ej. `linea-envasado-inteligente`), y un slug inválido (debe dar 404).
3. Confirmar que los botones de los listados y la home ya navegan correctamente.

## 10. Riesgos y consideraciones

- **`params` asíncrono (Next 16):** olvidarlo causa error en build/runtime. Mitigado en el diseño.
- **Coincidencia industria↔emoji:** depende de que `project.industry` siga coincidiendo con un
  `name` de `industries.js`. Se incluye fallback `🏭`. Si en el futuro divergen, el fallback
  evita romper la página.
- **Navegación con recarga:** mientras `Button` use `<a>` nativo, ir a estas páginas recarga
  toda la página. Es aceptable; la mejora a `next/link` queda fuera de alcance (M1).
