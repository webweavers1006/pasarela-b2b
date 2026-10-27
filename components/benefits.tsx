import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  CheckCheck,
  Code2,
  Landmark,
  MessageCircle,
  Receipt,
  ShieldCheck,
  Webhook,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const METRICS = [
  {
    value: "0",
    unit: "",
    label: "Fondos retenidos",
    detail: "Custodia e intermediación",
  },
  {
    value: "0%",
    unit: "",
    label: "Comisión sobre ventas",
    detail: "Solo suscripción SaaS",
  },
  {
    value: "< 2",
    unit: "s",
    label: "Conciliación",
    detail: "De la notificación al match",
  },
  {
    value: "100%",
    unit: "",
    label: "Directo a tu cuenta",
    detail: "Sin payouts ni liquidaciones",
  },
];

const COMPLIANCE_POINTS = [
  "sencillopay no recibe ni custodia fondos",
  "La cuenta jurídica sigue siendo tuya",
  "Trazabilidad completa para auditoría",
];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative border-t border-ink/15 py-20 sm:py-28"
    >
      <div className="container-x relative">
        <Reveal>
          <div className="max-w-[800px]">
            <SectionLabel index="04">Beneficios</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5.3vw,4.2rem)] font-bold uppercase leading-[0.92] tracking-[-0.045em] text-ink">
              Tu caja no espera.
              <br />
              <span className="text-signal-600">Tu riesgo tampoco crece.</span>
            </h2>
            <p className="mt-6 max-w-[600px] text-[14px] leading-[1.75] text-smoke sm:text-[15px]">
              Disponibilidad inmediata, cero exposición por intermediación y una
              operación conectada de punta a punta. El dinero se queda en tu
              banco; la inteligencia, en tu software.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {/* Cash flow */}
          <Reveal className="h-full lg:col-span-7">
            <article className="group relative flex h-full flex-col border border-ink/20 bg-surface p-5 transition-all duration-300 hover:border-ink hover:shadow-[5px_5px_0_#ff4a1c] sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-ink/12 pb-4">
                <span className="inline-flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.12em] text-ink">
                  <Landmark className="size-3.5 text-signal-600" strokeWidth={1.8} />
                  Flujo de caja
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-smoke">
                  Beneficio 01
                </span>
              </div>

              <h3 className="mt-6 max-w-[460px] font-display text-[clamp(1.4rem,2.6vw,2rem)] font-bold uppercase leading-[1.02] tracking-[-0.03em] text-ink">
                Tu caja no espera liquidaciones.
              </h3>
              <p className="mt-2.5 max-w-[500px] text-[12.5px] leading-[1.7] text-smoke">
                El dinero se abona en tu cuenta en cuanto el cliente paga. Sin
                payouts, sin T+1, sin fondos retenidos por un tercero.
              </p>

              <div className="mt-auto pt-6">
                <div className="overflow-hidden border border-ink/15 bg-[#080b0a] text-bone">
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-3.5 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="flex size-6 items-center justify-center border border-signal-500/25 bg-signal-500/10">
                        <Landmark className="size-3 text-signal-300" strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className="text-[8.5px] font-medium text-white/65">
                          Cuenta jurídica del comercio
                        </p>
                        <p className="text-[7px] text-white/35">BDT · ****4821</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 border border-signal-500/25 bg-signal-500/10 px-1.5 py-0.5 font-mono text-[6.5px] uppercase tracking-[0.08em] text-signal-300">
                      <span className="size-1 bg-signal-500" />
                      En línea
                    </span>
                  </div>

                  <div className="px-3.5 py-3">
                    <div className="flex flex-wrap items-end justify-between gap-2">
                      <div>
                        <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/35">
                          Disponible hoy
                        </p>
                        <p className="mt-1 font-display text-[25px] font-bold tracking-[-0.04em] text-bone tabular">
                          Bs. 2.847.320,00
                        </p>
                      </div>
                      <span className="flex items-center gap-1 text-[7.5px] text-signal-300/80">
                        <ArrowDownToLine className="size-2.5" strokeWidth={2} />
                        Abono directo
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-1.5">
                      {[
                        ["Abono recibido", "Bs. 12.480,00"],
                        ["Retenido", "Bs. 0,00"],
                        ["Payout", "No aplica"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="border border-white/[0.07] bg-white/[0.025] px-2 py-1.5"
                        >
                          <p className="font-mono text-[6.5px] uppercase tracking-[0.08em] text-white/35">
                            {label}
                          </p>
                          <p className="mt-0.5 truncate font-mono text-[8px] text-white/65">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2.5 space-y-1.5">
                      {[
                        ["09:42:18", "Pago recibido en BDT"],
                        ["09:42:19", "Conciliado y notificado"],
                      ].map(([time, label], index) => (
                        <div key={time} className="flex items-center gap-2">
                          <span className="font-mono text-[7px] text-white/35">
                            {time}
                          </span>
                          <ArrowRight className="size-2.5 text-signal-400/60" />
                          <span className="text-[8px] text-white/50">{label}</span>
                          {index === 1 && (
                            <Check
                              className="ml-auto size-2.5 text-signal-300/80"
                              strokeWidth={2.5}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/[0.08] px-3.5 py-2">
                    <span className="flex items-center gap-1.5 text-[7.5px] text-signal-300/75">
                      <Check className="size-2.5" strokeWidth={2.5} />
                      Disponible al instante
                    </span>
                    <span className="font-mono text-[6.5px] uppercase tracking-[0.1em] text-white/35">
                      Sin liquidación de terceros
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Compliance */}
          <Reveal className="h-full lg:col-span-5" delay={80}>
            <article
              id="seguridad"
              className="relative mb-2 mr-2 flex h-full scroll-mt-28 flex-col border border-ink bg-signal-500 p-5 text-ink shadow-[6px_6px_0_#0b0d0b] sm:p-7"
            >
              <div className="flex items-center justify-between gap-4 border-b border-ink/20 pb-4">
                <span className="inline-flex items-center gap-2 bg-ink px-2 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-bone">
                  <ShieldCheck className="size-3" strokeWidth={2} />
                  Cumplimiento
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-ink/60">
                  Beneficio 02
                </span>
              </div>

              <h3 className="mt-6 max-w-[360px] font-display text-[clamp(1.4rem,2.6vw,2rem)] font-bold uppercase leading-[1.02] tracking-[-0.03em]">
                Cero riesgo por intermediación.
              </h3>
              <p className="mt-2.5 max-w-[390px] text-[12.5px] leading-[1.7] text-ink/75">
                No recibimos, retenemos ni liquidamos el dinero de tu empresa.
                La cuenta jurídica y la relación con tus clientes siguen siendo
                tuyas.
              </p>

              <div className="mt-auto pt-6">
                <div className="relative overflow-hidden border border-ink/25 bg-signal-400/25">
                  <div className="flex items-center justify-between border-b border-ink/20 px-3 py-2 font-mono text-[7px] uppercase tracking-[0.12em] text-ink/70">
                    <span>Solo software</span>
                    <span>Auditoría</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 py-5">
                    <span className="font-display text-[88px] font-bold leading-[0.7] tracking-[-0.08em]">
                      0
                    </span>
                    <span className="max-w-[80px] font-mono text-[8px] uppercase leading-[1.6] tracking-[0.1em] text-ink/70">
                      fondos retenidos
                    </span>
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-ink/20 border-t border-ink/20">
                    {["Custodia", "Intermediación", "Payouts"].map((item) => (
                      <div key={item} className="px-2 py-2 text-center">
                        <p className="font-mono text-[6.5px] uppercase tracking-[0.08em] text-ink/60">
                          {item}
                        </p>
                        <p className="mt-0.5 font-display text-[12px] font-bold">
                          Bs. 0
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {COMPLIANCE_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-1.5 text-[9px] text-ink/75"
                    >
                      <Check className="size-2.5" strokeWidth={3} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          {/* ERP sync */}
          <Reveal className="h-full lg:col-span-5" delay={40}>
            <article
              id="integraciones"
              className="group relative flex h-full scroll-mt-28 flex-col border border-ink/20 bg-surface p-5 transition-all duration-300 hover:border-ink hover:shadow-[5px_5px_0_#ff4a1c] sm:p-7"
            >
              <div className="flex items-center justify-between gap-4 border-b border-ink/12 pb-4">
                <span className="inline-flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.12em] text-ink">
                  <Code2 className="size-3.5 text-signal-600" strokeWidth={1.8} />
                  API + Webhooks
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-smoke">
                  Beneficio 03
                </span>
              </div>

              <h3 className="mt-6 max-w-[380px] font-display text-[clamp(1.4rem,2.6vw,2rem)] font-bold uppercase leading-[1.02] tracking-[-0.03em] text-ink">
                Tu sistema se entera primero.
              </h3>
              <p className="mt-2.5 max-w-[390px] text-[12.5px] leading-[1.7] text-smoke">
                API REST, SDKs y webhooks firmados. Cada pago conciliado
                actualiza tu ERP, CRM o sistema administrativo en tiempo real.
              </p>

              <div className="mt-auto pt-6">
                <div className="overflow-hidden border border-ink/15 bg-[#080b0a]">
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-3.5 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1" aria-hidden="true">
                        <span className="size-1 bg-white/15" />
                        <span className="size-1 bg-white/15" />
                        <span className="size-1 bg-white/15" />
                      </div>
                      <span className="font-mono text-[7.5px] text-white/50">
                        webhook.ts
                      </span>
                    </div>
                    <span className="font-mono text-[6.5px] uppercase tracking-[0.1em] text-signal-300">
                      200 OK
                    </span>
                  </div>

                  <pre className="overflow-x-auto p-3.5 font-mono text-[7.5px] leading-[1.8] text-white/55">
                    <code>
                      <span className="text-white/60">
                        {"// cada pago, al instante"}
                      </span>
                      {"\n"}
                      <span className="text-[#e6a6ff]">POST</span>{" "}
                      <span className="text-white/60">
                        https://api.tuempresa.com/hooks/sencillopay
                      </span>
                      {"\n{"}
                      {"\n  "}
                      <span className="text-sky-300/70">&quot;event&quot;</span>
                      {": "}
                      <span className="text-signal-300/80">
                        &quot;payment.reconciled&quot;
                      </span>
                      {","}
                      {"\n  "}
                      <span className="text-sky-300/70">&quot;amount&quot;</span>
                      {": "}
                      <span className="text-amber-200/65">1480.00</span>
                      {","}
                      {"\n  "}
                      <span className="text-sky-300/70">&quot;reference&quot;</span>
                      {": "}
                      <span className="text-signal-300/80">
                        &quot;045122&quot;
                      </span>
                      {","}
                      {"\n  "}
                      <span className="text-sky-300/70">&quot;document&quot;</span>
                      {": "}
                      <span className="text-signal-300/80">
                        &quot;V-12345678&quot;
                      </span>
                      {","}
                      {"\n  "}
                      <span className="text-sky-300/70">&quot;destination&quot;</span>
                      {": "}
                      <span className="text-signal-300/80">
                        &quot;BDT-4821&quot;
                      </span>
                      {","}
                      {"\n  "}
                      <span className="text-sky-300/70">
                        &quot;funds_custodied&quot;
                      </span>
                      {": "}
                      <span className="text-amber-200/65">false</span>
                      {","}
                      {"\n  "}
                      <span className="text-sky-300/70">
                        &quot;matched_in_ms&quot;
                      </span>
                      {": "}
                      <span className="text-amber-200/65">942</span>
                      {"\n}"}
                    </code>
                  </pre>

                  <div className="flex items-center justify-between border-t border-white/[0.08] px-3.5 py-2">
                    <div className="flex gap-1">
                      {["API REST", "Webhooks", "SDK JS"].map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/[0.08] bg-white/[0.025] px-1.5 py-0.5 font-mono text-[6px] text-white/45"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-mono text-[6.5px] text-signal-300">
                      84 ms
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* WhatsApp + match */}
          <Reveal className="h-full lg:col-span-7" delay={120}>
            <article className="group relative flex h-full flex-col border border-ink/20 bg-surface p-5 transition-all duration-300 hover:border-ink hover:shadow-[5px_5px_0_#ff4a1c] sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-ink/12 pb-4">
                <span className="inline-flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.12em] text-ink">
                  <MessageCircle className="size-3.5 text-signal-600" strokeWidth={1.8} />
                  Automatización
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-smoke">
                  Beneficio 04
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start">
                <div className="md:flex-1">
                  <h3 className="max-w-[380px] font-display text-[clamp(1.4rem,2.6vw,2rem)] font-bold uppercase leading-[1.02] tracking-[-0.03em] text-ink">
                    Cada pago se explica solo.
                  </h3>
                  <p className="mt-2.5 max-w-[400px] text-[12.5px] leading-[1.7] text-smoke">
                    Cruzamos referencia, monto y RIF/cédula. Enviamos comprobante
                    y factura por WhatsApp y dejamos el rastro completo para
                    auditoría.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 md:w-[205px] md:flex-col md:items-start">
                  {[
                    "Match por 3 variables",
                    "Comprobante + factura",
                    "0 intervención humana",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 border border-ink/15 bg-paper px-2.5 py-1.5 text-[8px] text-smoke"
                    >
                      <Check className="size-2.5 text-signal-600" strokeWidth={2.8} />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <div className="overflow-hidden border border-ink/15 bg-[#0b141a]">
                  <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#1f2c34]/70 px-3.5 py-2.5">
                    <span className="flex size-6 items-center justify-center rounded-none bg-wa">
                      <MessageCircle className="size-3 text-[#04150f]" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-[8.5px] font-medium text-white/65">
                        Clínica Los Robles
                      </p>
                      <p className="text-[6.5px] text-wa/90">
                        automatización activa
                      </p>
                    </div>
                    <span className="ml-auto flex items-center gap-1 font-mono text-[6px] uppercase tracking-[0.1em] text-white/45">
                      <span className="size-1 bg-signal-500" />
                      0 intervención
                    </span>
                  </div>

                  <div className="chat-pattern space-y-2 p-3.5">
                    <div className="ml-auto max-w-[84%] rounded-none bg-[#005c4b] p-2.5">
                      <p className="text-[8.5px] leading-[1.6] text-white/80">
                        Hola María, recibimos tu pago de{" "}
                        <span className="font-mono">Bs. 1.480,00</span> en nuestra
                        cuenta BDT. Aquí están tu comprobante y factura.
                      </p>
                      <div className="mt-1.5 flex items-center gap-1.5 border border-white/[0.08] bg-black/15 px-2 py-1.5">
                        <Receipt className="size-2.5 text-white/60" />
                        <span className="text-[7px] text-white/60">
                          Factura #INV-2048 · PDF
                        </span>
                      </div>
                      <p className="mt-1 text-right text-[6px] text-white/60">
                        9:41 · <CheckCheck className="inline size-2 text-sky-300/60" />
                      </p>
                    </div>

                    <div className="max-w-[65%] rounded-none bg-[#1f2c34] p-2.5">
                      <p className="text-[8.5px] leading-[1.6] text-white/55">
                        Perfecto, gracias 🙌
                      </p>
                      <p className="mt-1 text-[6px] text-white/35">9:42</p>
                    </div>

                    <div className="ml-auto max-w-[84%] rounded-none bg-[#005c4b] p-2.5">
                      <p className="text-[8.5px] leading-[1.6] text-white/80">
                        Pago confirmado y conciliado. Ref.{" "}
                        <span className="font-mono">045122</span> · 1,1 s. Sin
                        capturas ni validación manual.
                      </p>
                      <p className="mt-1 text-right text-[6px] text-white/60">
                        9:42 · <CheckCheck className="inline size-2 text-sky-300/75" />
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.08] px-3.5 py-2">
                    <span className="flex items-center gap-1.5 text-[7px] text-signal-300/75">
                      <Webhook className="size-2.5" strokeWidth={1.8} />
                      Webhook firmado · 200 OK
                    </span>
                    <span className="font-mono text-[6.5px] uppercase tracking-[0.1em] text-white/35">
                      Sin capturas
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Metrics */}
        <Reveal delay={100}>
          <div className="mt-4 grid overflow-hidden border border-ink bg-ink text-bone sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric, index) => {
              const borders = [
                "",
                "border-t border-bone/15 sm:border-l sm:border-t-0",
                "border-t border-bone/15 lg:border-l lg:border-t-0",
                "border-t border-bone/15 sm:border-l lg:border-t-0",
              ][index];

              return (
                <div
                  key={metric.label}
                  className={`flex flex-col justify-between p-5 sm:p-6 ${borders}`}
                >
                  <p
                    className={`font-display text-[clamp(2.2rem,3.8vw,3.1rem)] font-bold leading-none tracking-[-0.05em] ${
                      index === 0 ? "text-signal-400" : "text-bone"
                    }`}
                  >
                    {metric.value}
                    {metric.unit && (
                      <span className="ml-0.5 text-[0.55em] text-bone/50">
                        {metric.unit}
                      </span>
                    )}
                  </p>
                  <div className="mt-5">
                    <p className="font-mono text-[8px] font-medium uppercase tracking-[0.14em] text-bone/65">
                      {metric.label}
                    </p>
                    <p className="mt-1 text-[9px] text-bone/40">{metric.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
