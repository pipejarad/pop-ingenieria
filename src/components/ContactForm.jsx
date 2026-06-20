"use client";

import { useActionState } from "react";
import Button from "@/components/Button";
import { enviarContacto } from "@/app/contacto/actions";

const labelStyle = {
  display: "block",
  marginBottom: "0.5rem",
  fontWeight: 600,
  color: "var(--gray-700)",
};

const fieldStyle = {
  width: "100%",
  padding: "0.75rem",
  border: "1px solid var(--gray-300)",
  borderRadius: "0.5rem",
  fontSize: "1rem",
  fontFamily: "inherit",
};

// Dos columnas que colapsan a una en pantallas estrechas.
const rowStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "1rem",
};

const initialState = { ok: null, error: null };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    enviarContacto,
    initialState
  );

  if (state?.ok) {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          padding: "2rem",
          backgroundColor: "var(--gray-50)",
          border: "1px solid var(--gray-200)",
          borderRadius: "0.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }} aria-hidden="true">
          ✅
        </div>
        <h3 style={{ marginBottom: "0.5rem" }}>¡Gracias por tu mensaje!</h3>
        <p style={{ margin: 0 }}>
          Hemos recibido tu consulta y te contactaremos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      {/* Honeypot anti-bot: oculto para personas, tentador para bots. No rellenar. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
        }}
      />

      <div style={rowStyle}>
        <div>
          <label htmlFor="nombre" style={labelStyle}>
            Nombre *
          </label>
          <input type="text" id="nombre" name="nombre" required style={fieldStyle} />
        </div>
        <div>
          <label htmlFor="empresa" style={labelStyle}>
            Empresa
          </label>
          <input type="text" id="empresa" name="empresa" style={fieldStyle} />
        </div>
      </div>

      <div style={rowStyle}>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email *
          </label>
          <input type="email" id="email" name="email" required style={fieldStyle} />
        </div>
        <div>
          <label htmlFor="telefono" style={labelStyle}>
            Teléfono
          </label>
          <input type="tel" id="telefono" name="telefono" style={fieldStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="servicio" style={labelStyle}>
          Servicio de Interés
        </label>
        <select
          id="servicio"
          name="servicio"
          style={{ ...fieldStyle, backgroundColor: "var(--white)" }}
        >
          <option value="">Seleccione un servicio</option>
          <option value="control-instrumentacion">Control e Instrumentación</option>
          <option value="variadores-velocidad">Variadores de Velocidad</option>
          <option value="reles-inteligentes">Protección con Relés</option>
          <option value="plc-dcs">Programación PLC/DCS</option>
          <option value="integracion-sistemas">Integración de Sistemas</option>
          <option value="consultoria-asesoria">Consultoría Técnica</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" style={labelStyle}>
          Descripción del Proyecto *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          placeholder="Describa su proyecto, proceso actual, desafíos técnicos y objetivos esperados..."
          style={{ ...fieldStyle, resize: "vertical" }}
        />
      </div>

      {state?.error && (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            padding: "1rem",
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            borderRadius: "0.5rem",
            color: "#b91c1c",
            fontSize: "0.875rem",
          }}
        >
          {state.error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="large"
        fullWidth
        disabled={isPending}
      >
        {isPending ? "Enviando…" : "Enviar Consulta"}
      </Button>
    </form>
  );
}
