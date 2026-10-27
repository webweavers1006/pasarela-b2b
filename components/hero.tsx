import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { BankStrip } from "@/components/bank-strip";
import { HeroDashboard } from "@/components/hero-dashboard";
import { Stamp } from "@/components/stamp";

const FACTS = [
  { index: "01", label: "Custodia de fondos", value: "Bs. 0" },
  { index: "02", label: "Comisión por venta", value: "0%" },
  { index: "03", label: "Match promedio", value: "1,2 s" },
  { index: "04", label: "Implementación", value: "48 h" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-paper pt-[72px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[860px] paper-grid opacity-70 [mask-image:radial-gradient(ellipse_78%_72%_at_50%_0%,black,transparent_82%)]" />
        <div className="absolute right-[26%] top-0 hidden h-full w-px bg-ink/[0.06] lg:block" />
      </div>

      <div className="container-x relative">
        <div className="flex items-center justify-between gap-4 border-b border-ink/15 py-3 font-mono text-[8.5px] uppercase tracking-[0.16em] text-smoke">
          <span className="flex items-center gap-2">
            <span className="size-1.5 bg-signal-500" />
            Infraestructura de cobro directo · Venezuela
          </span>
          <span className="hidden items-center gap-2 md:flex">
            C2P / API bancaria / Pago Móvil
            <span className="h-3 w-px bg-ink/20" />
            <span className="flex items-center gap-1.5 text-ink">
              <span className="size-1.5 animate-pulse-soft bg-signal-500" />
              Sistema operativo
            </span>
          </span>
        </div>

        <div className="grid gap-10 pb-10 pt-12 lg:grid-cols-[minmax(0,1fr)_286px] lg:gap-14 lg:pb-14 lg:pt-16">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-[0.16em] text-smoke">
              <span className="bg-ink px-2 py-1 font-semibold text-bone">
                SaaS B2B
              </span>
              <span>Cero custodia de fondos</span>
              <span className="hidden h-3 w-px bg-ink/20 sm:block" />
              <span className="hidden sm:inline">Conciliación bancaria</span>
            </div>

            <h1 className="mt-6 font-display text-[clamp(1.95rem,10vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.05em] text-ink">
              Cero custodia.
              <br />
              Cero comisión.
              <br />
              <span className="text-signal-600">Cero capturas.</span>
            </h1>

            <div className="mt-8 grid gap-6 border-t border-ink/20 pt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <p className="max-w-[54ch] text-[14px] leading-[1.75] text-smoke sm:text-[15px]">
                El pago entra directo a la cuenta jurídica de tu empresa.
                Conectamos tu banco vía <span className="font-medium text-ink">API o C2P</span>,
                conciliamos por referencia, monto y RIF/cédula, y disparamos el
                comprobante, la factura y el webhook.{" "}
                <span className="font-medium text-ink">
                  sencillopay nunca toca el dinero.
                </span>
              </p>

              <div className="flex flex-col gap-2 sm:min-w-[250px]">
                <a
                  href="#contacto"
                  className="group inline-flex h-12 items-center justify-between gap-4 bg-ink pl-5 pr-2 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-bone transition-colors hover:bg-signal-500 hover:text-ink"
                >
                  Agendar diagnóstico
                  <span className="flex size-8 items-center justify-center bg-signal-500 text-ink transition-colors group-hover:bg-ink group-hover:text-bone">
                    <ArrowUpRight className="size-4" strokeWidth={2} />
                  </span>
                </a>
                <a
                  href="#simulador"
                  className="group inline-flex h-11 items-center justify-between gap-4 border border-ink/20 px-4 text-[10.5px] font-medium uppercase tracking-[0.1em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone"
                >
                  Probar conciliación en vivo
                  <ArrowRight
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={1.8}
                  />
                </a>
              </div>
            </div>

            <p className="mt-4 flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.12em] text-smoke">
              <ShieldCheck className="size-3 text-signal-600" strokeWidth={2} />
              Suscripción SaaS · 0% de comisión sobre tus ventas · Sin
              permanencia
            </p>

            <dl className="mt-7 grid grid-cols-2 gap-px border border-ink/15 bg-ink/15 lg:hidden">
              {FACTS.map((fact) => (
                <div key={fact.index} className="bg-paper p-3">
                  <dt className="font-mono text-[8px] uppercase tracking-[0.12em] text-smoke">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 font-display text-[22px] font-bold leading-none tracking-[-0.03em] text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="hidden flex-col justify-between border-l border-ink/15 pl-7 lg:flex">
            <div>
              <Stamp id="hero" className="mx-auto w-full max-w-[196px]" />
              <dl className="mt-7 border-t border-ink/15">
                {FACTS.map((fact) => (
                  <div
                    key={fact.index}
                    className="flex items-center justify-between gap-3 border-b border-ink/12 py-3"
                  >
                    <dt className="flex items-baseline gap-2.5">
                      <span className="font-mono text-[8px] text-signal-600">
                        {fact.index}
                      </span>
                      <span className="font-mono text-[8.5px] uppercase tracking-[0.1em] text-smoke">
                        {fact.label}
                      </span>
                    </dt>
                    <dd className="font-display text-[18px] font-bold leading-none tracking-[-0.03em] text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8 bg-ink p-4 text-bone">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-bone/55">
                Ruta del dinero
              </p>
              <p className="mt-3 font-display text-[17px] font-semibold uppercase leading-[1.15] tracking-[-0.02em]">
                Cliente <span className="text-signal-400">→</span> Banco{" "}
                <span className="text-signal-400">→</span> Tu cuenta
              </p>
              <div className="mt-3 h-px bg-bone/15" />
              <p className="mt-2 font-mono text-[7.5px] uppercase leading-relaxed tracking-[0.1em] text-bone/55">
                sencillopay procesa datos, no fondos
              </p>
            </div>
          </aside>
        </div>

        <div className="relative mt-6">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-ink/15 pb-2 font-mono text-[8.5px] uppercase tracking-[0.14em] text-smoke">
            <span className="flex items-center gap-2">
              <span className="size-1.5 bg-signal-500" />
              Consola de operación / conciliación directa
            </span>
            <span className="hidden sm:inline">
              Datos demostrativos · actualización 2 s
            </span>
          </div>
          <HeroDashboard />
        </div>

        <BankStrip />
      </div>
    </section>
  );
}
