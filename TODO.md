# TODO - Próximas Mejoras del Sitio Web

## 🔴 Bloqueante — antes de publicar

Detectado en la revisión del proyecto. Esto impide que el sitio salga a producción:

- [ ] **Datos de contacto placeholder.** `src/content/site.js` trae `phone: "+56 9 XXXX XXXX"` y
      `whatsapp: "569XXXXXXXX"`. Se muestran en todo el sitio y rompen los enlaces `tel:` y
      `wa.me` (incluido el CTA principal de WhatsApp). Reemplazar por los valores reales.
- [ ] **Rutas de detalle inexistentes → 404.** Los botones "Ver Detalles" (`/servicios/{id}`) y
      "Ver Caso" (`/proyectos/{id}`) enlazan a páginas que no existen. Crear
      `servicios/[slug]/page.js` y `proyectos/[slug]/page.js` (con `generateStaticParams`), o
      desactivar esos botones mientras tanto.
- [ ] **Formulario de contacto no envía nada.** `src/app/contacto/page.js` tiene un `<form>` sin
      `action` ni `onSubmit`. Integrar Formspree/Netlify/handler y quitar la nota de plantilla
      visible al usuario (líneas ~400-405).
- [ ] **Bug de estilos en `Button`.** En `src/components/Button.jsx` el `{...props}` sobrescribe
      el `className` calculado: cuando el padre pasa `className` (el CTA del Header) se pierden
      las clases de variante. Combinar en vez de sobrescribir.
- [ ] **Casos de éxito por validar.** Clientes, cifras y testimonios de `src/content/projects.js`
      parecen datos de ejemplo. Validar/autorizar o marcar como ilustrativos.

> El detalle de implementación de las páginas dinámicas y del formulario está más abajo, en
> "Prioridad Alta".

## 🔥 Prioridad Alta (Próxima semana)

### Páginas Dinámicas

- [ ] Crear `/servicios/[slug]/page.js` para detalles de cada servicio
- [ ] Crear `/proyectos/[slug]/page.js` para casos de éxito completos
- [ ] Implementar `generateStaticParams()` para SEO

### Formulario de Contacto Funcional

- [ ] Integrar Formspree o Netlify Forms
- [ ] Agregar validación client-side
- [ ] Mensaje de confirmación tras envío
- [ ] Notificación por email al recibir formularios

### Optimización de Imágenes

- [ ] Agregar imágenes de proyectos (placeholder por ahora)
- [ ] Implementar next/image correctamente
- [ ] Crear assets optimizados para diferentes resoluciones

## 📈 Prioridad Media (Próximas 2-3 semanas)

### Funcionalidades Adicionales

- [ ] Botón flotante de WhatsApp
- [ ] Calculadora de ROI básica
- [ ] Sección de testimonios
- [ ] Blog técnico (/blog)
- [ ] Newsletter signup

### SEO y Analytics

- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Sitemap automático
- [ ] Structured data (JSON-LD)
- [ ] Meta tags Open Graph mejoradas

### Performance

- [ ] Lazy loading de imágenes
- [ ] Minificación de CSS
- [ ] Service Worker para cache
- [ ] Core Web Vitals optimization

## 🛠️ Prioridad Baja (Mejoras futuras)

### UX/UI

- [ ] Animaciones suaves (Framer Motion)
- [ ] Dark mode toggle
- [ ] Filtros en página de proyectos
- [ ] Búsqueda de servicios
- [ ] Breadcrumbs navigation

### Funcionalidades Avanzadas

- [ ] Sistema de citas online
- [ ] Portal de clientes
- [ ] Chat en vivo
- [ ] Descargas de PDFs técnicos
- [ ] Calculadoras de ingeniería

### Técnicas

- [ ] Migración a TypeScript
- [ ] Tests unitarios (Jest)
- [ ] Tests E2E (Playwright)
- [ ] CI/CD pipeline
- [ ] Monitoring y alertas

## 🔧 Configuraciones Pendientes

### Producción

- [ ] Configurar dominio personalizado
- [ ] SSL certificate
- [ ] CDN setup
- [ ] Backup strategy
- [ ] Error monitoring (Sentry)

### Marketing

- [ ] Facebook Pixel
- [ ] Google Ads conversion tracking
- [ ] LinkedIn Insight Tag
- [ ] Email marketing integration

### Seguridad

- [ ] Content Security Policy
- [ ] Rate limiting
- [ ] GDPR compliance
- [ ] Cookie consent banner

---

## 💡 Ideas Futuras

### Herramientas Técnicas

- Calculadora de dimensionamiento de variadores
- Selector de PLCs por aplicación
- Estimador de costos de proyectos
- Biblioteca de códigos ejemplo

### Contenido

- Videos técnicos embebidos
- Webinars grabados
- Documentos técnicos descargables
- Casos de estudio detallados

### Integraciones

- CRM integration
- ERP connection
- Inventory management
- Project management tools

---

_Actualizar este archivo conforme se completen las tareas_
