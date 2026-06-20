import Link from "next/link";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { siteConfig } from "@/content/site";
import { featuredServices } from "@/content/services";
import { featuredProjects } from "@/content/projects";
import { featuredIndustries } from "@/content/industries";

export default function Home() {
  const ctaWhatsAppLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <main>
      {/* Hero Section */}
      <Section spacing="spaced" background="gray">
        <div
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          <h1 style={{ marginBottom: "1.5rem" }}>
            Especialistas en{" "}
            <span style={{ color: "var(--primary-blue)" }}>
              Automatización Industrial
            </span>
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              marginBottom: "2rem",
              color: "var(--gray-600)",
            }}
          >
            Con más de 20 años instalando, renovando y mejorando procesos
            industriales. Soluciones integrales para la minería y la industria.
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
              📱 Cotizar Proyecto
            </Button>
            <Button variant="secondary" size="large" href="/servicios">
              Ver Servicios
            </Button>
          </div>
        </div>
      </Section>

      {/* Stats Row */}
      <Section background="primary" spacing="tight">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {siteConfig.stats.map((stat, index) => (
            <div key={index}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  marginBottom: "0.25rem",
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Do */}
      <Section>
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            maxWidth: "600px",
            margin: "0 auto 3rem",
          }}
        >
          <h2>¿Qué hacemos?</h2>
          <p style={{ fontSize: "1.125rem" }}>
            Desarrollamos soluciones de automatización industrial que optimizan
            procesos, reducen costos operativos y mejoran la eficiencia
            productiva de su empresa.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎯</div>
            <h3>Análisis y Diagnóstico</h3>
            <p>
              Evaluamos sus procesos actuales para identificar oportunidades de
              mejora y optimización.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚙️</div>
            <h3>Diseño e Implementación</h3>
            <p>
              Desarrollamos e implementamos sistemas de control personalizados
              para sus necesidades específicas.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📈</div>
            <h3>Optimización Continua</h3>
            <p>
              Brindamos soporte continuo para mantener y mejorar el rendimiento
              de sus sistemas.
            </p>
          </div>
        </div>
      </Section>

      {/* Featured Services */}
      <Section background="gray">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2>Nuestros Servicios</h2>
          <p style={{ fontSize: "1.125rem" }}>
            Soluciones especializadas en control e instrumentación industrial
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {featuredServices.map((service) => (
            <Card key={service.id} variant="service">
              <Card.Header>
                <Card.Icon>{service.icon}</Card.Icon>
                <Card.Title>{service.title}</Card.Title>
                <Card.Description>{service.shortDescription}</Card.Description>
              </Card.Header>
              <Card.Body>
                <Card.Tags tags={service.technologies.slice(0, 3)} />
                <Card.Actions>
                  <Button variant="primary" href={`/servicios/${service.id}`}>
                    Ver Detalles
                  </Button>
                </Card.Actions>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Button variant="secondary" href="/servicios">
            Ver Todos los Servicios
          </Button>
        </div>
      </Section>

      {/* Industries */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2>Industrias que Atendemos</h2>
          <p style={{ fontSize: "1.125rem" }}>
            Experiencia comprobada en sectores industriales exigentes
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {featuredIndustries.map((industry) => (
            <Card key={industry.id} variant="industry">
              <Card.Header>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span style={{ fontSize: "2rem" }}>{industry.icon}</span>
                  <div>
                    <Card.Title
                      style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}
                    >
                      {industry.name}
                    </Card.Title>
                    <Card.Description
                      style={{ fontSize: "0.875rem", margin: 0 }}
                    >
                      {industry.description}
                    </Card.Description>
                  </div>
                </div>
              </Card.Header>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section background="gray">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2>Proyectos Destacados</h2>
          <p style={{ fontSize: "1.125rem" }}>
            Casos de éxito que demuestran nuestro expertise técnico
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {featuredProjects.map((project) => (
            <Card key={project.id} variant="project">
              <Card.Header>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <Card.Title style={{ flex: 1 }}>{project.title}</Card.Title>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--gray-500)",
                      whiteSpace: "nowrap",
                      marginLeft: "1rem",
                    }}
                  >
                    {project.year}
                  </span>
                </div>
                <Card.Description>{project.summary}</Card.Description>
              </Card.Header>
              <Card.Body>
                <div style={{ marginBottom: "1rem" }}>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--gray-500)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <strong>Cliente:</strong> {project.client}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--gray-500)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <strong>Industria:</strong> {project.industry}
                  </div>
                  <div
                    style={{ fontSize: "0.875rem", color: "var(--gray-500)" }}
                  >
                    <strong>Duración:</strong> {project.duration}
                  </div>
                </div>
                <Card.Tags tags={project.tags.slice(0, 3)} />
                <Card.Actions>
                  <Button variant="primary" href={`/proyectos/${project.id}`}>
                    Ver Caso de Éxito
                  </Button>
                </Card.Actions>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Button variant="secondary" href="/proyectos">
            Ver Todos los Proyectos
          </Button>
        </div>
      </Section>

      {/* CTA Final */}
      <Section background="primary" spacing="spaced">
        <div
          style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
        >
          <h2 style={{ marginBottom: "1.5rem" }}>
            ¿Listo para optimizar sus procesos industriales?
          </h2>
          <p
            style={{ fontSize: "1.25rem", marginBottom: "2rem", opacity: 0.95 }}
          >
            Nuestro equipo de expertos está preparado para analizar su situación
            y proponer soluciones que generen valor inmediato para su empresa.
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
              📱 Agendar Asesoría Gratuita
            </Button>
            <Button variant="secondary" size="large" href="/contacto">
              📧 Enviar Consulta
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
