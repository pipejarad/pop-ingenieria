import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Casos de Éxito - Proyectos de Automatización Industrial",
  description:
    "Conozca nuestros proyectos de automatización industrial realizados en minería, energía, forestal e industria en general.",
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
            Una muestra de los proyectos en los que hemos instalado, renovado y
            puesto en marcha sistemas de automatización y control industrial.
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
