import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Activity,
  Zap,
  CircuitBoard,
  Cpu,
  Share2,
  ClipboardCheck,
  Cog,
  Check,
  ArrowRight,
  MessageCircle,
  Mail,
} from "lucide-react";

import Section from "@/components/site/Section";
import Container from "@/components/site/Container";
import Button from "@/components/site/Button";

import { services, getServiceBySlug } from "@/content/services";
import { siteConfig } from "@/content/site";

const serviceIcons = {
  "control-instrumentacion": Activity,
  "variadores-velocidad": Zap,
  "reles-inteligentes": CircuitBoard,
  "plc-dcs": Cpu,
  "integracion-sistemas": Share2,
  "consultoria-asesoria": ClipboardCheck,
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default async function ServicioDetallePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.id !== service.id);
  const Icon = serviceIcons[service.id] || Cog;
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <main className="flex-1">
      {/* BREADCRUMB + HERO */}
      <Section bg="muted">
        <nav
          aria-label="Ruta de navegación"
          className="text-sm text-gray-500 mb-8"
        >
          <Link href="/" className="hover:text-brand transition-colors">
            Inicio
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <Link href="/servicios" className="hover:text-brand transition-colors">
            Servicios
          </Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-gray-700">{service.title}</span>
        </nav>

        <div className="max-w-3xl">
          <div className="grid place-items-center h-14 w-14 rounded-xl bg-brand text-white mb-6">
            <Icon size={28} strokeWidth={1.75} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-[1.08] tracking-tight">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-gray-600">{service.description}</p>
        </div>
      </Section>

      {/* CARACTERÍSTICAS Y BENEFICIOS */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand mb-3">
              Qué incluye
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-7">
              Características
            </h2>
            <ul className="space-y-3.5">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="grid place-items-center h-6 w-6 shrink-0 rounded-md bg-brand/5 text-brand mt-0.5">
                    <Check size={15} strokeWidth={2.25} />
                  </span>
                  <span className="text-[15px] text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent mb-3">
              Qué gana
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-7">
              Beneficios
            </h2>
            <ul className="space-y-3.5">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="grid place-items-center h-6 w-6 shrink-0 rounded-md bg-accent/10 text-accent mt-0.5">
                    <Check size={15} strokeWidth={2.25} />
                  </span>
                  <span className="text-[15px] text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* TECNOLOGÍAS Y APLICACIONES */}
      <Section
        bg="muted"
        eyebrow="Capacidades"
        title="Tecnologías y aplicaciones"
        intro="Las plataformas con las que trabajamos y los contextos donde aplicamos este servicio."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {service.technologies.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Aplicaciones
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {service.applications.map((app) => (
                <span
                  key={app}
                  className="text-xs text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* OTROS SERVICIOS */}
      <Section
        eyebrow="Seguir explorando"
        title="Otros servicios"
        intro="Cubrimos el ciclo completo de automatización. Estos son los demás servicios que ofrecemos."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherServices.map((s) => {
            const OtherIcon = serviceIcons[s.id] || Cog;
            return (
              <Link
                key={s.id}
                href={`/servicios/${s.id}`}
                className="group flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-5 transition-all duration-200 hover:border-brand/30 hover:shadow-sm hover:-translate-y-0.5"
              >
                <span className="grid place-items-center h-10 w-10 shrink-0 rounded-lg bg-brand/5 text-brand">
                  <OtherIcon size={20} strokeWidth={1.75} />
                </span>
                <span className="text-[15px] font-medium text-gray-900 leading-snug">
                  {s.title}
                </span>
                <ArrowRight
                  size={16}
                  className="ml-auto shrink-0 text-gray-400 transition-all group-hover:text-brand group-hover:translate-x-0.5"
                />
              </Link>
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
                ¿Le interesa este servicio?
              </h2>
              <p className="mt-5 text-white/75 text-lg max-w-lg">
                Conversemos sobre cómo aplicarlo a su proceso. Respondemos
                personalmente, sin formularios largos ni vendedores.
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
                Cotizar Proyecto
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                href="/contacto"
                className="justify-center"
              >
                <Mail size={18} />
                Contacto
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
