"use server";

import { Resend } from "resend";
import { siteConfig } from "@/content/site";

// Etiquetas legibles para el campo "servicio" (los value vienen del <select>).
const SERVICIOS = {
  "control-instrumentacion": "Control e Instrumentación",
  "variadores-velocidad": "Variadores de Velocidad",
  "reles-inteligentes": "Protección con Relés",
  "plc-dcs": "Programación PLC/DCS",
  "integracion-sistemas": "Integración de Sistemas",
  "consultoria-asesoria": "Consultoría Técnica",
};

function esEmailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function valor(formData, campo) {
  return (formData.get(campo) || "").toString().trim();
}

export async function enviarContacto(prevState, formData) {
  // Honeypot anti-bot: si este campo viene relleno, fingimos éxito sin enviar.
  if (valor(formData, "website")) {
    return { ok: true, error: null };
  }

  const nombre = valor(formData, "nombre");
  const empresa = valor(formData, "empresa");
  const email = valor(formData, "email");
  const telefono = valor(formData, "telefono");
  const servicio = valor(formData, "servicio");
  const mensaje = valor(formData, "mensaje");

  // Validación de servidor (no confiamos solo en el cliente).
  if (!nombre || !email || !mensaje) {
    return { ok: false, error: "Faltan campos obligatorios (nombre, email y mensaje)." };
  }
  if (!esEmailValido(email)) {
    return { ok: false, error: "El correo electrónico no es válido." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error:
        "El envío aún no está configurado. Por favor escríbenos por WhatsApp o email mientras tanto.",
    };
  }

  const destino = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const remitente =
    process.env.CONTACT_FROM_EMAIL || "POP Ingeniería <onboarding@resend.dev>";
  const servicioLabel = SERVICIOS[servicio] || "No especificado";

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: remitente,
      to: [destino],
      replyTo: email,
      subject: `Nueva consulta web — ${nombre}${empresa ? ` (${empresa})` : ""}`,
      text: [
        `Nombre: ${nombre}`,
        `Empresa: ${empresa || "—"}`,
        `Email: ${email}`,
        `Teléfono: ${telefono || "—"}`,
        `Servicio de interés: ${servicioLabel}`,
        "",
        "Mensaje:",
        mensaje,
      ].join("\n"),
    });

    if (error) {
      return {
        ok: false,
        error: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.",
      };
    }

    return { ok: true, error: null };
  } catch {
    return {
      ok: false,
      error: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.",
    };
  }
}
