"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-black/80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/og-image.png"
            alt="Repuestos para motos de alta velocidad de Cyberllantas"
            width={50}
            height={50}
            className="rounded-lg"
            priority
          />
          <span className="text-2xl font-bold tracking-wider glow-cyan">
            CYBERLLANTAS
          </span>
        </div>

        {/* Menú de escritorio */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#productos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Productos
          </a>
          <a
            href="#servicios"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Servicios
          </a>
          <a
            href="#marcas"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Marcas
          </a>
          <a
            href="#contacto"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contacto
          </a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Cotizar Ahora
          </Button>
        </div>

        {/* Botón hamburguesa móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-primary/20">
          <div className="flex flex-col items-center py-4 gap-4">
            <a
              href="#productos"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </a>
            <a
              href="#servicios"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#marcas"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Marcas
            </a>
            <a
              href="#contacto"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Cotizar Ahora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
