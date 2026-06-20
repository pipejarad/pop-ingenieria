# Diseño: Formulario de contacto funcional (Server Action + Resend)

**Fecha:** 2026-06-20
**Estado:** Aprobado — implementación directa solicitada por el responsable.

## 1. Problema

El `<form>` de `src/app/contacto/page.js` no tiene `action` ni `onSubmit` y vive en un Server
Component: al pulsar "Enviar Consulta" la página se recarga y no envía nada. Además muestra una
nota de plantilla dirigida al desarrollador. Hay que hacerlo funcional.

## 2. Decisión

Envío mediante **Next.js Server Action + Resend** (elegido por el responsable). Implicaciones
aceptadas: el sitio deja de poder ser estático puro (`output: 'export'`) y se despliega en Vercel
(o Node); requiere cuenta Resend (API key) y, para remitir desde `@popingenieria.cl`, dominio
verificado en Resend (mientras tanto, remitente sandbox de Resend).

## 3. Arquitectura

- **`src/components/ContactForm.jsx`** (`'use client'`): el formulario, extraído de la página.
  Usa `useActionState` (React 19) → `[state, formAction, isPending]`. La página
  `contacto/page.js` queda como Server Component que solo renderiza `<ContactForm />`.
- **`src/app/contacto/actions.js`** (`'use server'`): exporta `enviarContacto(prevState, formData)`.
  Valida en servidor, envía con Resend y devuelve `{ ok: boolean, error?: string }`.
- **Resend:** dependencia `resend`. Config por entorno:
  - `RESEND_API_KEY` (obligatoria para enviar).
  - `CONTACT_TO_EMAIL` (opcional; default `siteConfig.email`).
  - `CONTACT_FROM_EMAIL` (opcional; default remitente sandbox de Resend).

## 4. Flujo y estados

1. El form usa `action={formAction}`. Al enviar, React invoca el Server Action.
2. `isPending` → botón deshabilitado con "Enviando…".
3. `state.ok === true` → se reemplaza el form por un mensaje de éxito en región `aria-live`.
4. `state.error` → bloque `role="alert"` con el mensaje, conservando lo escrito.

## 5. Validación y anti-spam

- **Cliente:** `required` + `type="email"` (ya presentes); móvil-friendly (grids que colapsan).
- **Servidor:** revalida nombre/email/mensaje no vacíos y email con formato; no confía en el cliente.
- **Honeypot:** campo oculto `website`; si llega relleno, el action devuelve `{ ok: true }` sin enviar.
- **Sin API key:** el action devuelve un error claro ("falta configurar el envío…") en vez de romper.

## 6. Campos (se mantienen)

nombre*, empresa, email*, teléfono, servicio (select con los 6 ids de `services.js`), mensaje*.
(* obligatorio). Se **elimina** la nota de plantilla visible.

## 7. Email enviado

`to`: `CONTACT_TO_EMAIL` o `siteConfig.email`. `replyTo`: email del visitante. `subject`:
"Nueva consulta web — {nombre} ({empresa})". Cuerpo de texto con todos los campos.

## 8. Archivos

- Crear: `src/components/ContactForm.jsx`, `src/app/contacto/actions.js`, `.env.example`.
- Modificar: `src/app/contacto/page.js` (render `<ContactForm />`, quitar nota), `package.json` (dep `resend`).
- Docs: README/TODO/CLAUDE (deploy Vercel + variables de entorno).

## 9. Verificación

Sin runner de tests: `npm run build` (0 errores) + prueba manual. El envío real lo valida el
responsable con su `RESEND_API_KEY`. Se verifica: build, validación de servidor (honeypot/campos),
respuesta de error sin API key, y los estados de la UI (enviando/éxito/error).

## 10. Fuera de alcance

reCAPTCHA/servicios anti-spam avanzados (basta el honeypot), almacenamiento en base de datos,
autorespuesta al remitente. Los placeholders de contacto (teléfono/WhatsApp) son tema aparte.
