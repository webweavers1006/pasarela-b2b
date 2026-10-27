import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sencillopay.com"),
  title: "sencillopay — Conciliación directa, cero custodia de fondos",
  description:
    "Conectamos la cuenta bancaria de tu empresa vía API o C2P, conciliamos cada pago por referencia, monto y RIF/cédula y enviamos comprobante y factura por WhatsApp. El dinero entra directo a tu cuenta: nunca pasa por sencillopay.",
  keywords: [
    "conciliación directa de pagos",
    "cero custodia de fondos",
    "SaaS de conciliación Venezuela",
    "integración bancaria API",
    "C2P",
    "Pago Móvil",
    "cobros por WhatsApp",
    "conciliación B2B",
  ],
  authors: [{ name: "sencillopay" }],
  openGraph: {
    type: "website",
    locale: "es_VE",
    siteName: "sencillopay",
    title: "sencillopay — El dinero directo a tu cuenta. La conciliación, en automático.",
    description:
      "Integración directa con tu banco vía API o C2P. Cero custodia, cero comisiones sobre tus ventas y conciliación automática en milisegundos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "sencillopay — Conciliación directa, cero custodia",
    description:
      "Tu dinero entra directo a tu cuenta. Nosotros conectamos los datos, conciliamos y automatizamos WhatsApp y ERP.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f2efe7",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-VE"
      className={`${plexSans.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body className="min-h-dvh bg-paper text-ink antialiased">
        {children}
        <div
          aria-hidden="true"
          className="grain pointer-events-none fixed inset-0 z-[100] opacity-[0.022] mix-blend-multiply"
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
