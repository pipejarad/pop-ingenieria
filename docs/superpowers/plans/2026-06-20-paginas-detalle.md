# Páginas de detalle + correcciones del cliente — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aplicar las correcciones del cliente (proyectos reales, tecnologías, 20 años, copy) y construir la página de detalle de servicio `servicios/[slug]`, dejando los proyectos como lista simple sin detalle.

**Architecture:** Cambios de contenido en `src/content/*` y textos en las páginas; reestructuración de la UI de proyectos a lista simple (quitando los botones y campos que ya no existen); y una nueva ruta estática `servicios/[slug]` (Server Component con `generateStaticParams`).

**Tech Stack:** Next.js 16.1.6 (App Router), React 19, JavaScript, CSS Modules + estilos inline.

## Global Constraints

- **Next.js 16:** `params` asíncrono — `const { slug } = await params;` en `page` y `generateMetadata`.
- **Sin dependencias nuevas.** **Sin TypeScript.** Verificación por `npm run build` + `curl` (no hay runner de tests).
- **Estilado:** reutilizar `Section`/`Card`/`Button` + estilos inline con design tokens. No crear CSS Modules nuevos.
- **Proyectos = lista simple:** solo `id`, `title`, `technologies[]`, `featured`. Sin cliente/año/industria/métricas/testimonio. No inventar datos no provistos por el cliente.
- **Tecnologías de servicios:** aplicar literalmente las del cliente (incluido "ETH" en Control e Instrumentación, tal cual — confirmar su significado aparte; no bloquea).
- **Experiencia:** "20 años" / "20+" en todos los textos (reemplaza "15").
- **Idioma:** español neutro.

---

### Task 1: Actualizar contenido global (servicios, años, hero, tagline)

**Files:**
- Modify: `src/content/services.js` (campo `technologies` de los 6 servicios)
- Modify: `src/content/site.js` (stats)
- Modify: `src/app/page.js` (párrafo del hero)
- Modify: `src/app/servicios/page.js` (subtítulo del hero con tagline + 20 años)
- Modify: `src/app/acerca-de/page.js` (metadata y texto: 15 → 20)
- Modify: `src/components/Footer.jsx` (texto: 15 → 20)

- [ ] **Step 1: Actualizar `technologies` en `src/content/services.js`** (reemplazar el array de cada servicio)

| `id` | Nuevo `technologies` |
|---|---|
| `control-instrumentacion` | `["Foxboro", "Honeywell", "ETH", "ABB", "Siemens"]` |
| `variadores-velocidad` | `["ABB", "Rockwell", "Danfoss", "Schneider"]` |
| `reles-inteligentes` | `["Rockwell", "ABB", "Schneider", "AB"]` |
| `plc-dcs` | `["Foxboro IA", "Allen Bradley", "Schneider"]` |
| `integracion-sistemas` | `["Ethernet/IP", "Modbus TCP", "OPC"]` |
| `consultoria-asesoria` | `["Norma ISA", "IEC", "IEEE"]` |

- [ ] **Step 2: Actualizar la estadística de años en `src/content/site.js`**

En `stats[0]`, cambiar `number: "15+"` → `number: "20+"`.

- [ ] **Step 3: Reemplazar el párrafo del hero en `src/app/page.js`**

Buscar el `<p>` del hero (empieza con "Más de 15 años optimizando…") y reemplazar su texto por:

```
Con más de 20 años instalando, renovando y mejorando procesos industriales.
Soluciones integrales para la minería y la industria.
```

- [ ] **Step 4: Actualizar el subtítulo del hero en `src/app/servicios/page.js`**

Reemplazar el texto del `<p style={{ fontSize: "1.25rem" }}>` del hero por el tagline del cliente:

```
Soluciones de acuerdo con la complejidad del proceso y la simplicidad que nos
brinda la tecnología. Más de 20 años de experiencia en automatización industrial.
```

- [ ] **Step 5: Reemplazar "15" por "20" en `acerca-de` y `Footer`**

- `src/app/acerca-de/page.js`: metadata `description` ("Más de 15 años…" → "Más de 20 años…") y el texto de "Nuestra Historia" ("Con más de 15 años de experiencia…" → "Con más de 20 años…").
- `src/components/Footer.jsx`: el párrafo de marca ("con más de 15 años de experiencia" → "con más de 20 años de experiencia").

- [ ] **Step 6: Build y verificar que no queden "15 años" / "15+"**

```bash
npm run build
grep -rn "15 años\|15+ \|15 años de experiencia" src/ || echo "OK: sin referencias a 15 años"
```
Expected: build 0 errores; el `grep` no encuentra referencias (o imprime "OK").

- [ ] **Step 7: Commit**

```bash
git add src/content/services.js src/content/site.js src/app/page.js src/app/servicios/page.js src/app/acerca-de/page.js src/components/Footer.jsx
git commit -m "content: tecnologías reales, 20 años de experiencia, copy del cliente"
```

---

### Task 2: Proyectos reales como lista simple

