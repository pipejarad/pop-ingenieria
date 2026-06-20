import {
  ArrowRight,
  Activity,
  Zap,
  CircuitBoard,
  Cpu,
  Share2,
  ClipboardCheck,
  Cog,
  MessageCircle,
  Mail,
} from "lucide-react";

import Section from "@/components/site/Section";
import Container from "@/components/site/Container";
import Button from "@/components/site/Button";
import Card from "@/components/site/Card";

import { siteConfig } from "@/content/site";
import { services } from "@/content/services";

export const metadata = {
  title: "Servicios de Automatización Industrial",
  description:
    "Servicios especializados en control e instrumentación industrial, PLCs, DCS, variadores de velocidad y protección con relés inteligentes.",
};

const serviceIcons = {
  "control-instrumentacion": Activity,
  "variadores-velocidad": Zap,
  "reles-inteligentes": CircuitBoard,
  "plc-dcs": Cpu,
  "integracion-sistemas": Share2,
  "consultoria-asesoria": ClipboardCheck,
};

export default function ServiciosPage() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="border-b border-gray-200">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand mb-5">
              Nuestros servicios
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-[1.05] tracking-tight">
              Soluciones de automatización industrial
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Soluciones de acuerdo con la complejidad del proceso y la
              simplicidad que nos brinda la tecnología. Más de 20 años de
              experiencia en automatización industrial.
            </p>
          </div>
        </Container>
      </section>

      {/* GRID DE SERVICIOS */}
      <Section
        id="servicios"
        bg="muted"
        eyebrow="Catálogo completo"
        title="Todo lo que podemos hacer por su planta"
        intro="Desde la instrumentación de campo hasta la supervisión y las protecciones eléctricas, cubrimos el ciclo completo de la automatización."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((svc) => {
            const Icon = serviceIcons[svc.id] || Cog;
            return (
              <Card key={svc.id} interactive className="flex flex-col">
                <div className="grid place-items-center h-11 w-11 rounded-lg bg-brand text-white mb-5">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {svc.title}
                </h2>
                <p className="text-[15px] text-gray-600 mb-5">
                  {svc.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {svc.technologies.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`/servicios/${svc.id}`}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:gap-2.5 transition-all"
                >
                  Ver detalles <ArrowRight size={15} />
                </a>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="bg-brand text-white">
        <Container className="py-20 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-4">
                Conversemos
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight max-w-xl">
                ¿Necesita una solución personalizada?
              </h2>
              <p className="mt-5 text-white/75 text-lg max-w-lg">
                Cada proceso industrial es único. Cuéntenos qué necesita
                evaluar, mejorar o automatizar y desarrollamos una solución a la
                medida de su operación.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-stretch">
              <Button
                variant="primary"
                size="lg"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="justify-center"
              >
                <MessageCircle size={18} />
                Escribir por WhatsApp
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                href="/contacto"
                className="justify-center"
              >
                <Mail size={18} />
                Enviar por formulario
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
