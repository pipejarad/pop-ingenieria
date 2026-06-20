import {
  MessageCircle,
  Mail,
  Phone,
  Clock,
  MapPin,
  Zap,
} from "lucide-react";

import Section from "@/components/site/Section";
import Container from "@/components/site/Container";
import Button from "@/components/site/Button";
import Card from "@/components/site/Card";
import ContactForm from "@/components/ContactForm";

import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Contacto - Asesoría en Automatización Industrial",
  description:
    "Contacte con nuestros expertos en automatización industrial. WhatsApp, email o formulario de consulta técnica.",
};

export default function ContactoPage() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  const methods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Respuesta rápida para consultas",
      body: "La forma más rápida de contactar con nosotros. Reciba asesoría técnica inmediata sobre sus proyectos.",
      action: {
        label: "Abrir WhatsApp",
        href: wa,
        variant: "primary",
        external: true,
      },
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Para consultas técnicas detalladas",
      body: "Envíe información detallada de su proyecto para una respuesta técnica completa y personalizada.",
      action: {
        label: "Enviar Email",
        href: `mailto:${siteConfig.email}`,
        variant: "secondary",
      },
    },
    {
      icon: Phone,
      title: "Teléfono",
      subtitle: "Para consultas urgentes",
      body: "Llame directamente para emergencias o consultas que requieran atención inmediata.",
      action: {
        label: "Llamar Ahora",
        href: `tel:${siteConfig.phone}`,
        variant: "secondary",
      },
    },
  ];

  const info = [
    {
      icon: Clock,
      title: "Horario de Atención",
      lines: ["Lunes a Viernes: 8:00 - 18:00", "Emergencias 24/7"],
    },
    {
      icon: MapPin,
      title: "Ubicación",
      lines: [siteConfig.address, "Atendemos todo Chile"],
    },
    {
      icon: Zap,
      title: "Respuesta Rápida",
      lines: ["WhatsApp: Inmediato", "Email: 24 horas"],
    },
  ];

  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-gray-50">
        <Container className="py-20 sm:py-24 text-center max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand mb-4">
            Conversemos
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-[1.05] tracking-tight">
            Contáctenos
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            ¿Necesita optimizar sus procesos industriales? Nuestro equipo de
            expertos está listo para analizar su situación y proponer soluciones
            efectivas.
          </p>
        </Container>
      </section>

      {/* MÉTODOS + FORMULARIO */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Métodos de Contacto */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Métodos de Contacto
            </h2>
            <div className="flex flex-col gap-5">
              {methods.map((m) => {
                const Icon = m.icon;
                return (
                  <Card key={m.title} interactive className="flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="grid place-items-center h-11 w-11 rounded-lg bg-brand/5 text-brand shrink-0">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {m.title}
                        </h3>
                        <p className="text-sm text-gray-600">{m.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-[15px] text-gray-600 mb-6">{m.body}</p>
                    <Button
                      variant={m.action.variant}
                      size="lg"
                      href={m.action.href}
                      className="mt-auto justify-center"
                      {...(m.action.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {m.action.label}
                    </Button>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Formulario de Consulta */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
              Formulario de Consulta
            </h2>
            <Card>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Section>

      {/* INFORMACIÓN ADICIONAL */}
      <Section
        bg="muted"
        align="center"
        eyebrow="A tener en cuenta"
        title="Información Adicional"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {info.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="text-center">
                <div className="grid place-items-center h-11 w-11 rounded-lg bg-brand text-white mb-5 mx-auto">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-600">
                  {item.lines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
