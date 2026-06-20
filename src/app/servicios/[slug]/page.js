import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { services, getServiceBySlug } from "@/content/services";
import { siteConfig } from "@/content/site";

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
  const ctaWhatsAppLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <main>
      {/* Breadcrumb + Hero */}
      <Section background="gray">
        <nav
          style={{
            fontSize: "0.875rem",
            color: "var(--gray-500)",
            marginBottom: "1.5rem",
          }}
        >
          <Link href="/">Inicio</Link> / <Link href="/servicios">Servicios</Link> /{" "}
          <span style={{ color: "var(--gray-700)" }}>{service.title}</span>
        </nav>
        <div style={{ maxWidth: "800px" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }} aria-hidden="true">
            {service.icon}
          </div>
          <h1>{service.title}</h1>
          <p style={{ fontSize: "1.25rem", color: "var(--gray-600)" }}>
            {service.description}
          </p>
        </div>
      </Section>

      {/* Características y Beneficios */}
      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
          }}
        >
          <div>
            <h2>Características</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                    color: "var(--gray-700)",
                  }}
                >
                  <span style={{ color: "var(--primary-blue)" }} aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Beneficios</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {service.benefits.map((benefit, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                    color: "var(--gray-700)",
                  }}
                >
                  <span style={{ color: "var(--success-green)" }} aria-hidden="true">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Tecnologías y Aplicaciones */}
      <Section background="gray">
        <h2 style={{ marginBottom: "1.5rem" }}>Tecnologías y Aplicaciones</h2>
        <div style={{ marginBottom: "1.5rem" }}>
          <Card.Tags tags={service.technologies} />
        </div>
        <p style={{ color: "var(--gray-600)" }}>
          <strong style={{ color: "var(--gray-700)" }}>Aplicaciones:</strong>{" "}
          {service.applications.join(" · ")}
        </p>
      </Section>

      {/* Otros servicios */}
      <Section>
        <h2 style={{ marginBottom: "1.5rem" }}>Otros servicios</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {otherServices.map((s) => (
            <Link
              key={s.id}
              href={`/servicios/${s.id}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                border: "1px solid var(--gray-200)",
                borderRadius: "0.5rem",
              }}
            >
              <span aria-hidden="true">{s.icon}</span> {s.title}
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ color: "var(--white)" }}>¿Le interesa este servicio?</h2>
          <p style={{ fontSize: "1.125rem", marginBottom: "2rem", opacity: 0.95 }}>
            Conversemos sobre cómo aplicarlo a su proceso.
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
            <Button variant="secondary" size="large" href="/contacto">
              📧 Contacto
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
