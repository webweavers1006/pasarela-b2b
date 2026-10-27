"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowRightLeft,
  ArrowUpRight,
  Check,
  CheckCheck,
  ChevronDown,
  Fingerprint,
  Hash,
  Landmark,
  Loader2,
  Lock,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Webhook,
} from "lucide-react";
import { LogoMark } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

const METHODS = [
  { id: "c2p", label: "C2P", icon: Landmark },
  { id: "pago-movil", label: "Pago Móvil", icon: Smartphone },
  { id: "transferencia", label: "Transferencia", icon: ArrowRightLeft },
] as const;

type MethodId = (typeof METHODS)[number]["id"];
type Phase = "idle" | "processing" | "matched";
type DocumentType = "V" | "E" | "J" | "G";

const DOCUMENT_TYPES: { value: DocumentType; label: string }[] = [
  { value: "V", label: "V" },
  { value: "E", label: "E" },
  { value: "J", label: "J" },
  { value: "G", label: "G" },
];

const BANKS = [
  "Banesco",
  "Mercantil",
  "BBVA Provincial",
  "Banco de Venezuela",
  "BNC",
  "Bancamiga",
  "Banplus",
  "Banco Exterior",
];

const MERCHANT_ACCOUNT = {
  bank: "BDT",
  holder: "Cuenta jurídica del comercio",
  account: "****4821",
};

