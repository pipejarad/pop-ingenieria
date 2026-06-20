"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { siteConfig } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group min-w-0">
          <span
            aria-hidden
            className="grid place-items-center h-9 w-9 rounded-lg bg-brand text-white font-bold text-sm shrink-0"
          >
            P
          </span>
          <span className="font-semibold text-gray-900 tracking-tight truncate">
            POP Ingeniería
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Principal">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-gray-600 hover:text-brand transition-colors rounded-md"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="primary"
            size="md"
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar
          </Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-gray-700"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <Container className="py-4 flex flex-col gap-1">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Cotizar Proyecto
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
