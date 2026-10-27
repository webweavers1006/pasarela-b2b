import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  CheckCheck,
  Clock3,
  Landmark,
  Link2,
  MessageCircle,
  Server,
  ShieldCheck,
  Smartphone,
  Webhook,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const STEPS = [
  {
    number: "01",
    kicker: "Conecta",
    title: "Tu banco, sin mover el dinero.",
    description:
      "Habilitamos la integración API o C2P con tu cuenta jurídica. El dinero se queda en tu banco; nosotros solo recibimos la notificación.",
    icon: Landmark,
    tag: "Solo lectura",
  },
  {
    number: "02",
    kicker: "Emite",
    title: "Genera el cobro.",
    description:
      "Crea links de cobro o facturas desde el panel o tu ERP. Envíalos por WhatsApp, correo o tu sistema administrativo.",
    icon: Link2,
    tag: "Panel / API",
  },
  {
    number: "03",
    kicker: "Recibe",
    title: "El pago cae en tu cuenta.",
    description:
      "Tu cliente paga desde su banco. El abono entra directo a tu cuenta y el banco nos envía la notificación instantánea.",
    icon: ArrowDownToLine,
    tag: "Abono directo",
  },
  {
    number: "04",
    kicker: "Concilia",
    title: "Todo cuadra y se notifica.",
    description:
      "Cruzamos referencia, monto y RIF/cédula. Enviamos comprobante y factura por WhatsApp y actualizamos tu ERP por webhook.",
    icon: CheckCheck,
    tag: "< 2 segundos",
  },
];

function FlowNode({
  icon: Icon,
  label,
  detail,
  highlight = false,
}: {
  icon: typeof Landmark;
  label: string;
  detail: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`border p-3.5 ${
        highlight
          ? "border-signal-500/55 bg-signal-500/10"
          : "border-bone/15 bg-bone/[0.03]"
      }`}
    >
      <span
        className={`flex size-7 items-center justify-center border ${
          highlight
            ? "border-signal-500/40 bg-signal-500/15 text-signal-300"
            : "border-bone/15 bg-bone/[0.04] text-bone/55"
        }`}
      >
        <Icon className="size-3.5" strokeWidth={1.7} />
      </span>
      <p className="mt-3 text-[10px] font-semibold text-bone/85">{label}</p>
      <p className="mt-0.5 text-[8.5px] leading-relaxed text-bone/45">
        {detail}
      </p>
    </div>
  );
}

