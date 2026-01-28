'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from './Container'
import Button from './Button'
import { siteConfig } from '@/content/site'
import styles from './Header.module.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isActive = (href) => pathname === href

  const ctaWhatsAppLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              POP
            </div>
            <span>Ingeniería</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="accent" 
              href={ctaWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              📱 Cotizar / Asesoría
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavLinks}>
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.active : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className={styles.mobileCta}>
            <Button 
              variant="accent" 
              href={ctaWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              onClick={() => setMobileMenuOpen(false)}
            >
              📱 Cotizar / Asesoría
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}