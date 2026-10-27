"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const INITIAL_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  volume: "",
  branches: "",
  erp: "",
  message: "",
  consent: false,
};

const inputClass =
  "mt-2 h-11 w-full rounded-none border border-ink/20 bg-paper px-3.5 text-[13px] text-ink outline-none transition-colors duration-200 placeholder:text-smoke/45 hover:border-ink/40 focus:border-signal-600 focus:ring-2 focus:ring-signal-500/15";
const labelClass =
  "font-mono text-[8.5px] font-medium uppercase tracking-[0.12em] text-smoke";

const DEMO_POINTS = [
  "Diagnóstico de tu flujo actual de cobro",
  "Arquitectura API/C2P con tu banco y ERP",
  "Propuesta SaaS con volumen, sucursales y fee de uso",
];

export function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const update =
    (field: keyof typeof INITIAL_FORM) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      const target = event.target;
      setForm((current) => ({
        ...current,
        [field]:
          target instanceof HTMLInputElement && target.type === "checkbox"
            ? target.checked
            : target.value,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
  };

  const firstName = form.name.trim().split(/\s+/)[0] || "equipo";

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-ink/15 py-20 sm:py-28"
    >
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="self-start lg:sticky lg:top-28">
            <div>
              <SectionLabel index="06">Contacto corporativo</SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,4.8vw,3.8rem)] font-bold uppercase leading-[0.92] tracking-[-0.045em] text-ink">
                Diseñemos tu
                <br />
                <span className="text-signal-600">integración directa.</span>
              </h2>
              <p className="mt-6 max-w-[480px] text-[14px] leading-[1.75] text-smoke sm:text-[15px]">
                Agenda un diagnóstico de 20 minutos. Revisamos tu banco, tu ERP
                y tu volumen actual; te entregamos una propuesta SaaS con
                alcance y precio claros.
              </p>

              <ul className="mt-8 space-y-3">
                {DEMO_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="flex size-5 items-center justify-center border border-ink/15 bg-paper">
                      <Check className="size-2.5 text-signal-600" strokeWidth={3} />
                    </span>
                    <span className="text-[12.5px] text-smoke">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="my-8 h-px w-full bg-ink/15" />

              <div className="space-y-2">
                <a
                  href="mailto:hola@sencillopay.com"
                  className="group flex items-center gap-3 border border-ink/15 bg-surface px-3.5 py-3 transition-colors hover:border-ink hover:bg-paper"
                >
                  <span className="flex size-8 items-center justify-center border border-ink/15 bg-paper">
                    <Mail className="size-3.5 text-signal-600" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block font-mono text-[7.5px] uppercase tracking-[0.12em] text-smoke">
                      Correo
                    </span>
                    <span className="mt-0.5 block text-[12px] font-medium text-ink">
                      hola@sencillopay.com
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto size-3.5 text-smoke transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-600" />
                </a>

                <a
                  href="https://wa.me/584245550184?text=Hola%2C%20quiero%20agendar%20un%20diagn%C3%B3stico%20de%20integraci%C3%B3n%20directa%20con%20sencillopay."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-ink/15 bg-surface px-3.5 py-3 transition-colors hover:border-ink hover:bg-paper"
                >
                  <span className="flex size-8 items-center justify-center border border-ink/15 bg-paper">
                    <MessageCircle className="size-3.5 text-wa" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block font-mono text-[7.5px] uppercase tracking-[0.12em] text-smoke">
                      WhatsApp corporativo
                    </span>
                    <span className="mt-0.5 block text-[12px] font-medium text-ink">
                      +58 424 555 0184
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto size-3.5 text-smoke transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-600" />
                </a>

                <div className="flex items-start gap-3 border border-ink/12 bg-paper-deep px-3.5 py-3">
                  <span className="flex size-8 shrink-0 items-center justify-center border border-ink/12 bg-paper">
                    <MapPin className="size-3.5 text-signal-600" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block font-mono text-[7.5px] uppercase tracking-[0.12em] text-smoke">
                      Oficina
                    </span>
                    <span className="mt-0.5 block text-[12px] text-ink">
                      Torre BOD, La Castellana · Caracas
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.08em] text-smoke">
                <Clock3 className="size-3 text-signal-600" />
                Respondemos en menos de 24 horas hábiles.
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mb-2 mr-2 border border-ink bg-surface shadow-[8px_8px_0_#ff4a1c]">
              <div className="flex items-center justify-between gap-3 border-b border-ink bg-ink px-5 py-3 font-mono text-[8px] uppercase tracking-[0.12em] text-bone">
                <span>Diagnóstico de integración</span>
                <span className="flex items-center gap-1.5 text-bone/55">
                  <Clock3 className="size-3 text-signal-400" />
                  20 min
                </span>
              </div>

              {submitted ? (
                <div className="animate-rise flex min-h-[560px] flex-col items-center justify-center p-6 text-center sm:p-8">
                  <span className="relative flex size-16 items-center justify-center border border-ink bg-signal-500">
                    <Check className="size-7 text-ink" strokeWidth={2.4} />
                  </span>
                  <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.18em] text-signal-700">
                    Diagnóstico solicitado
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(1.8rem,3.4vw,2.3rem)] font-bold uppercase leading-[1.02] tracking-[-0.03em] text-ink">
                    Gracias, {firstName}.
                  </h3>
                  <p className="mt-4 max-w-[360px] text-[12.5px] leading-[1.75] text-smoke">
                    Recibimos los datos de{" "}
                    <span className="font-medium text-ink">{form.company}</span>.
                    Nuestro equipo te escribirá a{" "}
                    <span className="font-medium text-ink">{form.email}</span> en
                    menos de 24 horas hábiles.
                  </p>

                  <div className="mt-7 flex w-full max-w-[320px] flex-col gap-2">
                    <a
                      href="#simulador"
                      className="flex h-10 items-center justify-center gap-2 border border-ink/20 bg-paper font-mono text-[8.5px] uppercase tracking-[0.08em] text-ink transition-colors hover:border-ink hover:text-signal-600"
                    >
                      Probar la conciliación directa
                      <ArrowUpRight className="size-3" />
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="font-mono text-[8px] uppercase tracking-[0.08em] text-smoke underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
                    >
                      Enviar otra solicitud
                    </button>
                  </div>

                  <p className="mt-8 text-[8px] text-smoke">
                    ¿Necesitas hablar ahora?{" "}
                    <a
                      href="https://wa.me/584245550184"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-signal-700 underline decoration-signal-600/30 underline-offset-2 transition-colors hover:text-signal-600"
                    >
                      Escríbenos por WhatsApp
                    </a>
                  </p>
                </div>
              ) : (
                <div className="p-5 sm:p-8">
                  <div>
                    <h3 className="font-display text-[clamp(1.5rem,2.5vw,1.95rem)] font-bold uppercase leading-[1.05] tracking-[-0.03em] text-ink">
                      Solicitar diagnóstico
                    </h3>
                    <p className="mt-2 max-w-[400px] text-[12px] leading-relaxed text-smoke">
                      Cuéntanos un poco de tu operación. Te responderemos con
                      una propuesta concreta.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="mt-7">
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className={labelClass}>
                          Nombre y apellido *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={update("name")}
                          className={inputClass}
                          placeholder="María Rondón"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-company" className={labelClass}>
                          Empresa *
                        </label>
                        <input
                          id="contact-company"
                          name="company"
                          required
                          autoComplete="organization"
                          value={form.company}
                          onChange={update("company")}
                          className={inputClass}
                          placeholder="Clínica Los Robles"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className={labelClass}>
                          Correo corporativo *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={form.email}
                          onChange={update("email")}
                          className={inputClass}
                          placeholder="maria@empresa.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className={labelClass}>
                          WhatsApp *
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          value={form.phone}
                          onChange={update("phone")}
                          className={inputClass}
                          placeholder="+58 414 000 0000"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-volume" className={labelClass}>
                          Conciliaciones por mes *
                        </label>
                        <div className="relative">
                          <select
                            id="contact-volume"
                            name="volume"
                            required
                            value={form.volume}
                            onChange={update("volume")}
                            className={`${inputClass} appearance-none pr-10 ${
                              form.volume ? "" : "text-smoke/60"
                            }`}
                          >
                            <option value="" disabled>
                              Selecciona un rango
                            </option>
                            <option value="menos-500">Menos de 500</option>
                            <option value="500-3000">500 – 3.000</option>
                            <option value="3000-10000">3.000 – 10.000</option>
                            <option value="mas-10000">Más de 10.000</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute bottom-3.5 right-3.5 size-3.5 text-smoke" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-branches" className={labelClass}>
                          Sucursales *
                        </label>
                        <div className="relative">
                          <select
                            id="contact-branches"
                            name="branches"
                            required
                            value={form.branches}
                            onChange={update("branches")}
                            className={`${inputClass} appearance-none pr-10 ${
                              form.branches ? "" : "text-smoke/60"
                            }`}
                          >
                            <option value="" disabled>
                              Selecciona una opción
                            </option>
                            <option value="1">1 sucursal</option>
                            <option value="2-5">2 – 5 sucursales</option>
                            <option value="6-20">6 – 20 sucursales</option>
                            <option value="mas-20">Más de 20 sucursales</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute bottom-3.5 right-3.5 size-3.5 text-smoke" />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="contact-erp" className={labelClass}>
                          ERP o sistema administrativo{" "}
                          <span className="normal-case tracking-normal text-smoke/70">
                            (opcional)
                          </span>
                        </label>
                        <input
                          id="contact-erp"
                          name="erp"
                          value={form.erp}
                          onChange={update("erp")}
                          className={inputClass}
                          placeholder="Profit, Odoo, SAP, desarrollo propio…"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="contact-message" className={labelClass}>
                          Cuéntanos tu reto{" "}
                          <span className="normal-case tracking-normal text-smoke/70">
                            (opcional)
                          </span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          value={form.message}
                          onChange={update("message")}
                          rows={3}
                          className="mt-2 w-full resize-none rounded-none border border-ink/20 bg-paper px-3.5 py-3 text-[13px] leading-relaxed text-ink outline-none transition-colors duration-200 placeholder:text-smoke/45 hover:border-ink/40 focus:border-signal-600 focus:ring-2 focus:ring-signal-500/15"
                          placeholder="Ej: conciliamos cientos de pagos a mano cada día y queremos conectar el banco con nuestro ERP…"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex items-start gap-2.5">
                      <span className="relative mt-0.5 flex size-4 shrink-0">
                        <input
                          id="contact-consent"
                          name="consent"
                          type="checkbox"
                          required
                          checked={form.consent}
                          onChange={update("consent")}
                          className="peer size-4 cursor-pointer appearance-none rounded-none border border-ink/25 bg-paper transition-colors checked:border-signal-600 checked:bg-signal-600"
                        />
                        <Check
                          className="pointer-events-none absolute left-0.5 top-0.5 size-3 text-bone opacity-0 transition-opacity peer-checked:opacity-100"
                          strokeWidth={3}
                        />
                      </span>
                      <label
                        htmlFor="contact-consent"
                        className="cursor-pointer text-[9.5px] leading-[1.65] text-smoke"
                      >
                        Acepto la{" "}
                        <a
                          href="/privacidad"
                          className="font-medium text-ink underline decoration-ink/20 underline-offset-2 transition-colors hover:text-signal-600"
                        >
                          política de privacidad
                        </a>{" "}
                        y el tratamiento de mis datos para fines de contacto
                        comercial.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="group mt-5 flex h-12 w-full items-center justify-between gap-2.5 bg-ink pl-5 pr-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.1em] text-bone transition-colors hover:bg-signal-500 hover:text-ink active:scale-[0.995]"
                    >
                      Agendar diagnóstico
                      <span className="flex size-8 items-center justify-center bg-signal-500 text-ink transition-colors group-hover:bg-ink group-hover:text-bone">
                        <ArrowRight className="size-4" strokeWidth={2} />
                      </span>
                    </button>

                    <div className="mt-3 flex items-center justify-center gap-1.5 font-mono text-[7.5px] uppercase tracking-[0.06em] text-smoke">
                      <ShieldCheck className="size-2.5 text-signal-600" />
                      Tus datos están protegidos. Sin spam, solo una
                      conversación útil.
                    </div>

                    <p className="mt-3 text-center text-[8px] leading-relaxed text-smoke/80">
                      sencillopay no recibe ni custodia fondos. La integración
                      se realiza sobre la cuenta bancaria de tu empresa.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
