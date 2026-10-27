import {
  ArrowDownToLine,
  ArrowRight,
  Check,
  Clock3,
  FileImage,
  Landmark,
  MessageCircle,
  ShieldCheck,
  Webhook,
  X,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const TRADITIONAL = [
  {
    title: "Verificación a ojo",
    description:
      "Revisas una imagen que cualquiera puede editar. No hay forma de cruzarla con el movimiento real de tu banco.",
  },
  {
    title: "Chats que no cierran",
    description:
      "“¿Me mandas la captura?”, “¿cuál era la referencia?”, “¿lo hiciste por Pago Móvil?”. Cada venta es una conversación.",
  },
  {
    title: "Pedidos detenidos",
    description:
      "El despacho espera mientras alguien confirma. Tu caja no cuadra y el cliente se impacienta.",
  },
  {
    title: "Errores que se repiten",
    description:
      "Capturas duplicadas, montos que no coinciden o transferencias que nunca existieron.",
  },
];

const DIRECT = [
  {
    title: "Abono inmediato en tu cuenta",
    description:
      "El cliente paga a tu cuenta jurídica. El dinero está disponible en tu banco, no en el nuestro.",
  },
  {
    title: "Verificación contra tu banco",
    description:
      "Referencia, monto y RIF/cédula se cruzan con el movimiento real. La imagen deja de ser prueba.",
  },
  {
    title: "Conciliación en milisegundos",
    description:
      "Cada pago se confirma solo. Nadie tiene que revisar chats ni capturas.",
  },
  {
    title: "ERP + WhatsApp en milisegundos",
    description:
      "Comprobante y factura al cliente; webhook firmado a tu sistema administrativo.",
  },
];

export function ProblemSolution() {
  return (
    <section id="modelo" className="relative border-t border-ink/15 py-20 sm:py-28">
      <div className="container-x relative">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
            <div className="max-w-[820px]">
              <SectionLabel index="01">El modelo</SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5.3vw,4.2rem)] font-bold uppercase leading-[0.92] tracking-[-0.045em] text-ink">
                Una captura no es
                <br />
                <span className="text-signal-600">un comprobante.</span>
              </h2>
              <p className="mt-6 max-w-[620px] text-[14px] leading-[1.75] text-smoke sm:text-[15px]">
                El cobro informal vive en un chat: el cliente manda una imagen,
                alguien la revisa a ojo y el pedido espera. La integración directa
                concilia referencia, monto y RIF/cédula contra el movimiento real
                de tu banco.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 border border-ink/20 bg-surface px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-ink">
                <ShieldCheck className="size-3.5 text-signal-600" strokeWidth={2} />
                Verificamos contra tu banco, no contra una imagen.
              </div>
            </div>

            <div className="border border-ink bg-surface">
              <div className="flex items-center justify-between border-b border-ink/15 px-4 py-2.5 font-mono text-[8px] uppercase tracking-[0.14em] text-smoke">
                <span>Diagnóstico de cobro</span>
                <Clock3 className="size-3" />
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-3 border-b border-ink/10 pb-3">
                  <span className="text-[10.5px] text-smoke">
                    Verificación manual
                  </span>
                  <span className="font-mono text-[15px] font-medium text-signal-700 line-through decoration-signal-700/40">
                    18:24
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-3 pt-3">
                  <span className="text-[10.5px] font-medium text-ink">
                    Conciliación directa
                  </span>
                  <span className="font-display text-[22px] font-bold leading-none tracking-[-0.03em] text-ink">
                    1,2 s
                  </span>
                </div>
                <p className="mt-3 font-mono text-[7.5px] uppercase tracking-[0.12em] text-smoke">
                  ≈ 920× más rápido
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-12 grid items-stretch gap-4 lg:mt-16 lg:grid-cols-2">
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 z-10 hidden size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-paper bg-signal-500 font-display text-[13px] font-bold uppercase tracking-[-0.02em] text-ink lg:flex"
          >
            vs
          </span>

          <Reveal className="h-full">
            <article className="relative flex h-full flex-col border border-ink/20 bg-paper-deep p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-ink/15 pb-4">
                <span className="inline-flex items-center gap-2 bg-ink px-2 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-bone">
                  <X className="size-3" strokeWidth={2.2} />
                  Cobro informal
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-signal-700">
                  Lo que evitamos
                </span>
              </div>

              <h3 className="mt-6 max-w-[440px] font-display text-[clamp(1.55rem,2.8vw,2.1rem)] font-bold uppercase leading-[1.02] tracking-[-0.035em] text-ink">
                Te mandan una captura. Tú verificas.
              </h3>
              <p className="mt-3 max-w-[470px] text-[12.5px] leading-[1.7] text-smoke">
                El cliente dice que pagó y adjunta una imagen. Tu equipo pierde
                minutos —o días— confirmando un dinero que quizás nunca llegó.
              </p>

              <ul className="mt-7 space-y-4">
                {TRADITIONAL.map((item, index) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center border border-ink/20 font-mono text-[7px] text-signal-700">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold text-ink">
                        {item.title}
                      </p>
                      <p className="mt-1 max-w-[440px] text-[11px] leading-[1.65] text-smoke">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <div className="overflow-hidden border border-ink/20 bg-[#0b141a]">
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-3.5 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="flex size-6 items-center justify-center border border-white/15 bg-white/[0.04]">
                        <MessageCircle className="size-3 text-white/55" strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className="text-[8.5px] font-medium text-white/65">
                          Cobranza por WhatsApp
                        </p>
                        <p className="text-[7px] text-white/35">
                          +58 412 ···· ··42
                        </p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 border border-signal-400/20 bg-signal-500/[0.08] px-1.5 py-0.5 font-mono text-[6.5px] uppercase tracking-[0.08em] text-signal-300">
                      <Clock3 className="size-2" />
                      Sin verificar
                    </span>
                  </div>

                  <div className="space-y-2 px-3.5 py-3">
                    <div className="max-w-[92%] rounded-none bg-[#1f2c34] p-2.5">
                      <div className="flex items-center gap-2">
                        <span className="flex size-8 shrink-0 items-center justify-center border border-white/[0.08] bg-white/[0.03]">
                          <FileImage className="size-4 text-white/40" strokeWidth={1.5} />
                        </span>
                        <div>
                          <p className="text-[8.5px] font-medium text-white/55">
                            captura-pagomovil.jpg
                          </p>
                          <p className="text-[7px] text-white/30">
                            Imagen · 184 KB
                          </p>
                        </div>
                      </div>
                      <p className="mt-2 text-[8.5px] leading-relaxed text-white/45">
                        “Ya te transferí, aquí está la captura.”
                      </p>
                    </div>

                    <div className="border border-signal-400/15 bg-signal-500/[0.06] px-2.5 py-2">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-[8px] text-signal-300/75">
                          <Clock3 className="size-2.5" strokeWidth={1.8} />
                          Verificando a mano
                        </span>
                        <span className="font-mono text-[7px] text-signal-300/55">
                          18 min 24 s
                        </span>
                      </div>
                      <div className="mt-2 h-1 overflow-hidden bg-white/[0.06]">
                        <div className="h-full w-2/5 animate-pulse bg-signal-500/50" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      {[
                        ["Monto en el banco", "No aparece"],
                        ["Referencia", "No coincide"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5"
                        >
                          <span className="text-[8px] text-white/40">{label}</span>
                          <span className="flex items-center gap-1 font-mono text-[8px] text-signal-300/65">
                            {value}
                            <X className="size-2.5" strokeWidth={2.2} />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal className="h-full" delay={100}>
            <article className="relative mb-2 mr-2 flex h-full flex-col border border-ink bg-ink p-5 text-bone shadow-[6px_6px_0_#ff4a1c] sm:p-7">
              <div className="flex items-start justify-between gap-4 border-b border-bone/15 pb-4">
                <span className="inline-flex items-center gap-2 bg-signal-500 px-2 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-ink">
                  <span className="size-1.5 bg-ink" />
                  Integración directa
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-bone/40">
                  Modelo sencillopay
                </span>
              </div>

              <h3 className="mt-6 max-w-[440px] font-display text-[clamp(1.55rem,2.8vw,2.1rem)] font-bold uppercase leading-[1.02] tracking-[-0.035em] text-bone">
                El banco confirma.{" "}
                <span className="text-signal-400">El sistema concilia.</span>
              </h3>
              <p className="mt-3 max-w-[470px] text-[12.5px] leading-[1.7] text-bone/60">
                El cliente paga directo a tu cuenta jurídica. Cruzamos los datos
                contra el movimiento real y disparamos el comprobante y la
                factura sin que nadie revise una imagen.
              </p>

              <ul className="mt-7 space-y-4">
                {DIRECT.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center border border-signal-500/30 bg-signal-500/10">
                      <Check className="size-2.5 text-signal-300" strokeWidth={2.8} />
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold text-bone/90">
                        {item.title}
                      </p>
                      <p className="mt-1 max-w-[440px] text-[11px] leading-[1.65] text-bone/55">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <div className="overflow-hidden border border-bone/15 bg-graphite">
                  <div className="flex items-center justify-between border-b border-bone/10 px-3.5 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="flex size-6 items-center justify-center border border-signal-500/25 bg-signal-500/10">
                        <Landmark className="size-3 text-signal-300" strokeWidth={1.7} />
                      </span>
                      <div>
                        <p className="text-[8.5px] font-medium text-bone/70">
                          Cuenta jurídica del comercio
                        </p>
                        <p className="text-[7px] text-bone/40">
                          BDT · ****4821
                        </p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 border border-signal-500/25 bg-signal-500/10 px-1.5 py-0.5 font-mono text-[6.5px] uppercase tracking-[0.08em] text-signal-300">
                      <ArrowDownToLine className="size-2" />
                      Abono directo
                    </span>
                  </div>

                  <div className="px-3.5 py-3">
                    <p className="flex flex-wrap items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.12em] text-bone/40">
                      Cliente
                      <ArrowRight className="size-2 text-signal-400/60" />
                      Banco
                      <ArrowRight className="size-2 text-signal-400/60" />
                      Tu cuenta
                    </p>
                    <p className="mt-1 font-display text-[23px] font-bold tracking-[-0.04em] text-bone tabular">
                      Bs. 12.480,00
                    </p>

                    <div className="mt-3 space-y-1.5">
                      {[
                        ["Recibido en", "09:41:52"],
                        ["Capturas revisadas", "0"],
                        ["Comisión sobre ventas", "0%"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between border border-bone/10 bg-bone/[0.025] px-2.5 py-1.5"
                        >
                          <span className="text-[8px] text-bone/45">{label}</span>
                          <span className="flex items-center gap-1.5 font-mono text-[8px] text-signal-300/80">
                            {value}
                            <span className="flex size-3 items-center justify-center bg-signal-500/15">
                              <Check className="size-2 text-signal-300" strokeWidth={3} />
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 border border-signal-500/25 bg-signal-500/[0.08] px-2.5 py-2">
                      <span className="flex items-center gap-1.5 text-[8px] text-signal-300">
                        <Check className="size-2.5" strokeWidth={2.5} />
                        Conciliado en 1,1 s
                      </span>
                      <span className="flex items-center gap-2 text-[7px] text-bone/50">
                        <MessageCircle className="size-2.5" />
                        Factura enviada
                        <Webhook className="size-2.5" />
                        ERP 200 OK
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
