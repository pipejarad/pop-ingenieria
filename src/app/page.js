import Image from "next/image";
import {
  ArrowRight,
  Activity,
  Zap,
  CircuitBoard,
  Cpu,
  Share2,
  ClipboardCheck,
  Mountain,
  FlaskConical,
  Factory,
  Leaf,
  Droplets,
  Hammer,
  Cog,
  Wrench,
  TrendingUp,
  MessageCircle,
  Mail,
} from "lucide-react";

import Section from "@/components/site/Section";
import Container from "@/components/site/Container";
import Button from "@/components/site/Button";
import Card from "@/components/site/Card";

import { siteConfig } from "@/content/site";
import { featuredServices } from "@/content/services";
import { featuredProjects } from "@/content/projects";
import { featuredIndustries } from "@/content/industries";

export const metadata = {
  title: {
    absolute: "POP Ingeniería — Automatización Industrial y Control de Procesos",
  },
  description:
    "Más de 20 años instalando, renovando y mejorando procesos industriales. Control e instrumentación, PLC/DCS, variadores y protecciones para la minería y la industria.",
};

const serviceIcons = {
  "control-instrumentacion": Activity,
  "variadores-velocidad": Zap,
  "reles-inteligentes": CircuitBoard,
  "plc-dcs": Cpu,
  "integracion-sistemas": Share2,
  "consultoria-asesoria": ClipboardCheck,
};

const industryIcons = {
  mineria: Mountain,
  energia: Zap,
  petroquimica: FlaskConical,
  manufactura: Factory,
  alimentaria: Leaf,
  agua: Droplets,
  farmaceutica: FlaskConical,
  siderurgia: Hammer,
};

const steps = [
  {
    icon: ClipboardCheck,
    title: "Análisis y Diagnóstico",
    desc: "Visitamos su planta, levantamos el proceso actual y entendemos las limitaciones reales de la operación.",
  },
  {
    icon: Wrench,
    title: "Diseño e Implementación",
    desc: "Diseñamos la solución, especificamos equipos y ejecutamos el montaje y la puesta en marcha en terreno.",
  },
  {
    icon: TrendingUp,
    title: "Optimización Continua",
    desc: "Acompañamos a su equipo con ajustes, mejoras y soporte para mantener la planta operando al máximo.",
  },
];

export default function Home() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <Container className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 py-20 sm:py-24 lg:py-28 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand mb-5">
              Automatización industrial · Santiago de Chile
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-gray-900 leading-[1.05] tracking-tight">
              Especialistas en Automatización Industrial
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Más de 20 años instalando, renovando y mejorando procesos
              productivos para la minería y la industria. Trabajamos junto a su
              equipo, en terreno, sin intermediarios.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="lg"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar Proyecto
                <ArrowRight size={18} />
              </Button>
              <Button variant="secondary" size="lg" href="/servicios">
                Ver Servicios
              </Button>
            </div>
            <p className="mt-10 text-sm text-gray-500">
              Confían en nosotros equipos de mantención y operación en faenas
              mineras, plantas eléctricas y procesos industriales en todo Chile.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gray-100 rounded-2xl -z-10 hidden lg:block" />
            <Image
              src="/images/hero-control-room.jpg"
              alt="Ingenieros revisando un sistema SCADA en una sala de control industrial"
              width={1280}
              height={960}
              priority
              className="rounded-2xl w-full h-auto object-cover aspect-[4/3] shadow-sm"
            />
          </div>
        </Container>
      </section>

      {/* STATS */}
      <section
        aria-label="Métricas de la empresa"
        className="border-b border-gray-200 bg-gray-50"
      >
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {siteConfig.stats.map((s) => (
              <div
                key={s.label}
                className="py-8 md:py-10 px-4 text-center first:pl-0 last:pr-0"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-3xl sm:text-4xl font-semibold text-brand tracking-tight">
                    {s.number}
                  </span>
                  <span className="block mt-2 text-sm text-gray-600">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ¿QUÉ HACEMOS? */}
      <Section
        id="que-hacemos"
        eyebrow="Cómo trabajamos"
        title="¿Qué hacemos?"
        intro="Un proceso simple, sin sorpresas: entendemos su planta, diseñamos la solución y nos quedamos para asegurar que funcione."
      >
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-gray-400 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-gray-200" />
                </div>
                <div className="grid place-items-center h-11 w-11 rounded-lg bg-brand/5 text-brand mb-5">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-[15px]">{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* SERVICIOS */}
      <Section
        id="servicios"
        bg="muted"
        eyebrow="Nuestros servicios"
        title="Soluciones de automatización end-to-end"
        intro="Cubrimos el ciclo completo: desde la instrumentación de campo hasta el sistema de supervisión y las protecciones eléctricas."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredServices.map((svc) => {
            const Icon = serviceIcons[svc.id] || Cog;
            return (
              <Card key={svc.id} interactive className="flex flex-col">
                <div className="grid place-items-center h-11 w-11 rounded-lg bg-brand text-white mb-5">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {svc.title}
                </h3>
                <p className="text-[15px] text-gray-600 mb-5">
                  {svc.shortDescription}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {svc.technologies.slice(0, 3).map((tag) => (
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
        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" href="/servicios">
            Ver Todos los Servicios
            <ArrowRight size={18} />
          </Button>
        </div>
      </Section>

      {/* INDUSTRIAS */}
      <Section
        id="industrias"
        eyebrow="Sectores"
        title="Industrias que atendemos"
        intro="Adaptamos cada solución al lenguaje, las normativas y las exigencias específicas del sector productivo."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden">
          {featuredIndustries.map((ind) => {
            const Icon = industryIcons[ind.id] || Factory;
            return (
              <div
                key={ind.id}
                className="bg-white p-6 hover:bg-gray-50 transition-colors"
              >
                <Icon size={22} strokeWidth={1.75} className="text-brand mb-3" />
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {ind.name}
                </h3>
                <p className="text-sm text-gray-600">{ind.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* PROYECTOS */}
      <Section
        id="proyectos"
        bg="muted"
        eyebrow="Trabajo reciente"
        title="Proyectos destacados"
        intro="Una muestra de los proyectos donde hemos acompañado a equipos de mantención y operación en los últimos años."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredProjects.map((p) => (
            <Card key={p.id} className="flex flex-col">
              <Cog size={20} strokeWidth={1.75} className="text-gray-400 mb-5" />
              <h3 className="text-base font-semibold text-gray-900 mb-4 leading-snug">
                {p.title}
              </h3>
              {p.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.technologies.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg" href="/proyectos">
            Ver Todos los Proyectos
            <ArrowRight size={18} />
          </Button>
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
                ¿Listo para optimizar sus procesos industriales?
              </h2>
              <p className="mt-5 text-white/75 text-lg max-w-lg">
                Cuéntenos qué necesita evaluar, mejorar o automatizar.
                Respondemos personalmente, sin formularios largos ni vendedores.
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
