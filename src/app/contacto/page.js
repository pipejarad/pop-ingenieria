import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Contacto - Asesoría en Automatización Industrial",
  description:
    "Contacte con nuestros expertos en automatización industrial. WhatsApp, email o formulario de consulta técnica.",
};

export default function ContactoPage() {
  const ctaWhatsAppLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <main>
      {/* Header */}
      <Section background="gray">
        <div
          style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
        >
          <h1>Contáctenos</h1>
          <p style={{ fontSize: "1.25rem" }}>
            ¿Necesita optimizar sus procesos industriales? Nuestro equipo de
            expertos está listo para analizar su situación y proponer soluciones
            efectivas.
          </p>
        </div>
      </Section>

      <Section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Contact Methods */}
          <div>
            <h2 style={{ marginBottom: "2rem" }}>Métodos de Contacto</h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* WhatsApp */}
              <Card>
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>📱</span>
                    <div>
                      <h3 style={{ margin: 0, marginBottom: "0.25rem" }}>
                        WhatsApp
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.875rem",
                          color: "var(--gray-600)",
                        }}
                      >
                        Respuesta rápida para consultas
                      </p>
                    </div>
                  </div>
                  <p style={{ marginBottom: "1rem" }}>
                    La forma más rápida de contactar con nosotros. Reciba
                    asesoría técnica inmediata sobre sus proyectos.
                  </p>
                  <Button
                    variant="accent"
                    href={ctaWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                  >
                    Abrir WhatsApp
                  </Button>
                </Card.Body>
              </Card>

              {/* Email */}
              <Card>
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>📧</span>
                    <div>
                      <h3 style={{ margin: 0, marginBottom: "0.25rem" }}>
                        Email
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.875rem",
                          color: "var(--gray-600)",
                        }}
                      >
                        Para consultas técnicas detalladas
                      </p>
                    </div>
                  </div>
                  <p style={{ marginBottom: "1rem" }}>
                    Envíe información detallada de su proyecto para una
                    respuesta técnica completa y personalizada.
                  </p>
                  <Button
                    variant="primary"
                    href={`mailto:${siteConfig.email}`}
                    fullWidth
                  >
                    Enviar Email
                  </Button>
                </Card.Body>
              </Card>

              {/* Phone */}
              <Card>
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ fontSize: "2.5rem" }}>📞</span>
                    <div>
                      <h3 style={{ margin: 0, marginBottom: "0.25rem" }}>
                        Teléfono
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.875rem",
                          color: "var(--gray-600)",
                        }}
                      >
                        Para consultas urgentes
                      </p>
                    </div>
                  </div>
                  <p style={{ marginBottom: "1rem" }}>
                    Llame directamente para emergencias o consultas que
                    requieran atención inmediata.
                  </p>
                  <Button
                    variant="secondary"
                    href={`tel:${siteConfig.phone}`}
                    fullWidth
                  >
                    Llamar Ahora
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 style={{ marginBottom: "2rem" }}>Formulario de Consulta</h2>

            <Card>
              <Card.Body>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <label
                        htmlFor="nombre"
                        style={{
                          display: "block",
                          marginBottom: "0.5rem",
                          fontWeight: 600,
                          color: "var(--gray-700)",
                        }}
                      >
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          border: "1px solid var(--gray-300)",
                          borderRadius: "0.5rem",
                          fontSize: "1rem",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="empresa"
                        style={{
                          display: "block",
                          marginBottom: "0.5rem",
                          fontWeight: 600,
                          color: "var(--gray-700)",
                        }}
                      >
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          border: "1px solid var(--gray-300)",
                          borderRadius: "0.5rem",
                          fontSize: "1rem",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          display: "block",
                          marginBottom: "0.5rem",
                          fontWeight: 600,
                          color: "var(--gray-700)",
                        }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          border: "1px solid var(--gray-300)",
                          borderRadius: "0.5rem",
                          fontSize: "1rem",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefono"
                        style={{
                          display: "block",
                          marginBottom: "0.5rem",
                          fontWeight: 600,
                          color: "var(--gray-700)",
                        }}
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        style={{
                          width: "100%",
                          padding: "0.75rem",
                          border: "1px solid var(--gray-300)",
                          borderRadius: "0.5rem",
                          fontSize: "1rem",
                          fontFamily: "inherit",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="servicio"
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: 600,
                        color: "var(--gray-700)",
                      }}
                    >
                      Servicio de Interés
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid var(--gray-300)",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                        fontFamily: "inherit",
                        backgroundColor: "var(--white)",
                      }}
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="control-instrumentacion">
                        Control e Instrumentación
                      </option>
                      <option value="variadores-velocidad">
                        Variadores de Velocidad
                      </option>
                      <option value="reles-inteligentes">
                        Protección con Relés
                      </option>
                      <option value="plc-dcs">Programación PLC/DCS</option>
                      <option value="integracion-sistemas">
                        Integración de Sistemas
                      </option>
                      <option value="consultoria-asesoria">
                        Consultoría Técnica
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="mensaje"
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontWeight: 600,
                        color: "var(--gray-700)",
                      }}
                    >
                      Descripción del Proyecto *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="5"
                      required
                      placeholder="Describa su proyecto, proceso actual, desafíos técnicos y objetivos esperados..."
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid var(--gray-300)",
                        borderRadius: "0.5rem",
                        fontSize: "1rem",
                        fontFamily: "inherit",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      padding: "1rem",
                      backgroundColor: "var(--gray-100)",
                      borderRadius: "0.5rem",
                      fontSize: "0.875rem",
                      color: "var(--gray-600)",
                    }}
                  >
                    <p style={{ margin: 0 }}>
                      <strong>Nota:</strong> Este formulario está configurado
                      para envío por email. Para una implementación completa, se
                      recomienda integrar con servicios como Formspree, Netlify
                      Forms o su backend personalizado.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    fullWidth
                  >
                    Enviar Consulta
                  </Button>
                </form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Section>

      {/* Additional Info */}
      <Section background="gray">
        <div style={{ textAlign: "center" }}>
          <h2>Información Adicional</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            <div>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⏰</div>
              <h3>Horario de Atención</h3>
              <p>
                Lunes a Viernes: 8:00 - 18:00
                <br />
                Emergencias 24/7
              </p>
            </div>
            <div>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📍</div>
              <h3>Ubicación</h3>
              <p>
                {siteConfig.address}
                <br />
                Atendemos todo Chile
              </p>
            </div>
            <div>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚡</div>
              <h3>Respuesta Rápida</h3>
              <p>
                WhatsApp: Inmediato
                <br />
                Email: 24 horas
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
