# Guía para editar el contenido del sitio

Esta guía está pensada para **editar los textos y datos del sitio sin saber programar**.
Todo el contenido editable (servicios, proyectos, datos de contacto, etc.) vive en cuatro
archivos dentro de la carpeta `src/content/`. No necesitas tocar nada más.

> Si algo no te queda claro o el sitio deja de funcionar después de un cambio, deshaz tu
> última edición y pide ayuda. Es normal: la causa casi siempre es una coma o una comilla.

---

## Reglas de oro (léelas una vez)

Los archivos terminan en `.js`. Son sensibles a la puntuación. Respeta siempre esto:

1. **El texto va entre comillas.** Por ejemplo: `title: "Control de Procesos"`. Cambia solo lo
   que está **dentro** de las comillas, nunca las comillas mismas.
2. **Cada línea termina en coma** (`,`). No la borres.
3. **No borres las llaves `{ }` ni los corchetes `[ ]`.** Marcan dónde empieza y termina cada bloque.
4. **Si tu texto lleva comillas dobles**, escríbelo con comillas simples por fuera:
   `'Proyecto "Fénix" de la planta'`. O evita las comillas dentro del texto.
5. **Las tildes y la ñ se pueden usar con normalidad** (José, instalación, diseño).
6. **Guarda el archivo y revisa el sitio** (ver "Cómo ver y publicar los cambios" al final).

Si copias y pegas un bloque de ejemplo de esta guía y solo cambias los textos, no te
equivocarás con la puntuación.

---

## 1. Datos de contacto, estadísticas y menú — `src/content/site.js`

Aquí está la información general de la empresa.

### Cambiar teléfono, WhatsApp, email y dirección

Busca este bloque al inicio del archivo y reemplaza los valores entre comillas:

```js
phone: "+56 9 XXXX XXXX",
email: "contacto@popingenieria.cl",
address: "Santiago, Chile",
whatsapp: "569XXXXXXXX",
```

- **`phone`**: el número de teléfono que se muestra en el sitio. Pon el número real,
  por ejemplo `"+56 9 1234 5678"`.
- **`whatsapp`**: el número de WhatsApp para el botón "Cotizar". ⚠️ Va **sin el signo `+`,
  sin espacios y sin guiones**: solo dígitos. Para Chile es el código de país `56`, luego `9`,
  luego los 8 dígitos. Ejemplo real: `"56912345678"`.
- **`email`** y **`address`**: el correo y la ciudad/dirección que aparecen en el pie de página.

> 🔴 **Importante:** los valores que vienen hoy (`+56 9 XXXX XXXX` y `569XXXXXXXX`) son de
> ejemplo. **Mientras tengan las `X`, el botón de WhatsApp y el de llamar no funcionan.**
> Reemplázalos por los números reales antes de mostrar el sitio a clientes.

### Cambiar el mensaje predeterminado de WhatsApp

```js
whatsappMessage:
  "Hola, me interesa conocer más sobre sus servicios de automatización industrial",
```

Es el texto que aparece escrito automáticamente cuando alguien abre el WhatsApp desde el sitio.

### Cambiar las estadísticas de la portada

Son los números grandes de la página principal ("15+ años", "200+ proyectos", etc.):

```js
stats: [
  {
    number: "15+",
    label: "Años de experiencia",
    description: "Trayectoria sólida en automatización",
  },
  // ...los demás bloques siguen el mismo formato
],
```

Cambia `number`, `label` y `description` de cada bloque. Para **añadir** otra estadística,
copia un bloque completo `{ ... },` (con su coma final) y pégalo dentro de los corchetes.

### Cambiar el menú de navegación

```js
navigation: [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
  // ...
],
```

`name` es lo que se ve en el menú; `href` es la dirección de la página. **No cambies los
`href`** salvo que se cree una página nueva: deben coincidir con las páginas que existen.

---

## 2. Servicios — `src/content/services.js`

Cada servicio es un bloque `{ ... }`. Para **editar** uno, cambia los textos entre comillas.
Para **añadir** uno nuevo, copia este bloque completo y pégalo dentro de los corchetes,
respetando la coma final:

```js
{
  id: "nombre-corto-sin-espacios",
  title: "Nombre del Servicio",
  description: "Descripción larga que aparece en la página de servicios.",
  shortDescription: "Descripción corta para la portada.",
  icon: "⚙️",
  features: [
    "Característica 1",
    "Característica 2",
  ],
  benefits: [
    "Beneficio 1",
    "Beneficio 2",
  ],
  technologies: ["Marca1", "Marca2", "Marca3"],
  applications: ["Aplicación 1", "Aplicación 2"],
  featured: true,
},
```