**Files:**
- Modify: `src/content/projects.js` (reemplazar el array completo)
- Modify: `src/app/proyectos/page.js` (tarjetas → lista simple; quitar botón de detalle)
- Modify: `src/app/page.js` (sección "Proyectos Destacados" → lista simple; quitar botón)

**Interfaces:**
- Produces: nueva forma de `projects[]` = `{ id, title, technologies[], featured }`. `featuredProjects` se mantiene (filtra por `featured`).
- Nota: home y `proyectos/page.js` deben dejar de leer `year/client/industry/duration/summary/tags/results` (ya no existen).

- [ ] **Step 1: Reemplazar el contenido de `src/content/projects.js`**

```js
// Proyectos reales (lista simple). No tienen caso de éxito estructurado.
export const projects = [
  {
    id: "forestal-santa-fe",
    title: "Puesta en marcha Forestal Sta. Fe",
    technologies: ["DCS Honeywell", "PLC Allen-Bradley"],
    featured: true,
  },
  {
    id: "expansion-los-bronces",
    title: "Puesta en servicio — Expansión Los Bronces",
    technologies: [],
    featured: true,
  },
  {
    id: "fd-gd-los-bronces",
    title: "Puesta en marcha — FD y GD Los Bronces",
    technologies: [],
    featured: false,
  },
  {
    id: "planta-moly-lt1",
    title: "Puesta en servicio — Planta de Moly LT1",
    technologies: [],
    featured: false,
  },
  {
    id: "pdlb",
    title: "Puesta en marcha — Proyecto PDLB",
    technologies: [],
    featured: false,
  },
  {
    id: "actualizacion-plc-controllogix",
    title:
      "Actualización de PLC-3 y PLC-5 a ControlLogix L81 (planta de cobre y Moly LT1)",
    technologies: ["Allen-Bradley", "ControlLogix L81"],
    featured: true,
  },
  {
    id: "agua-salada-cerro-dominador",
    title:
      "Configuración y puesta en marcha — Planta de Abastecimiento Agua Salada (Cerro Dominador)",
    technologies: [],
    featured: false,
  },
  {
    id: "profibus-cerro-dominador",
    title: "Mejoras de comunicación Profibus — Cerro Dominador",
    technologies: ["Profibus"],
    featured: false,
  },
  {
    id: "actualizacion-reles-e300",
    title: "Actualización de relés térmicos y E3 Plus a relés E300 en Ethernet/IP",
    technologies: ["Relés E300", "Ethernet/IP"],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
```

- [ ] **Step 2: Reescribir las tarjetas de `src/app/proyectos/page.js` a lista simple**

Sustituir el `.map` de proyectos por tarjetas simples (título + tecnologías como tags, sin botón de detalle ni campos inexistentes):

```jsx
{projects.map((project) => (
  <Card key={project.id} variant="project">
    <Card.Header>
      <Card.Title>{project.title}</Card.Title>
    </Card.Header>
    {project.technologies.length > 0 && (
      <Card.Body>
        <Card.Tags tags={project.technologies} />
      </Card.Body>
    )}
  </Card>
))}
```

Bajar `minmax` del grid a `minmax(300px, 1fr)` (tarjetas más compactas). **No** importar `Button` si deja de usarse en el archivo.

> **Pendiente señalado (no se toca en esta tarea):** las secciones "Impacto de Nuestros Proyectos"
> (cifras +25%/40%/99%/18) e "Industrias Atendidas" (contadores por industria) de
> `proyectos/page.js` siguen con datos genéricos/inventados. Decidir con el cliente si se ajustan o
> eliminan en una entrega posterior.

- [ ] **Step 3: Reescribir "Proyectos Destacados" en `src/app/page.js` a lista simple**

Sustituir el `.map` de `featuredProjects` por la misma forma simple (título + tecnologías), quitando el botón "Ver Caso de Éxito" y los campos `year/client/industry/duration/summary/tags`:

```jsx
{featuredProjects.map((project) => (
  <Card key={project.id} variant="project">
    <Card.Header>
      <Card.Title>{project.title}</Card.Title>
    </Card.Header>
    {project.technologies.length > 0 && (
      <Card.Body>
        <Card.Tags tags={project.technologies} />
      </Card.Body>
    )}
  </Card>
))}
```

Mantener el botón "Ver Todos los Proyectos" hacia `/proyectos`.

- [ ] **Step 4: Build y verificar que no quedan enlaces a `/proyectos/{id}`**

```bash
npm run build
grep -rn "proyectos/\${" src/ || echo "OK: sin enlaces a detalle de proyecto"
```
Expected: build 0 errores; el `grep` no encuentra enlaces (o imprime "OK"). La tabla de rutas **no** debe incluir `/proyectos/[slug]`.

- [ ] **Step 5: Commit**

```bash
git add src/content/projects.js src/app/proyectos/page.js src/app/page.js
git commit -m "content: proyectos reales como lista simple; quitar páginas de detalle de proyecto"
```

---

### Task 3: Página de detalle de servicio (`servicios/[slug]`)

**Files:**
- Modify: `src/content/services.js` (añadir helper al final)
- Create: `src/app/servicios/[slug]/page.js`

