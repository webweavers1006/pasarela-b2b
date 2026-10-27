"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Check,
  Sparkles,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const PLANS = [
  {
    id: "base",
    name: "Base",
    icon: Zap,
    monthly: 79,
    annual: 63,
    description:
      "Para equipos que quieren ordenar la conciliación desde el primer día.",
    features: [
      "Hasta 500 conciliaciones / mes",
      "1 sucursal · 1 cuenta bancaria",
      "Integración bancaria API / C2P",
      "1.000 notificaciones WhatsApp",
      "Links de cobro y facturas",
      "Conciliación por 3 variables",
      "Panel operativo en tiempo real",
      "Soporte por WhatsApp",
    ],
    cta: "Empezar con Base",
    note: "0% de comisión sobre tus ventas.",
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    icon: Sparkles,
    monthly: 189,
    annual: 151,
    description:
      "Para operaciones con varias sucursales, ERP y volumen constante.",
    features: [
      "Hasta 3.000 conciliaciones / mes",
      "Hasta 3 sucursales · 3 cuentas",
      "8.000 notificaciones WhatsApp",
      "API REST + webhooks firmados",
      "Integración con ERP / CRM",
      "Roles, permisos y auditoría",
      "Onboarding guiado en 48 h",
      "Soporte prioritario",
    ],
    cta: "Agendar diagnóstico",
    note: "0% de comisión sobre tus ventas.",
    highlight: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    monthly: null,
    annual: null,
    description:
      "Para grupos con alto volumen, múltiples empresas o core bancario propio.",
    features: [
      "Conciliaciones y sucursales ilimitadas",
      "SLA 99,9% y ambiente dedicado",
      "Integración directa con tu core",
      "Account manager en Caracas",
      "Revisión de seguridad y compliance",
      "Facturación en USD o bolívares",
    ],
    cta: "Hablar con ventas",
    note: "0% de comisión sobre tus ventas.",
    highlight: false,
  },
];

function formatInteger(value: number) {
  return new Intl.NumberFormat("es-VE").format(value);
}