function parseAmount(raw: string) {
  const cleaned = raw.replace(/\s/g, "").replace(/[^\d.,]/g, "");
  if (!cleaned) return 0;
  if (cleaned.includes(",")) {
    return Number(cleaned.replace(/\./g, "").replace(",", ".")) || 0;
  }
  const lastDot = cleaned.lastIndexOf(".");
  if (lastDot !== -1 && cleaned.length - lastDot - 1 <= 2) {
    return Number(cleaned) || 0;
  }
  return Number(cleaned.replace(/\./g, "")) || 0;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("es-VE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatDocument(digits: string, type: DocumentType) {
  if (!digits) return "";
  if ((type === "J" || type === "G") && digits.length > 8) {
    const base = digits.slice(0, -1);
    const check = digits.slice(-1);
    return `${new Intl.NumberFormat("es-VE").format(Number(base))}-${check}`;
  }
  return new Intl.NumberFormat("es-VE").format(Number(digits));
}

function createReference() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

const fieldClass =
  "h-11 w-full rounded-[2px] border border-white/[0.08] bg-black/25 px-3 text-[13px] text-bone/90 outline-none transition-colors duration-200 placeholder:text-white/25 hover:border-white/[0.12] focus:border-signal-400/35 focus:bg-black/35 focus:ring-4 focus:ring-signal-400/[0.055] disabled:cursor-not-allowed disabled:opacity-50";
const labelClass =
  "text-[9.5px] font-medium uppercase tracking-[0.14em] text-white/50";

export function Simulator() {
  const [method, setMethod] = useState<MethodId>("c2p");
  const [amount, setAmount] = useState("1.480,00");
  const [reference, setReference] = useState("045122");
  const [payerDoc, setPayerDoc] = useState("12345678");
  const [docType, setDocType] = useState<DocumentType>("V");
  const [bank, setBank] = useState("Banesco");
  const [phase, setPhase] = useState<Phase>("idle");
  const [step, setStep] = useState(0);
  const [elapsed, setElapsed] = useState("1,1");
  const [error, setError] = useState("");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const activeMethod = METHODS.find((item) => item.id === method) ?? METHODS[0];
  const amountValue = parseAmount(amount);
  const cleanDocument = payerDoc.replace(/\D/g, "");
  const formattedAmount = formatNumber(amountValue);
  const formattedDocument = formatDocument(cleanDocument, docType);
  const processing = phase === "processing";
  const matched = phase === "matched";

  useEffect(() => {
    const pending = timers.current;
    return () => {
      pending.forEach(clearTimeout);
      timers.current = [];
    };
  }, []);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const resetIfMatched = () => {
    setError("");
    if (phase === "matched") {
      clearTimers();
      setPhase("idle");
      setStep(0);
    }
  };

  const startSimulation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (processing) return;

    const nextAmount = parseAmount(amount);
    if (!nextAmount || nextAmount <= 0) {
      setError("Ingresa un monto válido para simular el cobro.");
      return;
    }
    if (reference.length !== 6) {
      setError("La referencia debe tener 6 dígitos.");
      return;
    }
    if (cleanDocument.length < 6) {
      setError("Ingresa un RIF o cédula válido para continuar.");
      return;
    }

    clearTimers();
    setError("");

    if (matched) {
      setReference(createReference());
    }

    const latency = (0.8 + Math.random() * 0.5).toFixed(1).replace(".", ",");
    setElapsed(latency);
    setPhase("processing");
    setStep(0);

    timers.current.push(setTimeout(() => setStep(1), 420));
    timers.current.push(setTimeout(() => setStep(2), 780));
    timers.current.push(setTimeout(() => setStep(3), 1120));
    timers.current.push(
      setTimeout(() => {
        setStep(4);
        setPhase("matched");
      }, 1550),
    );
  };

  const changeMethod = (nextMethod: MethodId) => {
    if (processing) return;
    resetIfMatched();
    setMethod(nextMethod);
  };

  const checks = [
    {
      label: "Referencia",
      value: reference || "—",
      icon: Hash,
    },
    {
      label: "Monto",
      value: `Bs. ${formattedAmount}`,
      icon: Landmark,
    },
    {
      label: "RIF / Cédula",
      value: `${docType}-${formattedDocument || "—"}`,
      icon: Fingerprint,
    },
    {
      label: "Cuenta destino",
      value: `${MERCHANT_ACCOUNT.bank} ${MERCHANT_ACCOUNT.account}`,
      icon: ArrowDownToLine,
    },
  ];

  const statusLabel =
    phase === "idle"
      ? "Esperando un pago directo"
      : processing
        ? "Conciliando pago directo…"
        : "Conciliado · dinero en tu cuenta";

  const processingLabel =
    step === 0
      ? "Leyendo la notificación del banco…"
      : step === 1
        ? "Notificación recibida · match por referencia…"
        : step === 2
          ? "Cruzando monto y RIF/cédula…"
          : "Abono directo confirmado en tu cuenta…";

  return (
    <section
      id="simulador"
      className="relative overflow-hidden border-t-2 border-ink bg-ink py-20 text-bone sm:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 paper-grid-dark opacity-45 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent_80%)]" />
        <div className="absolute -right-6 top-10 font-display text-[260px] font-bold leading-none tracking-[-0.08em] text-bone/[0.035]">
          03
        </div>
      </div>

      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <Reveal>
            <div className="max-w-[760px]">
              <SectionLabel index="03" tone="dark">
                Simulador de conciliación directa
              </SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,5.3vw,4.2rem)] font-bold uppercase leading-[0.92] tracking-[-0.045em] text-bone">
                La conciliación directa,
                <br />
                <span className="text-signal-400">en vivo.</span>
              </h2>
              <p className="mt-6 max-w-[580px] text-[14px] leading-[1.75] text-bone/60 sm:text-[15px]">
                Elige el banco, simula un pago y observa cómo la notificación
                bancaria se convierte en un match, un comprobante por WhatsApp y
                un webhook a tu ERP. El dinero se abona en la cuenta del
                comercio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <span className="inline-flex items-center gap-2 border border-signal-500/40 bg-signal-500/10 px-3 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.1em] text-signal-300">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping-slow bg-signal-400" />
                  <span className="relative inline-flex size-1.5 bg-signal-500" />
                </span>
                Demo interactiva · sin registro
              </span>
              <p className="max-w-[250px] text-[10.5px] leading-relaxed text-bone/45 lg:text-right">
                Simulación del flujo de conciliación. No se mueve dinero real ni
                se custodia ningún fondo.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60} className="mt-12 lg:mt-14">
          <div className="relative">
            <div className="relative border border-bone/20 bg-[#080b0a] shadow-[8px_8px_0_rgba(244,241,233,0.08)]">
              <div className="overflow-hidden border-t-[3px] border-signal-500 bg-[#080b0a]">
                {/* Widget header */}
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] bg-white/[0.012] px-4 py-3.5 sm:px-5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping-slow bg-signal-400/70" />
                      <span className="relative inline-flex size-2 bg-signal-500" />
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.04em] text-white/70">
                      Simulador de conciliación directa
                    </p>
                    <span className="hidden border border-white/[0.1] bg-white/[0.025] px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.12em] text-white/50 sm:inline">
                      Interactivo
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[7.5px] uppercase tracking-[0.12em] text-white/50">
                    <Lock className="size-3 text-signal-300/45" />
                    <span className="hidden sm:inline">Entorno de demostración</span>
                    <span className="hidden text-white/35 md:inline">· SANDBOX v2.4</span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-[0.93fr_1.07fr]">
                  {/* Form */}
                  <form
                    onSubmit={startSimulation}
                    aria-busy={processing}
                    className="relative border-b border-white/[0.055] p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-[8px] uppercase tracking-[0.17em] text-signal-300/55">
                        01 — Configura el cobro
                      </p>
                      <span className="flex items-center gap-1.5 font-mono text-[7.5px] uppercase tracking-[0.1em] text-white/40">
                        <ShieldCheck className="size-3 text-white/45" />
                        Datos protegidos
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-[clamp(1.4rem,2.3vw,1.7rem)] font-bold uppercase leading-[1.1] tracking-[-0.03em] text-bone">
                      Simula un pago directo.
                    </h3>
                    <p className="mt-2 text-[12px] leading-relaxed text-mist/75">
                      Usa los datos precargados o cámbialos. El dinero entra a la
                      cuenta del comercio; sencillopay solo recibe la
                      notificación y concilia.
                    </p>

                    <div className="mt-6">
                      <p className={labelClass}>Método de pago</p>
                      <div
                        role="group"
                        aria-label="Método de pago"
                        className="mt-2 grid grid-cols-3 gap-1 rounded-[2px] border border-white/[0.06] bg-black/25 p-1"
                      >
                        {METHODS.map((item) => {
                          const selected = item.id === method;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              aria-pressed={selected}
                              disabled={processing}
                              onClick={() => changeMethod(item.id)}
                              className={`flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-[2px] border text-[9.5px] transition-all duration-200 disabled:cursor-not-allowed sm:text-[10.5px] ${
                                selected
                                  ? "border-signal-500/40 bg-signal-500/10 text-bone"
                                  : "border-transparent text-white/50 hover:bg-white/[0.025] hover:text-white/65"
                              }`}
                            >
                              <item.icon
                                className={`size-3.5 ${
                                  selected ? "text-signal-300" : "text-white/45"
                                }`}
                                strokeWidth={1.7}
                              />
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="sim-amount" className={labelClass}>
                          Monto del cobro
                        </label>
                        <div className="relative mt-2">
                          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 font-mono text-[9px] text-white/45">
                            Bs.
                          </span>
                          <input
                            id="sim-amount"
                            name="amount"
                            inputMode="decimal"
                            autoComplete="off"
                            disabled={processing}
                            value={amount}
                            maxLength={14}
                            onChange={(event) => {
                              resetIfMatched();
                              setAmount(
                                event.target.value
                                  .replace(/[^\d.,]/g, "")
                                  .slice(0, 14),
                              );
                            }}
                            onBlur={() => {
                              if (amountValue > 0) {
                                setAmount(formatNumber(amountValue));
                              }
                            }}
                            className={`${fieldClass} pl-[34px] font-mono tabular`}
                            aria-describedby={error ? "sim-error" : undefined}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="sim-reference" className={labelClass}>
                          Referencia
                        </label>
                        <div className="relative mt-2">
                          <input
                            id="sim-reference"
                            name="reference"
                            inputMode="numeric"
                            autoComplete="off"
                            disabled={processing}
                            value={reference}
                            maxLength={6}
                            onChange={(event) => {
                              resetIfMatched();
                              setReference(
                                event.target.value.replace(/\D/g, "").slice(0, 6),
                              );
                            }}
                            className={`${fieldClass} pr-10 font-mono tracking-[0.1em] tabular`}
                            aria-describedby={error ? "sim-error" : undefined}
                          />
                          <button
                            type="button"
                            disabled={processing}
                            onClick={() => {
                              resetIfMatched();
                              setReference(createReference());
                            }}
                            aria-label="Generar nueva referencia"
                            className="absolute right-2.5 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-[2px] text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white/60 disabled:opacity-40"
                          >
                            <RefreshCw className="size-3" strokeWidth={1.7} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label htmlFor="sim-doc" className={labelClass}>
                          RIF / Cédula del pagador
                        </label>
                        <div className="mt-2 flex">
                          <div className="relative shrink-0">
                            <select
                              aria-label="Tipo de documento"
                              disabled={processing}
                              value={docType}
                              onChange={(event) => {
                                resetIfMatched();
                                setDocType(event.target.value as DocumentType);
                              }}
                              className="h-11 w-[62px] appearance-none rounded-l-[2px] border border-r-0 border-white/[0.08] bg-black/25 pl-1.5 pr-5 text-center font-mono text-[11px] text-white/65 outline-none transition-colors hover:border-white/[0.12] focus:border-signal-400/35 focus:bg-black/35 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              {DOCUMENT_TYPES.map((item) => (
                                <option key={item.value} value={item.value}>
                                  {item.label}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-1.5 top-1/2 size-2.5 -translate-y-1/2 text-white/40" />
                          </div>
                          <input
                            id="sim-doc"
                            name="payerDoc"
                            inputMode="numeric"
                            autoComplete="off"
                            disabled={processing}
                            value={formattedDocument}
                            onChange={(event) => {
                              resetIfMatched();
                              setPayerDoc(
                                event.target.value.replace(/\D/g, "").slice(0, 9),
                              );
                            }}
                            className={`${fieldClass} rounded-l-none font-mono tabular`}
                            aria-describedby={error ? "sim-error" : undefined}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="sim-bank" className={labelClass}>
                          Banco emisor
                        </label>
                        <div className="relative mt-2">
                          <select
                            id="sim-bank"
                            name="bank"
                            disabled={processing}
                            value={bank}
                            onChange={(event) => {
                              resetIfMatched();
                              setBank(event.target.value);
                            }}
                            className={`${fieldClass} appearance-none pr-9`}
                          >
                            {BANKS.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-3.5 -translate-y-1/2 text-white/40" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className={labelClass}>Cuenta destino</p>
                      <div className="mt-2 flex items-center gap-2.5 rounded-[2px] border border-signal-400/[0.12] bg-signal-400/[0.035] px-3 py-2.5">
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-[2px] border border-signal-400/15 bg-signal-400/[0.06]">
                          <Landmark className="size-3.5 text-signal-300/80" strokeWidth={1.7} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[10px] font-medium text-white/70">
                            {MERCHANT_ACCOUNT.holder} · {MERCHANT_ACCOUNT.bank}
                          </p>
                          <p className="mt-0.5 truncate text-[8px] text-white/40">
                            {MERCHANT_ACCOUNT.account} · El dinero se abona aquí, no
                            en sencillopay
                          </p>
                        </div>
                        <span className="hidden shrink-0 rounded border border-signal-400/15 bg-signal-400/[0.06] px-1.5 py-0.5 font-mono text-[6.5px] uppercase tracking-[0.08em] text-signal-300/65 sm:block">
                          Directo
                        </span>
                      </div>
                    </div>

                    {error && (
                      <p
                        id="sim-error"
                        role="alert"
                        className="mt-3 rounded-[2px] border border-amber-300/15 bg-amber-300/[0.05] px-3 py-2 text-[10.5px] text-amber-200/75"
                      >
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={processing}
                      className={`group mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-[2px] text-[12.5px] font-semibold transition-all duration-300 disabled:cursor-wait ${
                        matched
                          ? "border border-signal-400/25 bg-signal-400/[0.12] text-signal-200 hover:bg-signal-400/[0.18]"
                          : "bg-signal-500 text-ink shadow-[0_12px_40px_-16px_rgba(255,74,28,0.5)] hover:bg-signal-400 active:scale-[0.99]"
                      }`}
                    >
                      {processing ? (
                        <>
                          Conciliando pago directo…
                          <Loader2 className="size-4 animate-spin" strokeWidth={2} />
                        </>
                      ) : matched ? (
                        <>
                          Simular otro pago
                          <RefreshCw className="size-3.5" strokeWidth={2} />
                        </>
                      ) : (
                        <>
                          Simular pago directo
                          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                        </>
                      )}
                    </button>

                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[8.5px] text-white/45">
                      <Lock className="size-2.5" />
                      Simulación segura. El dinero no pasa por sencillopay.
                    </div>

                    <div className="mt-5 border-t border-white/[0.055] pt-4">
                      <p className="text-[10px] leading-relaxed text-white/50">
                        ¿Quieres verlo con tu volumen y tus bancos reales?{" "}
                        <a
                          href="#contacto"
                          className="group inline-flex items-center gap-0.5 text-signal-300/80 transition-colors hover:text-signal-200"
                        >
                          Agenda un diagnóstico
                          <ArrowUpRight className="size-2.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                      </p>
                    </div>
                  </form>

                  {/* Result */}
                  <div className="relative overflow-hidden border-t border-white/[0.06] bg-[#0b0e0b] p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
                    <div className="relative flex items-center justify-between gap-3">
                      <p className="font-mono text-[8px] uppercase tracking-[0.17em] text-signal-300/55">
                        02 — Mira la conciliación directa
                      </p>
                      <span className="flex items-center gap-1.5 rounded-none border border-white/[0.06] bg-white/[0.02] px-2 py-1 font-mono text-[7px] uppercase tracking-[0.1em] text-white/45">
                        <MessageCircle className="size-2.5 text-wa/60" />
                        WhatsApp conectado
                      </span>
                    </div>

                    <div className="relative mt-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="relative flex size-2">
                          {matched && (
                            <span className="absolute inline-flex size-full animate-ping-slow rounded-none bg-signal-400" />
                          )}
                          <span
                            className={`relative inline-flex size-2 rounded-none ${
                              matched
                                ? "bg-signal-400"
                                : processing
                                  ? "bg-amber-300"
                                  : "bg-white/20"
                            }`}
                          />
                        </span>
                        <p
                          role="status"
                          aria-live="polite"
                          className={`text-[10.5px] ${
                            matched
                              ? "font-medium text-signal-200"
                              : processing
                                ? "text-amber-100/60"
                                : "text-white/50"
                          }`}
                        >
                          {statusLabel}
                        </p>
                      </div>
                      <span
                        className={`font-mono text-[7.5px] uppercase tracking-[0.12em] transition-colors ${
                          matched ? "text-signal-300/70" : "text-white/35"
                        }`}
                      >
                        {matched ? `Match en ${elapsed} s` : "En espera"}
                      </span>
                    </div>

                    {/* WhatsApp chat */}
                    <div className="relative mt-3 overflow-hidden rounded-[3px] border border-white/[0.08] bg-wa-panel shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]">
                      <div className="relative flex items-center gap-2.5 border-b border-white/[0.06] bg-[#1f2c34] px-3.5 py-2.5">
                        <span className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-[2px] bg-wa">
                          <LogoMark className="size-5" inverted />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[9.5px] font-medium text-white/85">
                            sencillopay · Automatizaciones
                          </p>
                          <p className="flex items-center gap-1 text-[7.5px] text-wa/75">
                            <span className="size-1 rounded-none bg-wa" />
                            en línea · WhatsApp Business
                          </p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 text-white/40">
                          <span className="hidden text-[7px] uppercase tracking-[0.1em] sm:block">
                            Business
                          </span>
                          <span className="flex size-6 items-center justify-center rounded-none border border-white/[0.06]">
                            <MessageCircle className="size-3" />
                          </span>
                        </div>
                      </div>

                      {processing && (
                        <div
                          aria-hidden="true"
                          className="absolute inset-x-0 top-[50px] z-10 h-px overflow-hidden"
                        >
                          <div className="h-px w-1/3 animate-scan bg-gradient-to-r from-transparent via-signal-300/70 to-transparent" />
                        </div>
                      )}

                      <div
                        className={`chat-pattern relative flex min-h-[300px] flex-col p-4 sm:min-h-[318px] ${
                          phase === "idle" ? "justify-center" : "justify-end"
                        }`}
                      >
                        <div className="mx-auto mb-3 w-fit rounded-[2px] bg-[#182229]/90 px-2 py-0.5 text-[7px] uppercase tracking-[0.13em] text-white/40">
                          Hoy
                        </div>

                        {phase === "idle" && (
                          <div className="flex flex-col items-center justify-center py-3 text-center">
                            <span className="relative flex size-12 items-center justify-center rounded-none border border-dashed border-white/10">
                              <MessageCircle className="size-5 text-white/30" strokeWidth={1.4} />
                              <span className="absolute inset-0 animate-ping-slow rounded-none border border-white/[0.04]" />
                            </span>
                            <p className="mt-4 text-[10px] text-white/45">
                              La confirmación que recibe tu cliente aparecerá aquí.
                            </p>
                            <p className="mt-1 max-w-[225px] text-[8.5px] leading-relaxed text-white/30">
                              El dinero entra a tu cuenta; el comprobante y la
                              factura salen en segundos.
                            </p>

                            <div className="mt-4 w-full max-w-[92%] self-end rounded-[2px] border border-dashed border-white/[0.09] bg-white/[0.015] p-3 text-left">
                              <div className="flex items-center justify-between gap-2">
                                <p className="text-[8.5px] font-medium text-white/40">
                                  ✅ Pago confirmado
                                </p>
                                <span className="rounded border border-white/[0.07] px-1.5 py-0.5 font-mono text-[6px] uppercase tracking-[0.1em] text-white/25">
                                  Vista previa
                                </span>
                              </div>
                              <div className="mt-2.5 space-y-1.5">
                                <div className="h-1.5 w-2/3 rounded-none bg-white/[0.055]" />
                                <div className="h-1.5 w-1/2 rounded-none bg-white/[0.04]" />
                                <div className="h-1.5 w-3/5 rounded-none bg-white/[0.035]" />
                              </div>
                              <p className="mt-2.5 font-mono text-[7px] text-white/25">
                                Bs. {formattedAmount} · Ref. {reference}
                              </p>
                            </div>
                          </div>
                        )}

                        {processing && (
                          <div className="animate-rise space-y-2.5" aria-hidden="true">
                            <div className="ml-auto max-w-[94%] rounded-[2px] rounded-tr-[3px] bg-[#005c4b] p-3">
                              <div className="flex items-center gap-2">
                                <Loader2 className="size-3.5 animate-spin text-signal-200/80" />
                                <p className="text-[9.5px] font-medium text-white/80">
                                  Conciliando pago directo…
                                </p>
                              </div>
                              <div className="mt-3 h-1 overflow-hidden rounded-none bg-white/[0.08]">
                                <div
                                  className="h-full rounded-none bg-signal-300/70 transition-all duration-500"
                                  style={{
                                    width: `${Math.min(96, 14 + step * 22)}%`,
                                  }}
                                />
                              </div>
                              <p className="mt-2 font-mono text-[7.5px] text-white/55">
                                REF {reference} · Bs. {formattedAmount}
                              </p>
                            </div>
                            <div className="max-w-[86%] rounded-[2px] rounded-tl-[3px] bg-[#1f2c34] p-2.5">
                              <p className="text-[8.5px] leading-relaxed text-white/55">
                                {processingLabel}
                              </p>
                            </div>
                          </div>
                        )}

                        {matched && (
                          <div key={`${reference}-${amount}`} className="animate-rise" aria-hidden="true">
                            <div className="ml-auto max-w-[94%] rounded-[2px] rounded-tr-[3px] bg-[#005c4b] p-3.5 shadow-lg">
                              <p className="text-[10px] font-medium text-white/95">
                                ✅ Pago confirmado
                              </p>
                              <p className="mt-1 text-[8.5px] leading-relaxed text-white/70">
                                Clínica Los Robles · Cobro #INV-2048
                              </p>

                              <p className="mt-3 font-display text-[17px] font-semibold tracking-[-0.02em] text-white/95 tabular">
                                Bs. {formattedAmount}
                              </p>
                              <p className="mt-1.5 text-[8.5px] leading-[1.7] text-white/70">
                                {activeMethod.label} · {bank}
                                <br />
                                Ref. {reference} · {docType}-{formattedDocument}
                                <br />
                                <span className="text-white/55">
                                  Factura #INV-2048 adjunta
                                </span>
                              </p>

                              <div className="mt-2.5 flex items-center justify-between border-t border-white/[0.09] pt-2">
                                <span className="flex items-center gap-1 text-[7.5px] text-signal-200/90">
                                  <Check className="size-2.5" strokeWidth={2.5} />
                                  Conciliado en {elapsed} s
                                </span>
                                <span className="flex items-center gap-1 text-[7px] text-white/70">
                                  09:41
                                  <CheckCheck className="size-3 text-[#53bdeb]/80" />
                                </span>
                              </div>
                            </div>

                            <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 pl-1">
                              <span className="flex items-center gap-1.5">
                                <span className="flex size-4 items-center justify-center rounded-none bg-signal-400/10">
                                  <Check className="size-2.5 text-signal-300" strokeWidth={3} />
                                </span>
                                <p className="text-[7.5px] text-white/60">
                                  Comprobante + factura enviados
                                </p>
                              </span>
                              <span className="flex items-center gap-1.5">
                                <span className="flex size-4 items-center justify-center rounded-none bg-signal-400/10">
                                  <Check className="size-2.5 text-signal-300" strokeWidth={3} />
                                </span>
                                <p className="text-[7.5px] text-white/60">
                                  ERP actualizado
                                </p>
                              </span>
                              <span className="rounded border border-signal-400/15 bg-signal-400/[0.06] px-1.5 py-0.5 font-mono text-[6.5px] uppercase tracking-[0.08em] text-signal-300/65">
                                Bs. 0 retenido
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="border-t border-white/[0.055] bg-[#111b21] px-3.5 py-2 text-center">
                        <p className="text-[7.5px] text-white/40">
                          Mensaje automático · no requiere respuesta
                        </p>
                      </div>
                    </div>

                    {/* Match checklist */}
                    <div className="mt-3 grid grid-cols-2 gap-1.5">
                      {checks.map((check, index) => {
                        const done = matched || step > index;
                        const active = processing && !done && step === index;

                        return (
                          <div
                            key={check.label}
                            className={`flex items-center gap-2 rounded-[2px] border px-2.5 py-2 transition-colors duration-300 ${
                              done
                                ? "border-signal-400/[0.14] bg-signal-400/[0.035]"
                                : "border-white/[0.05] bg-black/20"
                            }`}
                          >
                            <span
                              className={`flex size-4 shrink-0 items-center justify-center rounded-none border ${
                                done
                                  ? "border-signal-400/25 bg-signal-400/15"
                                  : "border-white/[0.08] bg-white/[0.02]"
                              }`}
                            >
                              {done ? (
                                <Check
                                  className="size-2.5 text-signal-300"
                                  strokeWidth={3}
                                />
                              ) : active ? (
                                <Loader2 className="size-2.5 animate-spin text-signal-300/80" />
                              ) : (
                                <span className="size-1 rounded-none bg-white/15" />
                              )}
                            </span>
                            <div className="min-w-0">
                              <p className="text-[7.5px] uppercase tracking-[0.08em] text-white/45">
                                {check.label}
                              </p>
                              <p
                                className={`truncate font-mono text-[7.5px] ${
                                  done ? "text-signal-200/65" : "text-white/40"
                                }`}
                              >
                                {check.value}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
                      <div
                        className={`flex items-center justify-between gap-2 rounded-[2px] border px-3 py-2 transition-colors duration-300 ${
                          matched
                            ? "border-signal-400/[0.14] bg-signal-400/[0.035]"
                            : "border-white/[0.05] bg-black/20"
                        }`}
                      >
                        <span className="flex items-center gap-2 text-[8px] text-white/50">
                          <MessageCircle
                            className={`size-3 ${
                              matched ? "text-signal-300/70" : "text-white/35"
                            }`}
                            strokeWidth={1.7}
                          />
                          WhatsApp + factura
                        </span>
                        <span
                          className={`font-mono text-[6.5px] uppercase tracking-[0.08em] transition-colors ${
                            matched ? "text-signal-300/65" : "text-white/35"
                          }`}
                        >
                          {matched ? "Enviado" : "En espera"}
                        </span>
                      </div>

                      <div
                        className={`flex items-center justify-between gap-2 rounded-[2px] border px-3 py-2 transition-colors duration-300 ${
                          matched
                            ? "border-signal-400/[0.14] bg-signal-400/[0.035]"
                            : "border-white/[0.05] bg-black/20"
                        }`}
                      >
                        <span className="flex items-center gap-2 text-[8px] text-white/50">
                          <Webhook
                            className={`size-3 ${
                              matched ? "text-signal-300/70" : "text-white/35"
                            }`}
                            strokeWidth={1.7}
                          />
                          Webhook ERP
                        </span>
                        <span
                          className={`font-mono text-[6.5px] uppercase tracking-[0.08em] transition-colors ${
                            matched ? "text-signal-300/65" : "text-white/35"
                          }`}
                        >
                          {matched ? "200 OK" : "En espera"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-3 rounded-[2px] border border-white/[0.05] bg-black/20 px-3 py-2">
                      <span className="text-[7.5px] uppercase tracking-[0.1em] text-white/35">
                        Ruta del dinero
                      </span>
                      <span className="flex items-center gap-1.5 text-[8px] text-signal-200/70">
                        Cliente
                        <ArrowRight className="size-2.5" strokeWidth={2} />
                        Tu cuenta {MERCHANT_ACCOUNT.bank}
                        <span className="ml-1 rounded border border-signal-400/15 bg-signal-400/[0.06] px-1.5 py-0.5 font-mono text-[6px] uppercase tracking-[0.08em] text-signal-300/55">
                          0 custodia
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Widget footer */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.055] bg-white/[0.012] px-4 py-3 sm:px-5">
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[8px] text-white/50">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="size-3 text-signal-300/45" />
                      El dinero no pasa por sencillopay
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Webhook className="size-3 text-signal-300/40" />
                      Webhooks firmados
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="size-3 text-wa/45" />
                      WhatsApp Business
                    </span>
                  </div>
                  <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/35">
                    Demo de producto
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