**Interfaces:**
- Produces: `getServiceBySlug(slug)` en `@/content/services`.
- Consumes: `services`, `Section`/`Card`/`Button`, `siteConfig`.

- [ ] **Step 1: Añadir `getServiceBySlug` a `src/content/services.js`** (tras `featuredServices`)

```js
// Buscar un servicio por su id (para la ruta /servicios/[slug])
export function getServiceBySlug(slug) {
  return services.find((service) => service.id === slug);
}
```

- [ ] **Step 2: Crear `src/app/servicios/[slug]/page.js`**

```jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { services, getServiceBySlug } from "@/content/services";
import { siteConfig } from "@/content/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServicioDetallePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.id !== service.id);
  const ctaWhatsAppLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <main>
      {/* Breadcrumb + Hero */}
      <Section background="gray">
        <nav style={{ fontSize: "0.875rem", color: "var(--gray-500)", marginBottom: "1.5rem" }}>
          <Link href="/">Inicio</Link> / <Link href="/servicios">Servicios</Link> /{" "}
          <span style={{ color: "var(--gray-700)" }}>{service.title}</span>
        </nav>
        <div style={{ maxWidth: "800px" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }} aria-hidden="true">
            {service.icon}
          </div>
          <h1>{service.title}</h1>
          <p style={{ fontSize: "1.25rem", color: "var(--gray-600)" }}>{service.description}</p>
        </div>
      </Section>

      {/* Características y Beneficios */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>
          <div>
            <h2>Características</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {service.features.map((feature, index) => (
                <li key={index} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", color: "var(--gray-700)" }}>
                  <span style={{ color: "var(--primary-blue)" }} aria-hidden="true">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Beneficios</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {service.benefits.map((benefit, index) => (
                <li key={index} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", color: "var(--gray-700)" }}>
                  <span style={{ color: "var(--success-green)" }} aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Tecnologías y Aplicaciones */}
      <Section background="gray">
        <h2 style={{ marginBottom: "1.5rem" }}>Tecnologías y Aplicaciones</h2>
        <div style={{ marginBottom: "1.5rem" }}>
          <Card.Tags tags={service.technologies} />
        </div>
        <p style={{ color: "var(--gray-600)" }}>
          <strong style={{ color: "var(--gray-700)" }}>Aplicaciones:</strong>{" "}
          {service.applications.join(" · ")}
        </p>
      </Section>

      {/* Otros servicios */}
      <Section>
        <h2 style={{ marginBottom: "1.5rem" }}>Otros servicios</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {otherServices.map((s) => (
            <Link key={s.id} href={`/servicios/${s.id}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", border: "1px solid var(--gray-200)", borderRadius: "0.5rem" }}>
              <span aria-hidden="true">{s.icon}</span> {s.title}
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ color: "var(--white)" }}>¿Le interesa este servicio?</h2>
          <p style={{ fontSize: "1.125rem", marginBottom: "2rem", opacity: 0.95 }}>
            Conversemos sobre cómo aplicarlo a su proceso.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="accent" size="large" href={ctaWhatsAppLink} target="_blank" rel="noopener noreferrer">
              📱 Cotizar Proyecto
            </Button>
            <Button variant="secondary" size="large" href="/contacto">
              📧 Contacto
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
```

- [ ] **Step 3: Build y verificar la ruta**

Run: `npm run build`
Expected: 0 errores; aparece `/servicios/[slug]` con los 6 servicios prerenderizados.

- [ ] **Step 4: Verificar render real y 404 con curl**

```bash
PORT=3100 npm start &
SERVER_PID=$!
sleep 4
curl -s -o /tmp/serv.html -w "HTTP %{http_code}\n" http://localhost:3100/servicios/control-instrumentacion
grep -c "Foxboro" /tmp/serv.html
curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:3100/servicios/no-existe
kill $SERVER_PID
```
Expected: primer `HTTP 200` con `grep ≥ 1` (las tecnologías nuevas se renderizan); segundo `HTTP 404`.

- [ ] **Step 5: Commit**

```bash
git add src/content/services.js "src/app/servicios/[slug]/page.js"
git commit -m "feat: página de detalle de servicio (servicios/[slug])"
```

---

## Verificación final

- [ ] `npm run build` → 0 errores; rutas incluyen `/servicios/[slug]` (6 prerenderizadas) y **no** `/proyectos/[slug]`.
- [ ] `npm run dev` → la home muestra "20 años" y el nuevo hero; los proyectos se ven como lista simple sin botón de detalle; un servicio abre su página de detalle con las tecnologías reales; los botones "Ver Detalles" de servicios funcionan.

## Pendientes señalados (fuera de esta entrega)
- Datos de contacto (teléfono/WhatsApp) siguen placeholder — el cliente aún no los envió.
- Secciones "Impacto" e "Industrias Atendidas" de `proyectos/page.js` con cifras genéricas — revisar con el cliente.
- Notación a confirmar: "ETH" (Control e Instrumentación) y duplicado Rockwell/AB (Protección).
- Mejora M1 (`Button` → `next/link` interno) sigue fuera de alcance.
