import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { Stamp } from "@/components/stamp";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe o cambió de lugar.",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 paper-grid opacity-50 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,black,transparent_82%)]"
      />

      <header className="container-x relative flex h-24 items-center justify-between border-b border-ink/15">
        <Logo />
        <Link
          href="/"
          className="group inline-flex items-center gap-2 border border-ink/20 px-3.5 py-2 font-mono text-[8.5px] uppercase tracking-[0.1em] text-smoke transition-colors hover:border-ink hover:text-ink"
        >
          <ArrowLeft className="size-3 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Volver al inicio
        </Link>
      </header>

      <div className="container-x relative flex flex-1 flex-col justify-center py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal-700">
              Error 404
            </p>
            <h1 className="mt-6 max-w-[780px] font-display text-[clamp(3rem,8.2vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.05em] text-ink">
              Esta página
              <br />
              <span className="text-signal-600">no cuadra.</span>
            </h1>
            <p className="mt-7 max-w-[460px] text-[14px] leading-[1.75] text-smoke">
              El enlace que buscas no existe, cambió de lugar o se fue con la
              conciliación manual. Volvamos a lo importante.
            </p>
            <Link
              href="/"
              className="group mt-8 inline-flex h-12 items-center gap-4 bg-ink pl-5 pr-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.1em] text-bone transition-colors hover:bg-signal-500 hover:text-ink"
            >
              Ir a la página principal
              <span className="flex size-8 items-center justify-center bg-signal-500 text-ink transition-colors group-hover:bg-ink group-hover:text-bone">
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </span>
            </Link>
          </div>

          <Stamp id="not-found" className="hidden w-[220px] lg:block" />
        </div>
      </div>

      <footer className="container-x relative border-t border-ink/15 py-6">
        <p className="font-mono text-[8px] uppercase tracking-[0.08em] text-smoke">
          © 2026 sencillopay, C.A. · Caracas, Venezuela
        </p>
      </footer>
    </main>
  );
}
