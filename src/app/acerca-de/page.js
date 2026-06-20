import {
  ArrowRight,
  Cog,
  Target,
  Telescope,
  ClipboardCheck,
  PencilRuler,
  Wrench,
  Rocket,
  LifeBuoy,
  Award,
  Handshake,
  FlaskConical,
  Zap,
  MessageCircle,
} from "lucide-react";

import Section from "@/components/site/Section";
import Container from "@/components/site/Container";
import Button from "@/components/site/Button";
import Card from "@/components/site/Card";

import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Acerca de POP Ingeniería - Automatización Industrial",
  description:
    "Más de 20 años de experiencia en automatización industrial. Conozca nuestra historia, misión y enfoque técnico especializado.",
};

const steps = [
  {
    icon: ClipboardCheck,
    title: "Análisis y Diagnóstico",
    description:
      "Evaluamos en profundidad su proceso actual, identificando oportunidades de mejora y definiendo objetivos claros.",
  },
  {
    icon: PencilRuler,
    title: "Diseño de Solución",
    description:
      "Desarrollamos una propuesta técnica detallada, seleccionando las mejores tecnologías para sus requerimientos específicos.",
  },
  {
    icon: Wrench,
    title: "Implementación",
    description:
      "Ejecutamos la solución con metodologías probadas, minimizando impactos en la operación y garantizando la calidad.",
  },
  {
    icon: Rocket,
    title: "Puesta en Marcha",
    description:
      "Realizamos pruebas exhaustivas, capacitamos a su personal y aseguramos una transición exitosa.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte Continuo",
    description:
      "Brindamos soporte técnico especializado y mantenimiento preventivo para garantizar el rendimiento óptimo.",
  },
];

const values = [
  {
    icon: Award,
    title: "Excelencia Técnica",
    description:
      "Buscamos siempre la mejor solución técnica, utilizando tecnologías de vanguardia y mejores prácticas internacionales.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    description:
      "Nos comprometemos con el éxito de cada proyecto, trabajando como socios estratégicos de nuestros clientes.",
  },
  {
    icon: FlaskConical,
    title: "Innovación",
    description:
      "Mantenemos actualización constante con las últimas tecnologías para ofrecer soluciones innovadoras.",
  },
  {
    icon: Zap,
    title: "Eficiencia",
    description:
      "Optimizamos tiempos y recursos, entregando soluciones efectivas que generan valor inmediato.",
  },
];

export default function AcercaDePage() {
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <Container className="py-20 sm:py-24 lg:py-28 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand mb-5">
            Acerca de nosotros
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-[1.05] tracking-tight">
            Acerca de POP Ingeniería
          </h1>
          <p className="mt-6 text-lg text-gray-600">{siteConfig.tagline}</p>
        </Container>
      </section>

      {/* NUESTRA HISTORIA */}
      <Section
        id="historia"
        eyebrow="Quiénes somos"
        title="Nuestra Historia"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="space-y-5 text-[15px] sm:text-base text-gray-600">
            <p className="text-lg text-gray-700">
              Con más de 20 años de experiencia en automatización industrial,
              POP Ingeniería nació de la visión de ofrecer soluciones técnicas
              de excelencia que optimicen los procesos industriales de nuestros
              clientes.
            </p>
            <p>
              Fundada por ingenieros con amplia experiencia en control e
              instrumentación, nuestra empresa ha crecido junto con la industria
              chilena, adaptándose a las nuevas tecnologías y manteniéndose
              siempre a la vanguardia técnica.
            </p>
            <p>
              Hemos participado en proyectos críticos en minería, energía,
              petroquímica y manufactura, ganando la confianza de empresas
              líderes en cada sector.
            </p>
          </div>

          <div className="rounded-2xl bg-brand text-white p-10 sm:p-12 text-center">
            <div className="grid place-items-center h-14 w-14 rounded-xl bg-white/10 text-white mx-auto mb-6">
              <Cog size={26} strokeWidth={1.75} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Expertise Técnico
            </h3>
            <p className="text-white/80 text-[15px]">
              Especialización profunda en control de procesos, instrumentación y
              sistemas de automatización industrial de última generación.
            </p>
          </div>
        </div>
      </Section>

      {/* MISIÓN Y VISIÓN */}
      <Section
        id="mision-vision"
        bg="muted"
        eyebrow="Propósito"
        title="Misión y Visión"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <Card className="flex flex-col">
            <div className="grid place-items-center h-11 w-11 rounded-lg bg-brand text-white mb-5">
              <Target size={22} strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nuestra Misión
            </h3>
            <p className="text-[15px] text-gray-600">
              Optimizar procesos industriales mediante soluciones de
              automatización innovadoras, generando valor agregado y mejorando
              la competitividad de nuestros clientes.
            </p>
          </Card>

          <Card className="flex flex-col">
            <div className="grid place-items-center h-11 w-11 rounded-lg bg-brand text-white mb-5">
              <Telescope size={22} strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nuestra Visión
            </h3>
            <p className="text-[15px] text-gray-600">
              Ser el referente técnico en automatización industrial en Chile,
              reconocidos por la excelencia de nuestras soluciones y el
              compromiso con nuestros clientes.
            </p>
          </Card>
        </div>
      </Section>

      {/* NUESTRO ENFOQUE DE TRABAJO */}
      <Section
        id="enfoque"
        eyebrow="Cómo trabajamos"
        title="Nuestro Enfoque de Trabajo"
        intro="Cada proyecto es único y requiere un enfoque personalizado. Nuestro proceso garantiza resultados exitosos y sostenibles."
      >
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                <p className="text-gray-600 text-[15px]">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* VALORES */}
      <Section
        id="valores"
        bg="muted"
        eyebrow="Lo que nos define"
        title="Nuestros Valores"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="flex flex-col">
                <div className="grid place-items-center h-11 w-11 rounded-lg bg-brand text-white mb-5">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-[15px] text-gray-600">{value.description}</p>
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
                ¿Listo para trabajar juntos?
              </h2>
              <p className="mt-5 text-white/75 text-lg max-w-lg">
                Descubra cómo nuestro enfoque técnico especializado puede
                optimizar sus procesos industriales y generar valor para su
                empresa.
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
                Conversemos
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                href="/proyectos"
                className="justify-center"
              >
                Ver Nuestros Proyectos
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
