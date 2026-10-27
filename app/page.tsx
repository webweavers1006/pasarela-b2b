import { Benefits } from "@/components/benefits";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { ProblemSolution } from "@/components/problem-solution";
import { Simulator } from "@/components/simulator";
import { SiteNav } from "@/components/site-nav";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "sencillopay",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Plataforma SaaS de integración directa y conciliación de pagos para empresas en Venezuela. Conecta la cuenta bancaria vía API o C2P, concilia por referencia, monto y RIF/cédula y automatiza comprobantes y facturas por WhatsApp. No recibe, retiene ni custodia fondos.",
  featureList: [
    "Integración bancaria directa vía API o C2P",
    "Cero custodia de fondos",
    "Conciliación por referencia, monto y RIF/cédula",
    "Comprobante y factura automática por WhatsApp",
    "Webhooks y sincronización con ERP",
  ],
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "USD",
    description:
      "Suscripción SaaS desde USD 79/mes según volumen de conciliaciones y sucursales. Sin comisión sobre las ventas.",
  },
  areaServed: {
    "@type": "Country",
    name: "Venezuela",
  },
  provider: {
    "@type": "Organization",
    name: "sencillopay, C.A.",
    areaServed: "Venezuela",
  },
};

export default function Home() {
  return (
    <>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-none focus:bg-ink focus:px-4 focus:py-2 focus:text-[12px] focus:font-medium focus:text-bone"
      >
        Saltar al contenido
      </a>
      <SiteNav />
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Simulator />
        <Benefits />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
