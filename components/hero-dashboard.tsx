import {
  ArrowRightLeft,
  ArrowUpRight,
  Bell,
  Check,
  Landmark,
  LayoutGrid,
  Lock,
  Plug,
  Receipt,
  RefreshCw,
  Settings,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";
import { LogoMark } from "@/components/logo";

const PAYMENTS = [
  {
    name: "María G. Rondón",
    method: "Pago Móvil",
    bank: "Banesco",
    reference: "045122",
    amount: "Bs. 1.480,00",
    time: "09:42:18",
    kind: "pago" as const,
  },
  {
    name: "Inversiones Tovar",
    method: "C2P",
    bank: "Mercantil",
    reference: "783410",
    amount: "Bs. 12.900,00",
    time: "09:41:52",
    kind: "c2p" as const,
  },
  {
    name: "Luis A. Pérez",
    method: "Transferencia",
    bank: "BNC",
    reference: "559084",
    amount: "Bs. 640,00",
    time: "09:40:07",
    kind: "transferencia" as const,
  },
  {
    name: "Andrea Salas",
    method: "Pago Móvil",
    bank: "Banesco",
    reference: "114093",
    amount: "Bs. 3.250,00",
    time: "09:39:44",
    kind: "pago" as const,
  },
];

const METHOD_STYLES = {
  pago: {
    icon: Smartphone,
    wrapper: "border-signal-400/15 bg-signal-400/[0.07] text-signal-300",
  },
  c2p: {
    icon: Landmark,
    wrapper: "border-sky-400/15 bg-sky-400/[0.07] text-sky-300",
  },
  transferencia: {
    icon: ArrowRightLeft,
    wrapper: "border-white/[0.09] bg-white/[0.04] text-white/60",
  },
};

const SIDEBAR = [
  { icon: LayoutGrid, label: "Resumen" },
  { icon: Receipt, label: "Cobros" },
  { icon: RefreshCw, label: "Conciliación", active: true },
  { icon: Users, label: "Clientes" },
  { icon: Plug, label: "Integraciones" },
];

export function HeroDashboard() {
  return (
    <div
      role="img"
      aria-label="Panel de sencillopay mostrando pagos de Pago Móvil, C2P y transferencia abonados directamente en la cuenta bancaria del comercio, conciliados en tiempo real y notificados por WhatsApp"
      className="relative z-10 mx-auto max-w-[1160px]"
    >
      <div className="relative border border-ink bg-[#080b0a] shadow-[10px_10px_0_#d6d0c2]">
        <div className="overflow-hidden border-t-[3px] border-signal-500 bg-[#080b0a]">
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-white/[0.055] bg-white/[0.012] px-3.5 py-2.5 sm:px-4">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2 bg-white/15" />
              <span className="size-2 bg-white/15" />
              <span className="size-2 bg-white/15" />
            </div>
            <div className="mx-auto hidden items-center gap-1.5 rounded-[2px] border border-white/[0.055] bg-black/25 px-3 py-1 font-mono text-[9px] text-white/55 sm:flex">
              <Lock className="size-2.5" />
              app.sencillopay.com/conciliacion
            </div>
            <div className="ml-auto flex items-center gap-1.5 rounded-none border border-signal-400/15 bg-signal-400/[0.06] px-2 py-1 text-[8.5px] font-medium uppercase tracking-[0.12em] text-signal-300 sm:ml-0">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping-slow rounded-none bg-signal-400" />
                <span className="relative inline-flex size-1.5 rounded-none bg-signal-400" />
              </span>
              En vivo
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <aside className="hidden w-[188px] shrink-0 flex-col border-r border-white/[0.055] bg-black/20 p-3.5 lg:flex">
              <div className="flex items-center gap-2 px-2 pb-5 pt-1">
                <LogoMark className="size-6" inverted />
                <span className="font-display text-[13px] font-bold leading-none tracking-[-0.04em] text-bone">
                  SENCILLO<span className="text-signal-400">PAY</span>
                </span>
                <span className="ml-auto rounded-none border border-white/10 px-1.5 py-0.5 font-mono text-[7.5px] tracking-wider text-white/50">
                  PRO
                </span>
              </div>

              <p className="px-2 pb-2 text-[8px] font-medium uppercase tracking-[0.18em] text-white/55">
                Operación
              </p>
              <div className="space-y-0.5">
                {SIDEBAR.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-none px-2.5 py-2 text-[10.5px] ${
                      item.active
                        ? "border border-signal-500/25 bg-signal-500/[0.08] text-white/85"
                        : "text-white/50"
                    }`}
                  >
                    <item.icon
                      className={`size-3.5 ${
                        item.active ? "text-signal-300" : "text-white/45"
                      }`}
                      strokeWidth={1.6}
                    />
                    {item.label}
                    {item.active && (
                      <span className="ml-auto size-1 bg-signal-500" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-0.5 border-t border-white/[0.05] pt-3">
                <div className="flex items-center gap-2.5 rounded-[2px] px-2.5 py-2 text-[10.5px] text-white/50">
                  <Settings className="size-3.5 text-white/40" strokeWidth={1.6} />
                  Ajustes
                </div>
              </div>

              <div className="mt-auto rounded-[2px] border border-white/[0.06] bg-white/[0.025] p-2.5">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-none bg-white/[0.06] text-[8px] font-semibold text-white/60">
                    CL
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[9.5px] font-medium text-white/70">
                      Clínica Los Robles
                    </p>
                    <p className="text-[8px] text-white/45">Plan Pro</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main panel */}
            <div className="min-w-0 flex-1 p-3.5 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-[15px] font-semibold tracking-[-0.02em] text-bone">
                      Conciliación directa
                    </h2>
                    <span className="rounded border border-white/[0.07] bg-white/[0.03] px-1.5 py-0.5 text-[8px] text-white/55">
                      Hoy
                    </span>
                  </div>
                  <p className="mt-1 text-[9.5px] text-white/50">
                    Martes, 27 de octubre · Cuenta jurídica BDT · ****4821
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="hidden items-center gap-1.5 rounded-[2px] border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-[9px] text-white/50 sm:flex">
                    Exportar
                  </span>
                  <span className="relative flex size-7 items-center justify-center rounded-[2px] border border-white/[0.07] bg-white/[0.02] text-white/50">
                    <Bell className="size-3" strokeWidth={1.6} />
                    <span className="absolute right-1.5 top-1.5 size-1 rounded-none bg-signal-400" />
                  </span>
                  <span className="flex size-7 items-center justify-center rounded-none bg-gradient-to-br from-signal-200 to-signal-500 text-[8px] font-bold text-ink">
                    CL
                  </span>
                </div>
              </div>

              {/* KPIs */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                <div className="rounded-[2px] border border-white/[0.065] bg-white/[0.022] p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[8.5px] uppercase tracking-[0.13em] text-white/45">
                      Abonado a tu cuenta
                    </span>
                    <ArrowUpRight className="size-3 text-signal-400/60" />
                  </div>
                  <p className="mt-2.5 truncate font-display text-[13px] font-semibold tracking-[-0.03em] text-bone tabular sm:text-[17px]">
                    Bs. 2.847.320,00
                  </p>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="rounded bg-signal-400/10 px-1.5 py-0.5 text-[8px] text-signal-300">
                      +18,4%
                    </span>
                    <span className="text-[8px] text-white/45">vs. ayer</span>
                  </div>
                </div>

                <div className="rounded-[2px] border border-white/[0.065] bg-white/[0.022] p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[8.5px] uppercase tracking-[0.13em] text-white/45">
                      Por conciliar
                    </span>
                    <span className="size-1.5 rounded-none bg-signal-400 shadow-[0_0_8px_rgba(255,74,28,0.7)]" />
                  </div>
                  <p className="mt-2 font-display text-[24px] font-semibold leading-none tracking-[-0.04em] text-bone tabular">
                    0
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-[8px] text-signal-300/85">
                    <Check className="size-2.5" strokeWidth={2.4} /> Todo al día
                  </div>
                </div>

                <div className="hidden rounded-[2px] border border-white/[0.065] bg-white/[0.022] p-3 sm:block">
                  <div className="flex items-center justify-between">
                    <span className="text-[8.5px] uppercase tracking-[0.13em] text-white/45">
                      Match promedio
                    </span>
                    <RefreshCw className="size-2.5 text-white/40" />
                  </div>
                  <p className="mt-2 font-display text-[24px] font-semibold leading-none tracking-[-0.04em] text-bone tabular">
                    1,2<span className="ml-0.5 text-[11px] text-white/45">s</span>
                  </p>
                  <div className="mt-2 flex items-center gap-1 text-[8px] text-white/45">
                    <span className="size-1 rounded-none bg-signal-400" />
                    99,98% automático
                  </div>
                </div>
              </div>

              {/* Direct settlement banner */}
              <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 rounded-[2px] border border-signal-400/[0.14] bg-signal-400/[0.045] px-3 py-2">
                <span className="flex items-center gap-1.5 text-[8.5px] text-signal-200/85">
                  <Landmark className="size-3" strokeWidth={1.8} />
                  Abono directo a BDT · Cuenta jurídica del comercio
                </span>
                <span className="flex items-center gap-1 font-mono text-[7px] uppercase tracking-[0.12em] text-signal-300/65">
                  <ShieldCheck className="size-2.5" strokeWidth={1.8} />
                  0% retenido
                </span>
              </div>

              {/* Payments table */}
              <div className="mt-3 overflow-hidden rounded-[2px] border border-white/[0.065] bg-white/[0.015]">
                <div className="flex items-center justify-between border-b border-white/[0.05] px-3.5 py-2.5">
                  <p className="text-[10px] font-medium text-white/55">
                    Pagos recibidos
                  </p>
                  <span className="text-[8.5px] text-signal-300/70">
                    Ver todos
                  </span>
                </div>

                <div className="divide-y divide-white/[0.045]">
                  {PAYMENTS.map((payment) => {
                    const style = METHOD_STYLES[payment.kind];
                    const Icon = style.icon;
                    return (
                      <div
                        key={payment.reference}
                        className="flex items-center gap-2.5 px-3 py-2.5 sm:px-3.5"
                      >
                        <span
                          className={`flex size-7 shrink-0 items-center justify-center rounded-[2px] border ${style.wrapper}`}
                        >
                          <Icon className="size-3" strokeWidth={1.7} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[10.5px] font-medium text-white/75">
                            {payment.name}
                          </p>
                          <p className="mt-0.5 truncate text-[8.5px] text-white/45">
                            {payment.method} · {payment.bank} · Ref.{" "}
                            <span className="font-mono">{payment.reference}</span>
                          </p>
                        </div>
                        <div className="hidden text-right md:block">
                          <p className="font-mono text-[8px] text-white/50">
                            {payment.time}
                          </p>
                        </div>
                        <div className="w-[92px] shrink-0 text-right sm:w-[104px]">
                          <p className="text-[9.5px] font-medium text-white/80 tabular sm:text-[10.5px]">
                            {payment.amount}
                          </p>
                          <p className="mt-0.5 flex items-center justify-end gap-1 text-[7.5px] text-signal-300/80">
                            <span className="size-[3px] rounded-none bg-signal-400" />
                            En tu cuenta
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.05] px-3.5 py-2">
                  <p className="text-[8px] text-white/45">
                    Última actualización hace 2 s
                  </p>
                  <p className="flex items-center gap-1 text-[8px] text-signal-300/60">
                    <span className="size-1 rounded-none bg-signal-400" />
                    Webhook activo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