function Feature({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className={`mt-0.5 flex size-4 shrink-0 items-center justify-center border ${
          dark
            ? "border-signal-500/40 bg-signal-500/10"
            : "border-ink/15 bg-paper"
        }`}
      >
        <Check
          className={dark ? "size-2.5 text-signal-300" : "size-2.5 text-signal-600"}
          strokeWidth={3}
        />
      </span>
      <span
        className={`text-[11.5px] leading-[1.55] ${
          dark ? "text-bone/65" : "text-smoke"
        }`}
      >
        {children}
      </span>
    </li>
  );
}

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="precios"
      className="relative border-t border-ink/15 py-20 sm:py-28"
    >
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <div className="max-w-[800px]">
              <SectionLabel index="05">Precios</SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5.3vw,4.2rem)] font-bold uppercase leading-[0.92] tracking-[-0.045em] text-ink">
                Pagas por la plataforma.
                <br />
                <span className="text-signal-600">No por tus ventas.</span>
              </h2>
              <p className="mt-6 max-w-[580px] text-[14px] leading-[1.75] text-smoke sm:text-[15px]">
                Suscripción mensual según volumen de conciliaciones y
                sucursales. Cero comisión sobre el dinero que entra a tu cuenta.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <div
                role="group"
                aria-label="Ciclo de facturación"
                className="inline-flex border border-ink bg-surface p-1"
              >
                <button
                  type="button"
                  aria-pressed={!annual}
                  onClick={() => setAnnual(false)}
                  className={`px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors duration-200 ${
                    !annual
                      ? "bg-ink font-semibold text-bone"
                      : "text-smoke hover:text-ink"
                  }`}
                >
                  Mensual
                </button>
                <button
                  type="button"
                  aria-pressed={annual}
                  onClick={() => setAnnual(true)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors duration-200 ${
                    annual
                      ? "bg-ink font-semibold text-bone"
                      : "text-smoke hover:text-ink"
                  }`}
                >
                  Anual
                  <span
                    className={`px-1.5 py-0.5 text-[7.5px] font-semibold ${
                      annual
                        ? "bg-signal-500 text-ink"
                        : "bg-signal-500/15 text-signal-700"
                    }`}
                  >
                    −20%
                  </span>
                </button>
              </div>
              <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-smoke">
                Facturación mensual o anual · Cancela cuando quieras
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {PLANS.map((plan, index) => {
            const Icon = plan.icon;
            const isEnterprise = plan.monthly === null;
            const dark = plan.highlight;

            const card = (
              <article
                className={`relative flex h-full flex-col border p-6 transition-all duration-300 sm:p-7 ${
                  dark
                    ? "border-ink bg-ink text-bone shadow-[6px_6px_0_#ff4a1c]"
                    : "border-ink/20 bg-surface hover:border-ink hover:shadow-[5px_5px_0_#0b0d0b]"
                }`}
              >
                <div
                  className={`flex items-center justify-between gap-4 border-b pb-4 ${
                    dark ? "border-bone/15" : "border-ink/12"
                  }`}
                >
                  <span
                    className={`inline-flex items-center gap-2 px-2 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] ${
                      dark
                        ? "bg-signal-500 text-ink"
                        : "bg-ink text-bone"
                    }`}
                  >
                    <Icon className="size-3" strokeWidth={2} />
                    {plan.name}
                  </span>
                  {dark ? (
                    <span className="bg-signal-500 px-2 py-0.5 font-mono text-[7px] font-semibold uppercase tracking-[0.1em] text-ink">
                      Más elegido
                    </span>
                  ) : (
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-smoke">
                      0{index + 1}
                    </span>
                  )}
                </div>

                <div className="mt-7">
                  <div className="flex items-end gap-2">
                    <p
                      key={annual ? "annual" : "monthly"}
                      className={`animate-rise font-display text-[clamp(2.8rem,4.6vw,3.5rem)] font-bold leading-none tracking-[-0.055em] ${
                        dark ? "text-bone" : "text-ink"
                      }`}
                    >
                      {isEnterprise
                        ? "A medida"
                        : `$${annual ? plan.annual : plan.monthly}`}
                    </p>
                    {!isEnterprise && (
                      <p
                        className={`pb-1.5 text-[9.5px] leading-tight ${
                          dark ? "text-bone/50" : "text-smoke"
                        }`}
                      >
                        / mes
                        <br />
                        <span
                          className={
                            dark ? "text-signal-300/80" : "text-signal-600"
                          }
                        >
                          sin comisión por venta
                        </span>
                      </p>
                    )}
                  </div>
                  <p
                    className={`mt-3 min-h-[36px] text-[12px] leading-relaxed ${
                      dark ? "text-bone/60" : "text-smoke"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <p
                    className={`mt-1 font-mono text-[8px] uppercase tracking-[0.08em] ${
                      dark ? "text-bone/35" : "text-smoke/80"
                    }`}
                  >
                    {isEnterprise
                      ? "Según volumen, sucursales y alcance técnico"
                      : annual
                        ? `Facturado anualmente · $${formatInteger((plan.annual ?? 0) * 12)} al año`
                        : "Mensual · sin permanencia"}
                  </p>
                </div>

                <div
                  className={`mt-6 border-t pt-5 ${
                    dark ? "border-bone/15" : "border-ink/12"
                  }`}
                >
                  <p
                    className={`font-mono text-[7.5px] uppercase tracking-[0.14em] ${
                      dark ? "text-bone/40" : "text-smoke"
                    }`}
                  >
                    Incluye
                  </p>
                  <ul className="mt-3.5 space-y-2.5">
                    {plan.features.map((feature) => (
                      <Feature key={feature} dark={dark}>
                        {feature}
                      </Feature>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-7">
                  <a
                    href="#contacto"
                    className={`group/btn flex h-11 w-full items-center justify-center gap-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                      dark
                        ? "bg-signal-500 text-ink hover:bg-signal-400"
                        : "bg-ink text-bone hover:bg-signal-500 hover:text-ink"
                    }`}
                  >
                    {plan.cta}
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </a>
                  <p
                    className={`mt-3 text-center font-mono text-[7.5px] uppercase tracking-[0.08em] ${
                      dark ? "text-bone/45" : "text-smoke"
                    }`}
                  >
                    {plan.note}
                  </p>
                </div>
              </article>
            );

            if (plan.highlight) {
              return (
                <Reveal key={plan.id} className="h-full" delay={80}>
                  <div className="relative mb-2 mr-2 h-full">{card}</div>
                </Reveal>
              );
            }

            return (
              <Reveal
                key={plan.id}
                className="h-full"
                delay={plan.id === "enterprise" ? 160 : 0}
              >
                {card}
              </Reveal>
            );
          })}
        </div>

        {/* Transparent billing */}
        <Reveal delay={120}>
          <div className="mt-4 overflow-hidden border border-ink/20 bg-paper-deep">
            <div className="flex flex-col gap-1 border-b border-ink/12 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-ink">
                Cómo se compone tu factura
              </p>
              <p className="text-[9px] text-smoke">
                Fee mínimo de software + uso real. Sin comisiones ocultas.
              </p>
            </div>
            <div className="grid sm:grid-cols-3">
              {[
                {
                  index: "01",
                  title: "Suscripción mensual",
                  detail: "Volumen de conciliaciones y número de sucursales.",
                },
                {
                  index: "02",
                  title: "Notificaciones WhatsApp",
                  detail: "Consumo real a tarifa pública, sin recargo oculto.",
                },
                {
                  index: "03",
                  title: "Ventas",
                  detail: "0% de comisión sobre el dinero que entra a tu cuenta.",
                },
              ].map((item, index) => (
                <div
                  key={item.index}
                  className={`flex items-start gap-3 px-5 py-4 ${
                    index > 0
                      ? "border-t border-ink/12 sm:border-l sm:border-t-0"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[8px] font-semibold text-signal-600">
                    {item.index}
                  </span>
                  <div>
                    <p className="text-[10.5px] font-semibold text-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[9px] leading-relaxed text-smoke">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-4 flex flex-col justify-between gap-4 border border-ink/15 px-5 py-4 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[8px] uppercase tracking-[0.08em] text-smoke">
              {[
                "Sin permanencia",
                "Implementación en 48 h",
                "Cero custodia de fondos",
                "Facturación en Bs. o USD",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="size-3 text-signal-600" strokeWidth={3} />
                  {item}
                </span>
              ))}
            </div>
            <a
              href="#contacto"
              className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-[8.5px] font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:text-signal-600"
            >
              ¿Más de 10.000 conciliaciones al mes? Diseñamos tu plan
              <ArrowUpRight
                className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
          </div>
        </Reveal>

        <p className="mt-5 max-w-[900px] text-[8px] leading-[1.7] text-smoke">
          Precios expresados en USD, más IVA e IGTF aplicable según la normativa
          vigente. Facturación en bolívares al tipo de cambio BCV del día. Los
          planes incluyen el volumen de conciliaciones y
          sucursales indicado; el consumo adicional se factura por bloques según
          el tarifario público. Las notificaciones WhatsApp se cobran por uso real
          a tarifa pública. sencillopay no cobra comisión sobre el monto de las
          ventas ni retiene fondos. Los costos bancarios o regulatorios propios de
          cada entidad financiera no forman parte de la suscripción. Las
          condiciones de Enterprise se definen en la propuesta comercial.
        </p>
      </div>
    </section>
  );
}
