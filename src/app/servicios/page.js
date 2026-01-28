import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { services } from "@/content/services";

export const metadata = {
  title: "Servicios de Automatización Industrial",
  description:
    "Servicios especializados en control e instrumentación industrial, PLCs, DCS, variadores de velocidad y protección con relés inteligentes.",
};

export default function ServiciosPage() {
  return (
    <main>
      {/* Header */}
      <Section background="gray">
        <div
          style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
        >
          <h1>Nuestros Servicios</h1>
          <p style={{ fontSize: "1.25rem" }}>
            Soluciones especializadas en automatización industrial con más de 15
            años de experiencia. Brindamos servicios integrales para optimizar
            procesos industriales.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map((service) => (
            <Card key={service.id} variant="service">
              <Card.Header>
                <Card.Icon>{service.icon}</Card.Icon>
                <Card.Title>{service.title}</Card.Title>
                <Card.Description>{service.description}</Card.Description>
              </Card.Header>
              <Card.Body>
                <div style={{ marginBottom: "1rem" }}>
                  <h4
                    style={{
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                      color: "var(--gray-700)",
                    }}
                  >
                    Beneficios principales:
                  </h4>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: "1.25rem",
                      color: "var(--gray-600)",
                    }}
                  >
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} style={{ marginBottom: "0.25rem" }}>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Card.Tags tags={service.technologies.slice(0, 4)} />

                <div style={{ marginBottom: "1rem" }}>
                  <div
                    style={{ fontSize: "0.875rem", color: "var(--gray-500)" }}
                  >
                    <strong>Aplicaciones:</strong>{" "}
                    {service.applications.join(", ")}
                  </div>
                </div>

                <Card.Actions>
                  <Button variant="primary" href={`/servicios/${service.id}`}>
                    Ver Detalles
                  </Button>
                </Card.Actions>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
        >
          <h2>¿Necesita una solución personalizada?</h2>
          <p
            style={{
              fontSize: "1.125rem",
              marginBottom: "2rem",
              opacity: 0.95,
            }}
          >
            Cada proceso industrial es único. Contacte con nuestros expertos
            para desarrollar una solución que se adapte perfectamente a sus
            necesidades.
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
              📧 Consulta Técnica
            </Button>
            <Button variant="secondary" size="large" href="/proyectos">
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
