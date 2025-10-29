import type React from "react";
import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Script from "next/script";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Cyberllantas - Repuestos para Motos",
    template: "%s | Cyberllantas",
  },
  description:
    "Cyberllantas importa y distribuye repuestos, llantas y accesorios para motos de todas las marcas a nivel nacional. Calidad, precio y servicio para motociclistas y talleres.",
  generator: "Next.js + Vercel",
  keywords: [
    "repuestos para motos",
    "llantas para motos",
    "accesorios para motos",
    "Cyberllantas",
    "distribuidor de repuestos",
    "llantas de moto Colombia",
    "repuestos AKT Boxer Bajaj Pulsar",
  ],
  authors: [{ name: "Cyberllantas", url: "https://cyberllantas.co" }],
  creator: "Cyberllantas",
  publisher: "Cyberllantas",
  metadataBase: new URL("https://cyberllantas.co"),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://cyberllantas.co",
    siteName: "Cyberllantas",
    title: "Cyberllantas - Repuestos y Llantas para Motos",
    description:
      "Importamos y distribuimos repuestos, llantas y accesorios para motos a nivel nacional.",
    images: [
      {
        url: "/og-image.png", // ✅ Coloca aquí una imagen 1200x630 en /public
        width: 1200,
        height: 630,
        alt: "Cyberllantas - Repuestos y Llantas para Motos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cyberllantas",
    title: "Cyberllantas - Repuestos y Llantas para Motos",
    description:
      "Repuestos, llantas y accesorios para motos. Envíos a toda Colombia.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cyberllantas.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />

        {/* ✅ Datos estructurados Schema.org */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Cyberllantas",
              image: "https://cyberllantas.co/og-image.png",
              description:
                "Importamos y distribuimos repuestos para motos en toda Colombia.",
              url: "https://cyberllantas.co",
              telephone: "+573001234567",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
