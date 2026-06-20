import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "./Container";
import { siteConfig } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <Container className="py-14 grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span
              aria-hidden
              className="grid place-items-center h-9 w-9 rounded-lg bg-brand text-white font-bold text-sm"
            >
              P
            </span>
            <span className="font-semibold text-gray-900">POP Ingeniería</span>
          </div>
          <p className="text-sm text-gray-600 max-w-xs">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 mb-4">
            Navegación
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {siteConfig.navigation
              .filter((i) => i.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-brand">
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 mb-4">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 text-gray-400 shrink-0" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 text-gray-400 shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 text-gray-400 shrink-0" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-brand">
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-gray-200">
        <Container className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {year} POP Ingeniería. Todos los derechos reservados.</p>
          <p>{siteConfig.address}</p>
        </Container>
      </div>
    </footer>
  );
}
