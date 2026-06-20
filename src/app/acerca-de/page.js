import Section from "@/components/Section";
import Button from "@/components/Button";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Acerca de POP Ingeniería - Automatización Industrial",
  description:
    "Más de 20 años de experiencia en automatización industrial. Conozca nuestra historia, misión y enfoque técnico especializado.",
};

export default function AcercaDePage() {
  const ctaWhatsAppLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <main>
      {/* Header */}
      <Section background="gray">
        <div
          style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
        >
          <h1>Acerca de POP Ingeniería</h1>
          <p style={{ fontSize: "1.25rem" }}>{siteConfig.tagline}</p>
        </div>
      </Section>

      {/* Company Story */}
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <h2>Nuestra Historia</h2>
            <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
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
          <div
            style={{
              backgroundColor: "var(--primary-blue)",
              color: "var(--white)",
              padding: "3rem 2rem",
              borderRadius: "1rem",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⚙️</div>
            <h3 style={{ marginBottom: "1rem", color: "var(--white)" }}>
              Expertise Técnico
            </h3>
            <p style={{ fontSize: "1.125rem", opacity: 0.95 }}>
              Especialización profunda en control de procesos, instrumentación y
              sistemas de automatización industrial de última generación.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "3rem",
          }}
        >
          <div
            style={{
              padding: "2.5rem",
              backgroundColor: "var(--white)",
              borderRadius: "1rem",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              🎯
            </div>
            <h3 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              Nuestra Misión
            </h3>
            <p style={{ textAlign: "center", fontSize: "1.125rem" }}>
              Optimizar procesos industriales mediante soluciones de
              automatización innovadoras, generando valor agregado y mejorando
              la competitividad de nuestros clientes.
            </p>
          </div>

          <div
            style={{
              padding: "2.5rem",
              backgroundColor: "var(--white)",
              borderRadius: "1rem",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              🔮
            </div>
            <h3 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
              Nuestra Visión
            </h3>
            <p style={{ textAlign: "center", fontSize: "1.125rem" }}>
              Ser el referente técnico en automatización industrial en Chile,
              reconocidos por la excelencia de nuestras soluciones y el
              compromiso con nuestros clientes.
            </p>
          </div>
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2>Nuestro Enfoque de Trabajo</h2>
          <p
            style={{
              fontSize: "1.125rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Cada proyecto es único y requiere un enfoque personalizado. Nuestro
            proceso garantiza resultados exitosos y sostenibles.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              step: "01",
              title: "Análisis y Diagnóstico",
              description:
                "Evaluamos en profundidad su proceso actual, identificando oportunidades de mejora y definiendo objetivos claros.",
            },
            {
              step: "02",
              title: "Diseño de Solución",
              description:
                "Desarrollamos una propuesta técnica detallada, seleccionando las mejores tecnologías para sus requerimientos específicos.",
            },
            {
              step: "03",
              title: "Implementación",
              description:
                "Ejecutamos la solución con metodologías probadas, minimizando impactos en la operación y garantizando la calidad.",
            },
            {
              step: "04",
              title: "Puesta en Marcha",
              description:
                "Realizamos pruebas exhaustivas, capacitamos a su personal y aseguramos una transición exitosa.",
            },
            {
              step: "05",
              title: "Soporte Continuo",
              description:
                "Brindamos soporte técnico especializado y mantenimiento preventivo para garantizar el rendimiento óptimo.",
            },
          ].map((item, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "var(--primary-blue)",
                  color: "var(--white)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                }}
              >
                {item.step}
              </div>
              <h3 style={{ marginBottom: "1rem" }}>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section background="primary">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ color: "var(--white)" }}>Nuestros Valores</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              icon: "🎯",
              title: "Excelencia Técnica",
              description:
                "Buscamos siempre la mejor solución técnica, utilizando tecnologías de vanguardia y mejores prácticas internacionales.",
            },
            {
              icon: "🤝",
              title: "Compromiso",
              description:
                "Nos comprometemos con el éxito de cada proyecto, trabajando como socios estratégicos de nuestros clientes.",
            },
            {
              icon: "🔬",
              title: "Innovación",
              description:
                "Mantenemos actualización constante con las últimas tecnologías para ofrecer soluciones innovadoras.",
            },
            {
              icon: "⚡",
              title: "Eficiencia",
              description:
                "Optimizamos tiempos y recursos, entregando soluciones efectivas que generan valor inmediato.",
            },
          ].map((value, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                {value.icon}
              </div>
              <h3 style={{ marginBottom: "1rem", color: "var(--white)" }}>
                {value.title}
              </h3>
              <p style={{ opacity: 0.95 }}>{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div
          style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
        >
          <h2>¿Listo para trabajar juntos?</h2>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
            Descubra cómo nuestro enfoque técnico especializado puede optimizar
            sus procesos industriales y generar valor para su empresa.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="accent"
              size="large"
              href={ctaWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 Conversemos
            </Button>
            <Button variant="secondary" size="large" href="/proyectos">
              Ver Nuestros Proyectos
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
