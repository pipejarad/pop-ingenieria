import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Casos de Éxito - Proyectos de Automatización Industrial",
  description:
    "Conozca nuestros casos de éxito en automatización industrial. Proyectos realizados en minería, energía, petroquímica y manufactura.",
};

export default function ProyectosPage() {
  return (
    <main>
      {/* Header */}
      <Section background="gray">
        <div
          style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
        >
          <h1>Nuestros Proyectos</h1>
          <p style={{ fontSize: "1.25rem" }}>
            Casos de éxito que demuestran nuestro expertise técnico y capacidad
            para generar valor en proyectos de automatización industrial.
          </p>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project) => (
            <Card key={project.id} variant="project">
              <Card.Header>
                <Card.Title>{project.title}</Card.Title>
              </Card.Header>
              {project.technologies.length > 0 && (
                <Card.Body>
                  <Card.Tags tags={project.technologies} />
                </Card.Body>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section background="primary">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ color: "var(--white)" }}>
            Impacto de Nuestros Proyectos
          </h2>
          <p style={{ fontSize: "1.125rem", opacity: 0.95 }}>
            Resultados medibles que demuestran el valor de la automatización
            industrial
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              +25%
            </div>
            <div
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "0.25rem",
              }}
            >
              Eficiencia Promedio
            </div>
            <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>
              Mejora en procesos optimizados
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              40%
            </div>
            <div
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "0.25rem",
              }}
            >
              Reducción Costos
            </div>
            <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>
              Ahorro operacional típico
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              99%
            </div>
            <div
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "0.25rem",
              }}
            >
              Disponibilidad
            </div>
            <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>
              Sistemas implementados
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              18
            </div>
            <div
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                marginBottom: "0.25rem",
              }}
            >
              Meses Promedio
            </div>
            <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>
              ROI recuperado
            </div>
          </div>
        </div>
      </Section>

      {/* Industries Served */}
      <Section>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2>Industrias Atendidas</h2>
          <p style={{ fontSize: "1.125rem" }}>
            Experiencia comprobada en sectores industriales críticos
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          {[
            { icon: "⛏️", name: "Minería", count: "8" },
            { icon: "⚡", name: "Energía", count: "6" },
            { icon: "🛢️", name: "Petroquímica", count: "4" },
            { icon: "🏭", name: "Manufactura", count: "5" },
            { icon: "🥫", name: "Alimentaria", count: "3" },
            { icon: "💧", name: "Agua", count: "2" },
          ].map((industry, index) => (
            <div key={index} style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
                {industry.icon}
              </div>
              <h3 style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>
                {industry.name}
              </h3>
              <div
                style={{
                  color: "var(--primary-blue)",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                }}
              >
                {industry.count} proyectos
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <div
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
        >
          <h2>¿Su proyecto será el próximo caso de éxito?</h2>
          <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
            Cada proyecto es una oportunidad para demostrar nuestro expertise
            técnico. Conversemos sobre sus desafíos y objetivos.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button variant="accent" size="large" href="/contacto">
              📧 Discutir Mi Proyecto
            </Button>
            <Button variant="secondary" size="large" href="/servicios">
              Ver Nuestros Servicios
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
