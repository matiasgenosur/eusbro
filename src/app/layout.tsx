import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EUSBRO | Expertos en Techos de Alta Durabilidad",
  description:
    "Reparación, mantención y construcción de techos en casas, edificios y propiedades industriales. Materiales de alta gama importados de Italia y EE.UU. Garantía de hasta 3 años.",
  keywords: [
    "techos",
    "reparación de techos",
    "construcción de techos",
    "impermeabilización",
    "techos industriales",
    "mantención de techos",
    "Chile",
  ],
  openGraph: {
    title: "EUSBRO | Expertos en Techos de Alta Durabilidad",
    description:
      "Reparación, mantención y construcción de techos con materiales de alta gama. Garantía de hasta 3 años.",
    type: "website",
    locale: "es_CL",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
