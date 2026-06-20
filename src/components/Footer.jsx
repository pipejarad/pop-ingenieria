import Link from 'next/link'
import Container from './Container'
import { siteConfig } from '@/content/site'
import { services } from '@/content/services'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const ctaWhatsAppLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
  
  // Servicios destacados para el footer
  const footerServices = services.filter(service => service.featured).slice(0, 4)

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            {/* Brand Section */}
            <div className={styles.footerBrand}>
              <div className={styles.brandInfo}>
                <div className={styles.logoIcon}>
                  POP
                </div>
                <div>
                  <div className={styles.brandName}>Ingeniería</div>
                  <div className={styles.brandTagline}>{siteConfig.tagline}</div>
                </div>
              </div>
              
              <p className={styles.brandDescription}>
                Especialistas en control e instrumentación industrial con más de 20 años de experiencia. 
                Brindamos soluciones integrales para optimizar procesos industriales en diversos sectores.
              </p>
              
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span>📧</span>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </div>
                <div className={styles.contactItem}>
                  <span>📱</span>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                </div>
                <div className={styles.contactItem}>
                  <span>📍</span>
                  <span>{siteConfig.address}</span>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Servicios</h4>
              <ul className={styles.footerLinks}>
                {footerServices.map((service) => (
                  <li key={service.id}>
                    <Link href={`/servicios/${service.id}`} className={styles.footerLink}>
                      {service.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/servicios" className={styles.footerLink}>
                    Ver todos los servicios →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Empresa</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/acerca-de" className={styles.footerLink}>
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="/proyectos" className={styles.footerLink}>
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className={styles.footerLink}>
                    Contacto
                  </Link>
                </li>
                <li>
                  <a 
                    href={ctaWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>

            {/* Industries Section */}
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Industrias</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <span className={styles.footerLink}>Minería</span>
                </li>
                <li>
                  <span className={styles.footerLink}>Energía</span>
                </li>
                <li>
                  <span className={styles.footerLink}>Petroquímica</span>
                </li>
                <li>
                  <span className={styles.footerLink}>Manufactura</span>
                </li>
                <li>
                  <span className={styles.footerLink}>Alimentaria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © {currentYear} POP Ingeniería. Todos los derechos reservados.
          </div>
          
          <div className={styles.socialLinks}>
            <a 
              href={`mailto:${siteConfig.email}`}
              className={styles.socialLink}
              aria-label="Correo electrónico"
            >
              📧
            </a>
            <a 
              href={ctaWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="WhatsApp"
            >
              📱
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}