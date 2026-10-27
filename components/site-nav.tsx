"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

const LINKS = [
  { href: "#modelo", label: "El modelo" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#simulador", label: "Simulador" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#precios", label: "Precios" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 12);

      let current = "";
      for (const link of LINKS) {
        const section = document.querySelector<HTMLElement>(link.href);
        if (section && section.getBoundingClientRect().top <= 150) {
          current = link.href;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-ink/15 bg-paper/95 shadow-[0_10px_40px_-30px_rgba(11,13,11,0.5)] backdrop-blur-xl"
          : "border-ink/10 bg-paper/85 backdrop-blur-md"
      }`}
    >
      <div className="container-x">
        <div className="flex h-[72px] items-center justify-between gap-5">
          <Logo />

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-6 lg:flex"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? "location" : undefined}
                className={`relative py-2 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                  active === link.href
                    ? "text-ink"
                    : "text-smoke hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-[1px] h-[2px] transition-colors ${
                    active === link.href ? "bg-signal-500" : "bg-transparent"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <span className="hidden items-center gap-2 border-l border-ink/15 pl-4 font-mono text-[9px] uppercase tracking-[0.12em] text-smoke xl:flex">
              <span className="size-1.5 bg-signal-500" />
              Cero custodia
            </span>

            <a
              href="#contacto"
              className="group hidden h-9 items-center gap-2 bg-ink px-4 font-mono text-[9.5px] font-semibold uppercase tracking-[0.1em] text-bone transition-colors hover:bg-signal-500 hover:text-ink sm:flex"
            >
              Agendar diagnóstico
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>

            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
              className="flex size-10 items-center justify-center border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone lg:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-ink/15 bg-paper lg:hidden"
        >
          <div className="container-x flex min-h-full flex-col py-8">
            <nav aria-label="Navegación móvil" className="flex flex-col">
              {LINKS.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="group flex items-center justify-between border-b border-ink/12 py-4"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] text-signal-600">
                      0{index + 1}
                    </span>
                    <span className="font-display text-[26px] font-bold uppercase leading-none tracking-[-0.03em] text-ink">
                      {link.label}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 text-smoke transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-600" />
                </a>
              ))}
            </nav>

            <a
              href="#contacto"
              onClick={close}
              className="mt-6 flex h-12 items-center justify-center gap-2 bg-ink font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-bone transition-colors hover:bg-signal-500 hover:text-ink"
            >
              Agendar diagnóstico
              <ArrowUpRight className="size-4" />
            </a>

            <div className="mt-auto flex items-center justify-between border-t border-ink/12 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-smoke">
              <span className="flex items-center gap-2">
                <span className="size-1.5 bg-signal-500" />
                Cero custodia
              </span>
              <span>Caracas · Venezuela</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