function FlowArrow({
  label,
  dashed = false,
}: {
  label: string;
  dashed?: boolean;
}) {
  return (
    <div className="flex items-center justify-center gap-2 md:flex-col md:gap-1">
      <span className="font-mono text-[6.5px] uppercase tracking-[0.12em] text-bone/40 md:order-first">
        {label}
      </span>
      <ArrowRight
        className={`size-3.5 rotate-90 ${
          dashed ? "text-bone/25" : "text-signal-400"
        } md:rotate-0`}
        strokeWidth={1.8}
      />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative border-t border-ink/15 py-20 sm:py-28"
    >
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <div className="max-w-[780px]">
              <SectionLabel index="02">Cómo funciona</SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(2rem,5.3vw,4.2rem)] font-bold uppercase leading-[0.92] tracking-[-0.045em] text-ink">
                Cuatro pasos.
                <br />
                <span className="text-signal-600">Cero intermediarios.</span>
              </h2>
              <p className="mt-6 max-w-[560px] text-[14px] leading-[1.75] text-smoke sm:text-[15px]">
                Un solo flujo: tu cliente paga a tu cuenta y sencillopay hace
                que todo cuadre, se notifique y llegue a tu sistema.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="border-l-2 border-signal-500 bg-surface px-4 py-3 lg:min-w-[250px]">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink">
                <Clock3 className="size-3.5 text-signal-600" strokeWidth={2} />
                Implementación en 48 h
              </div>
              <p className="mt-2 max-w-[250px] text-[10.5px] leading-relaxed text-smoke">
                Integración guiada con tu banco, WhatsApp y ERP. Sin desarrollo
                de tu lado.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Money + data flow */}
        <Reveal delay={60} className="mt-12 lg:mt-14">
          <div className="overflow-hidden border border-ink bg-ink text-bone">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bone/15 px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-2.5">
                <span className="flex size-7 items-center justify-center border border-signal-500/30 bg-signal-500/10">
                  <Landmark
                    className="size-3.5 text-signal-300"
                    strokeWidth={1.7}
                  />
                </span>
                <p className="font-display text-[12px] font-semibold uppercase tracking-[-0.01em] text-bone">
                  Flujo del dinero
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="border border-bone/15 bg-bone/[0.03] px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-bone/45">
                  API / C2P
                </span>
                <span className="flex items-center gap-1 border border-signal-500/30 bg-signal-500/10 px-2 py-0.5 font-mono text-[7px] uppercase tracking-[0.1em] text-signal-300">
                  <ShieldCheck className="size-2.5" strokeWidth={1.8} />
                  0 custodia
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
                <FlowNode
                  icon={Smartphone}
                  label="Cliente"
                  detail="Paga desde su banco"
                />
                <FlowArrow label="100% directo" />
                <FlowNode
                  icon={Landmark}
                  label="Tu cuenta"
                  detail="Cuenta jurídica · BDT u otros bancos"
                  highlight
                />
                <FlowArrow label="Notificación" dashed />
                <FlowNode
                  icon={Server}
                  label="sencillopay"
                  detail="Solo datos: referencia, monto y RIF/cédula"
                />
                <FlowArrow label="Webhook" dashed />
                <FlowNode
                  icon={Webhook}
                  label="Tu operación"
                  detail="ERP · WhatsApp · factura"
                />
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {[
                  {
                    icon: ShieldCheck,
                    text: "El dinero nunca pasa por sencillopay.",
                  },
                  {
                    icon: Clock3,
                    text: "Sin payouts ni liquidaciones.",
                  },
                  {
                    icon: MessageCircle,
                    text: "Cliente y ERP notificados al instante.",
                  },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 border border-bone/10 bg-bone/[0.02] px-3 py-2 text-[8.5px] text-bone/55"
                  >
                    <item.icon
                      className="size-3 shrink-0 text-signal-400/80"
                      strokeWidth={1.8}
                    />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
          {STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 70} className="h-full">
              <article className="group flex h-full flex-col border-t-2 border-ink pt-4 transition-colors duration-300 hover:border-signal-500">
                <div className="flex items-start justify-between">
                  <span className="font-display text-[46px] font-bold leading-[0.8] tracking-[-0.06em] text-ink/15 transition-colors duration-300 group-hover:text-signal-500">
                    {step.number}
                  </span>
                  <span className="flex size-8 items-center justify-center border border-ink/20 text-smoke transition-colors duration-300 group-hover:border-signal-500 group-hover:text-signal-600">
                    <step.icon className="size-3.5" strokeWidth={1.6} />
                  </span>
                </div>

                <div className="mt-5">
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal-700">
                    {step.kicker}
                  </p>
                  <h3 className="mt-2 font-display text-[clamp(1.15rem,1.9vw,1.35rem)] font-bold uppercase leading-[1.1] tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[11.5px] leading-[1.7] text-smoke">
                    {step.description}
                  </p>
                </div>

                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-1.5 border border-ink/15 bg-surface px-2 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-smoke">
                    <span className="size-1 bg-signal-500" />
                    {step.tag}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-ink/20 bg-paper-deep px-5 py-4 sm:flex-row sm:items-center">
            <p className="max-w-[760px] text-[11.5px] leading-relaxed text-smoke">
              <span className="font-semibold text-ink">
                Implementación guiada en 48 horas.
              </span>{" "}
              Conectamos tu cuenta bancaria, tu WhatsApp Business y tu sistema
              administrativo. Tú solo apruebas; el dinero nunca sale de tu banco.
            </p>
            <a
              href="#contacto"
              className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:text-signal-600"
            >
              Agendar diagnóstico
              <ArrowUpRight
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