Qué significa cada campo:

- **`id`**: un identificador único, en minúsculas y con guiones en lugar de espacios
  (ej. `control-instrumentacion`). No uses tildes, ñ ni espacios. Debe ser distinto al de los
  demás servicios.
- **`icon`**: un emoji que representa el servicio (⚙️ 🔌 🛡️ 💻 🔗 🎯). Puedes copiarlo desde
  cualquier teclado de emojis.
- **`technologies`** y **`applications`**: listas de palabras cortas, cada una entre comillas y
  separadas por comas.
- **`featured`**: ponlo en `true` para que el servicio **aparezca destacado en la portada**, o
  en `false` para que solo salga en la página de Servicios. (No lleva comillas: es `true` o `false`.)

Para **quitar** un servicio, borra su bloque `{ ... }` completo, incluida la coma final.

---

## 3. Proyectos / casos de éxito — `src/content/projects.js`

Cada proyecto es un bloque más grande, porque incluye el caso de éxito estructurado
(desafío → solución → resultados). Plantilla para añadir uno nuevo:

```js
{
  id: "nombre-corto-sin-espacios",
  title: "Título del Proyecto",
  summary: "Resumen de una línea.",
  industry: "Minería",
  client: "Nombre del Cliente",
  duration: "12 meses",
  year: "2024",
  image: "/images/projects/nombre-imagen.jpg",
  technologies: ["Tecnología 1", "Tecnología 2"],

  problem: {
    title: "El Desafío",
    description: "Qué problema tenía el cliente.",
    impacts: [
      "Consecuencia 1",
      "Consecuencia 2",
    ],
  },

  solution: {
    title: "La Solución",
    description: "Qué se hizo.",
    approach: [
      "Paso 1",
      "Paso 2",
    ],
  },

  results: {
    title: "Los Resultados",
    description: "Qué se logró.",
    metrics: [
      { metric: "Indicador", before: "85%", after: "99%", improvement: "+14%" },
    ],
  },

  featured: true,
  tags: ["Etiqueta1", "Etiqueta2"],
},
```

Notas:

- **`client`**: usa solo nombres de clientes **reales y autorizados** a aparecer. Si no tienes
  autorización, usa una descripción genérica (ej. `"Minera de cobre, Región de Antofagasta"`).
- **`image`**: la ruta a una foto del proyecto. La imagen debe existir dentro de la carpeta
  `public/images/projects/`. Si todavía no hay foto, el proyecto igual funciona; solo no se
  verá la imagen.
- **`testimonial`** (opcional): puedes añadir un testimonio del cliente con este formato,
  después de `results`:
  ```js
  testimonial: {
    text: "Texto del testimonio.",
    author: "Nombre",
    position: "Cargo",
    company: "Empresa",
  },
  ```
- **`featured`**: `true` para destacarlo en la portada.

---

## 4. Industrias atendidas — `src/content/industries.js`

Bloques sencillos. Para añadir o editar una industria:

```js
{
  id: "mineria",
  name: "Minería",
  description: "Automatización de procesos mineros y plantas concentradoras",
  icon: "⛏️",
  applications: ["Chancado", "Flotación", "Lixiviación"],
  featured: true,
},
```

`featured: true` hace que la industria aparezca en la portada.

---

## Una nota sobre los botones "Ver Detalles" / "Ver Caso Completo"

Hoy estos botones **todavía no llevan a ninguna parte** (las páginas de detalle de cada
servicio y proyecto aún no están construidas). Es una tarea pendiente del desarrollo, no un
error de contenido. Puedes seguir editando los servicios y proyectos con normalidad: los datos
ya quedan listos para cuando esas páginas se activen.

---

## Cómo ver y publicar los cambios

1. **Ver los cambios en tu computador** (opcional, para revisar antes de publicar):
   abre una terminal en la carpeta del proyecto y ejecuta:
   ```bash
   npm run dev
   ```
   Luego abre `http://localhost:3000` en el navegador. Los cambios se ven al instante al guardar.

2. **Publicar:** el sitio se actualiza solo al subir los cambios al repositorio (según cómo esté
   configurado el despliegue en Vercel/Netlify). Si tienes dudas sobre este paso, coordínalo con
   quien administra el despliegue.

> ¿El sitio muestra una pantalla de error tras un cambio? Casi siempre es una **coma o una
> comilla** que falta o sobra. Revisa la línea que editaste, o deshaz el cambio y vuelve a
> intentarlo con calma.
