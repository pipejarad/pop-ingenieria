import { Cog, MessageCircle, ArrowRight } from "lucide-react";

import Section from "@/components/site/Section";
import Container from "@/components/site/Container";
import Button from "@/components/site/Button";
import Card from "@/components/site/Card";

import { siteConfig } from "@/content/site";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Casos de Éxito - Proyectos de Automatización Industrial",
  description:
    "Conozca nuestros proyectos de automatización industrial realizados en minería, energía, forestal e industria en general.",
};

export default function ProyectosPage() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="border-b border-gray-200">
        <Container className="py-20 sm:py-24 lg:py-28 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand mb-5">
            Trabajo reciente
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-[1.05] tracking-tight">
            Nuestros Proyectos
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Una muestra de los proyectos en los que hemos instalado, renovado y
            puesto en marcha sistemas de automatización y control industrial
            para la minería y la industria.
          </p>
        </Container>
      </section>

      {/* GRID DE PROYECTOS */}
      <Section bg="muted">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <Cog
                size={20}
                strokeWidth={1.75}
                className="text-gray-400 mb-5"
              />
              <h3 className="text-base font-semibold text-gray-900 mb-4 leading-snug">
                {project.title}
              </h3>
              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.map((tag) => (
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
                ¿Su proyecto será el próximo caso de éxito?
              </h2>
              <p className="mt-5 text-white/75 text-lg max-w-lg">
                Cada proyecto es una oportunidad para resolver un desafío técnico
                real. Conversemos sobre sus objetivos y cómo podemos ayudarle.
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
                Discutir Mi Proyecto
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                href="/servicios"
                className="justify-center"
              >
                Ver Nuestros Servicios
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
