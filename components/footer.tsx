import Link from "next/link";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/logo";
import { Stamp } from "@/components/stamp";

const PRODUCT_LINKS = [
  { label: "El modelo", href: "/#modelo" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Simulador", href: "/#simulador" },
  { label: "Beneficios", href: "/#beneficios" },
  { label: "Precios", href: "/#precios" },
];

const COMPANY_LINKS = [
  { label: "Cero custodia", href: "/#modelo" },
  { label: "Integraciones", href: "/#integraciones" },
  { label: "Seguridad", href: "/#seguridad" },
  { label: "Contacto", href: "/#contacto" },
  { label: "Trabaja con nosotros", href: "mailto:talento@sencillopay.com" },
];

const LEGAL_LINKS = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
  { label: "Cookies", href: "/privacidad#cookies" },
  { label: "Aviso legal", href: "/terminos#legal" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-bone/55">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1 text-[10.5px] text-bone/55 transition-colors hover:text-bone"
            >
              {link.label}
              <ArrowUpRight className="size-2.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-60" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/15 bg-ink text-bone">
      <div className="container-x relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_0.7fr] lg:gap-8 lg:py-16">
          <div className="max-w-[340px]">
            <div className="flex items-start justify-between gap-4">
              <Logo tone="dark" />
              <Stamp id="footer" className="hidden w-[88px] shrink-0 sm:block" tone="dark" />
            </div>
            <p className="mt-5 text-[12px] leading-[1.75] text-bone/55">
              La capa de inteligencia y conciliación directa para empresas. El
              dinero entra a tu cuenta; nosotros hacemos que todo cuadre.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 border border-signal-500/30 bg-signal-500/10 px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.08em] text-signal-300">
              <ShieldCheck className="size-3" strokeWidth={2} />
              Cero custodia · 0% comisión sobre ventas
            </div>

            <div className="mt-5 flex flex-col gap-1">
              <a
                href="mailto:hola@sencillopay.com"
                className="flex min-h-6 w-fit items-center text-[10.5px] text-bone/55 transition-colors hover:text-bone"
              >
                hola@sencillopay.com
              </a>
              <a
                href="https://wa.me/584245550184"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-6 w-fit items-center gap-1.5 text-[10.5px] text-bone/55 transition-colors hover:text-bone"
              >
                <MessageCircle className="size-3 text-wa/70" />
                +58 424 555 0184
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.08em] text-bone/55">
              <span className="flex overflow-hidden" aria-hidden="true">
                <span className="h-2.5 w-1 bg-[#f9d442]" />
                <span className="h-2.5 w-1 bg-[#1b4a9c]" />
                <span className="h-2.5 w-1 bg-[#c8323a]" />
              </span>
              Hecho en Caracas para toda Venezuela
            </div>
          </div>

          <FooterColumn title="Producto" links={PRODUCT_LINKS} />
          <FooterColumn title="Empresa" links={COMPANY_LINKS} />
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        <div className="border-t border-bone/15 pt-7">
          <p className="font-display text-[clamp(2.8rem,12vw,10rem)] font-bold uppercase leading-[0.8] tracking-[-0.06em] text-bone">
            SENCILLO<span className="text-signal-500">PAY</span>
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-bone/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-bone/55">
            © 2026 sencillopay, C.A. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.08em] text-bone/55">
            <span className="flex items-center gap-1.5">
              <span className="size-1 bg-signal-500" />
              Caracas · Venezuela
            </span>
            <a href="#inicio" className="transition-colors hover:text-bone">
              Volver arriba ↑
            </a>
          </div>
        </div>

        <div className="border-t border-bone/10 py-6">
          <p className="max-w-[920px] text-[8px] leading-[1.7] text-bone/55">
            sencillopay es una plataforma de software (SaaS). No presta servicios
            de intermediación financiera, recaudación ni liquidación, y no capta,
            retiene ni custodia fondos de terceros. Los pagos se abonan
            directamente en la cuenta bancaria del comercio. Las marcas bancarias
            mencionadas son propiedad de sus respectivos titulares y se usan
            únicamente como referencia de compatibilidad. Las simulaciones son
            demostrativas y no constituyen transacciones reales. Condiciones
            sujetas a evaluación comercial y técnica.
          </p>
        </div>
      </div>
    </footer>
  );
}
