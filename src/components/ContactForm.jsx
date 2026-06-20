"use client";

import { useActionState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Button from "@/components/site/Button";
import { enviarContacto } from "@/app/contacto/actions";

const fieldClass =
  "w-full rounded-[10px] border border-gray-300 px-3.5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

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
        className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center"
      >
        <CheckCircle2
          size={40}
          strokeWidth={1.75}
          className="mx-auto mb-3 text-brand"
          aria-hidden="true"
        />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          ¡Gracias por tu mensaje!
        </h3>
        <p className="text-[15px] text-gray-600">
          Hemos recibido tu consulta y te contactaremos a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {/* Honeypot anti-bot: oculto para personas, tentador para bots. No rellenar. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px opacity-0"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>
            Empresa
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="telefono" className={labelClass}>
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="servicio" className={labelClass}>
          Servicio de Interés
        </label>
        <select id="servicio" name="servicio" className={fieldClass}>
          <option value="">Seleccione un servicio</option>
          <option value="control-instrumentacion">
            Control e Instrumentación
          </option>
          <option value="variadores-velocidad">Variadores de Velocidad</option>
          <option value="reles-inteligentes">Protección con Relés</option>
          <option value="plc-dcs">Programación PLC/DCS</option>
          <option value="integracion-sistemas">Integración de Sistemas</option>
          <option value="consultoria-asesoria">Consultoría Técnica</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className={labelClass}>
          Descripción del Proyecto *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          placeholder="Describa su proyecto, proceso actual, desafíos técnicos y objetivos esperados..."
          className={`${fieldClass} resize-y`}
        />
      </div>

      {state?.error && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-2.5 rounded-[10px] border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          <AlertCircle
            size={18}
            strokeWidth={1.75}
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <span>{state.error}</span>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isPending}
        className="w-full justify-center"
      >
        {isPending ? "Enviando…" : "Enviar Consulta"}
      </Button>
    </form>
  );
}
