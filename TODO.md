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
- [x] **Formulario de contacto funcional.** Implementado con Server Action (`contacto/actions.js`)
      + Resend y componente cliente `ContactForm.jsx`. Falta configurar `RESEND_API_KEY` en
      producción (ver `.env.example`).
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

### Formulario de Contacto Funcional ✅ (hecho)

- [x] Server Action + Resend (en lugar de Formspree/Netlify)
- [x] Validación client-side y de servidor (+ honeypot anti-spam)
- [x] Mensaje de confirmación tras envío
- [x] Notificación por email (Resend) — requiere `RESEND_API_KEY` en producción

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

- [x] Sitemap automático (`app/sitemap.js`) y `robots.txt` (`app/robots.js`)
- [x] `metadataBase` y metadata propia de la home
- [ ] Structured data (JSON-LD) — requiere datos de contacto reales
- [ ] Meta tags Open Graph mejoradas (falta `og:image`)
- [ ] Google Analytics 4
- [ ] Google Search Console

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

- [x] ESLint (eslint-config-next, `npm run lint`)
- [ ] Migración a TypeScript
- [ ] Tests unitarios (Jest)
- [ ] Tests E2E (Playwright)
- [x] CI (GitHub Actions: lint + build) — falta deploy automático
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
