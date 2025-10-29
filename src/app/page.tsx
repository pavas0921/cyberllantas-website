import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Package,
  Truck,
  Shield,
  Zap,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Cyberllantas | Repuestos de motos de alta velocidad",
  description:
    "Importamos y distribuimos repuestos para motos con cobertura nacional. Calidad, garantía y rapidez.",
  openGraph: {
    title: "Cyberllantas | Repuestos para motos",
    description:
      "Repuestos de alta velocidad para tu moto — calidad garantizada y envío nacional.",
    url: "https://cyberllantas.co",
    siteName: "Cyberllantas",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cyberllantas - Repuestos para motos de alta velocidad",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberllantas | Repuestos de motos",
    description:
      "Importamos y distribuimos repuestos de alta calidad para motos en Colombia.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-foreground">
      {/* Header/Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.7_0.2_195_/_0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,oklch(0.65_0.25_25_/_0.1),transparent_50%)]" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-sm font-medium text-primary">
                  Distribución Nacional
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black">
                Repuestos de{" "}
                <span className="glow-cyan text-primary">Alta Velocidad</span>{" "}
                para tu Moto
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Importamos y distribuimos repuestos para motos de todas las
                marcas. Calidad garantizada, entrega rápida y cobertura
                nacional.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 border-glow"
                >
                  Ver Catálogo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 bg-transparent"
                >
                  Contactar Ventas
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary glow-cyan">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">Productos</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-secondary glow-orange">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">Atención</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary glow-cyan">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">Garantía</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <Image
                src="/logo.jpeg"
                alt="Cyberllantas Repuestos para motos de de todas las marcas"
                width={600}
                height={600}
                className="relative z-10 w-full h-auto rounded-2xl border border-primary/30 border-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="servicios"
        className="py-20 px-4 bg-gradient-to-b from-black to-muted/5"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-balance">
              ¿Por qué elegir{" "}
              <span className="text-primary glow-cyan">Cyberllantas</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Somos líderes en distribución de repuestos con tecnología de punta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 border-primary/20 p-6 space-y-4 hover:border-primary/50 transition-all hover:border-glow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Amplio Inventario</h3>
              <p className="text-muted-foreground leading-relaxed">
                Más de 500 productos para todas las marcas de motos del mercado
              </p>
            </Card>

            <Card className="bg-card/50 border-secondary/20 p-6 space-y-4 hover:border-secondary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Truck className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Envío Nacional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Distribución rápida y segura a todo el país con tracking en
                tiempo real
              </p>
            </Card>

            <Card className="bg-card/50 border-primary/20 p-6 space-y-4 hover:border-primary/50 transition-all hover:border-glow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Garantía Total</h3>
              <p className="text-muted-foreground leading-relaxed">
                Todos nuestros productos cuentan con garantía de calidad
                certificada
              </p>
            </Card>

            <Card className="bg-card/50 border-secondary/20 p-6 space-y-4 hover:border-secondary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Entrega Rápida</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sistema de logística optimizado para entregas en tiempo récord
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-balance">
              Nuestros{" "}
              <span className="text-secondary glow-orange">Productos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Repuestos de alta calidad para mantener tu moto en óptimas
              condiciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Llantas y Neumáticos",
                desc: "Todas las medidas y marcas",
                img: "motorcycle tire on dark background",
              },
              {
                name: "Frenos y Discos",
                desc: "Máxima seguridad y rendimiento",
                img: "motorcycle brake disc",
              },
              {
                name: "Cadenas y Piñones",
                desc: "Transmisión perfecta",
                img: "motorcycle chain and sprocket",
              },
              {
                name: "Filtros y Aceites",
                desc: "Mantenimiento premium",
                img: "motorcycle oil filter",
              },
              {
                name: "Suspensión",
                desc: "Amortiguadores y horquillas",
                img: "motorcycle suspension",
              },
              {
                name: "Accesorios",
                desc: "Todo lo que necesitas",
                img: "motorcycle accessories",
              },
            ].map((product, i) => (
              <Card
                key={i}
                className="bg-card/50 border-primary/20 overflow-hidden group hover:border-primary/50 transition-all hover:border-glow"
              >
                <div className="aspect-video bg-muted/20 relative overflow-hidden">
                  <Image
                    src="/og-image.png"
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-muted-foreground">{product.desc}</p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                    aria-label={`Ver más sobre ${product.name}`}
                  >
                    Ver más <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section
        id="marcas"
        className="py-20 px-4 bg-gradient-to-b from-black to-muted/5"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-balance">
              Trabajamos con las{" "}
              <span className="text-primary glow-cyan">Mejores Marcas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Repuestos originales y compatibles para todas las marcas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              "Honda",
              "Yamaha",
              "Suzuki",
              "Kawasaki",
              "BMW",
              "Ducati",
              "KTM",
              "Harley",
              "Triumph",
              "Royal Enfield",
              "Bajaj",
              "TVS",
            ].map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center p-6 bg-card/30 border border-primary/10 rounded-lg hover:border-primary/30 transition-all"
              >
                <span className="text-lg font-bold text-muted-foreground hover:text-primary transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.7_0.2_195_/_0.2),transparent_70%)]" />

        <div className="container mx-auto relative z-10">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 p-12 md:p-16 text-center space-y-8 border-glow">
            <h2 className="text-4xl md:text-5xl font-black text-balance">
              ¿Listo para acelerar tu negocio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Contáctanos hoy y descubre por qué somos la mejor opción en
              repuestos para motos
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8"
                aria-label="Solicitar Cotización"
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 bg-transparent"
                aria-label="Ver Catálogo Completo"
              >
                Ver Catálogo Completo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-muted/5">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-balance">
                  Contáctanos
                </h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  Estamos aquí para ayudarte con cualquier consulta sobre
                  nuestros productos
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+57 300 123 4567</p>
                    <p className="text-muted-foreground">+57 300 765 4321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      ventas@cyberllantas.com
                    </p>
                    <p className="text-muted-foreground">
                      info@cyberllantas.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Distribución Nacional
                    </p>
                    <p className="text-muted-foreground">Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-card/50 border-primary/20 p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                  aria-label="Enviar Mensaje"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-12 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.jpeg"
                  alt="Cyberllantas"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold glow-cyan">
                  CYBERLLANTAS
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Líderes en importación y distribución de repuestos para motos
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Productos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors"
                    title="Ver nuestros productos de llantas"
                  >
                    Llantas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors"
                    title="Ver nuestros productos de frenos"
                  >
                    Frenos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors"
                    title="Ver todas las cadenas"
                  >
                    Cadenas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors"
                    title="Accesorios"
                  >
                    Accesorios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Marcas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Garantía
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Cyberllantas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
