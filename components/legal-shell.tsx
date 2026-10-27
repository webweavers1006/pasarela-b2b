import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";

export function LegalShell({
  title,
  eyebrow,
  updated,
  intro,
  children,
}: {
  title: string;
  eyebrow: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[680px] paper-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_0%,black,transparent_82%)]"
      />

      <header className="container-x relative flex h-24 items-center justify-between gap-4 border-b border-ink/15">
        <Logo />
        <Link
          href="/"
          className="group inline-flex items-center gap-2 border border-ink/20 px-3.5 py-2 font-mono text-[8.5px] uppercase tracking-[0.1em] text-smoke transition-colors hover:border-ink hover:text-ink"
        >
          <ArrowLeft className="size-3 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Volver al inicio
        </Link>
      </header>

      <main className="container-x relative py-16 sm:py-24">
        <div className="max-w-[780px]">
          <p className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-signal-700">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,5.6vw,4.2rem)] font-bold uppercase leading-[0.92] tracking-[-0.045em] text-ink">
            {title}
          </h1>
          <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.1em] text-smoke">
            Última actualización: {updated}
          </p>
          <p className="mt-8 max-w-[680px] text-[13.5px] leading-[1.8] text-smoke">
            {intro}
          </p>

          <div className="mt-12 space-y-9 border-t border-ink/15 pt-9">
            {children}
          </div>

          <div className="mt-12 border border-ink/15 bg-surface p-5">
            <p className="text-[12px] leading-[1.75] text-smoke">
              ¿Tienes preguntas sobre este documento? Escríbenos a{" "}
              <a
                href="mailto:legal@sencillopay.com"
                className="font-medium text-signal-700 underline decoration-signal-600/30 underline-offset-4 transition-colors hover:text-signal-600"
              >
                legal@sencillopay.com
              </a>{" "}
              y te responderemos en un plazo máximo de 10 días hábiles.
            </p>
          </div>
        </div>
      </main>

      <footer className="container-x relative flex flex-col gap-3 border-t border-ink/15 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-smoke">
          © 2026 sencillopay, C.A. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4 font-mono text-[8px] uppercase tracking-[0.08em] text-smoke">
          <Link href="/privacidad" className="transition-colors hover:text-ink">
            Privacidad
          </Link>
          <Link href="/terminos" className="transition-colors hover:text-ink">
            Términos
          </Link>
          <span>Caracas · Venezuela</span>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-display text-[clamp(1.25rem,2.4vw,1.55rem)] font-bold uppercase leading-[1.1] tracking-[-0.02em] text-ink">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[12.5px] leading-[1.85] text-smoke">
        {children}
      </div>
    </section>
  );
}
