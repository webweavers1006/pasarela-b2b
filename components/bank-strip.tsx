const BANKS = [
  { name: "Banesco", className: "text-[15px] font-semibold tracking-[-0.03em]" },
  { name: "Mercantil", className: "font-display text-[16px] font-semibold tracking-[-0.02em]" },
  { name: "BBVA Provincial", className: "font-display text-[15px] font-medium" },
  { name: "Banco de Venezuela", className: "text-[12px] font-semibold tracking-[0.01em]" },
  { name: "BNC", className: "font-mono text-[13px] font-semibold tracking-[0.2em]" },
  { name: "Bancamiga", className: "text-[14px] font-medium tracking-[-0.02em]" },
  { name: "Banplus", className: "text-[14px] font-semibold" },
  { name: "Banco Exterior", className: "text-[10px] font-medium uppercase tracking-[0.16em]" },
];

export function BankStrip() {
  return (
    <div className="relative z-10 mt-12">
      <div className="border-t border-ink/15" />
      <div className="flex flex-col items-start justify-between gap-5 py-5 xl:flex-row xl:items-center">
        <div className="flex items-center gap-3">
          <span className="bg-ink px-2 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-bone">
            Banca
          </span>
          <div>
            <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink">
              Integración directa con la banca venezolana
            </p>
            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.1em] text-smoke">
              C2P · API bancaria · Pago Móvil
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap items-center gap-x-7 gap-y-4 sm:gap-x-9">
          {BANKS.map((bank) => (
            <li key={bank.name}>
              <span
                className={`${bank.className} whitespace-nowrap text-smoke transition-colors duration-300 hover:text-ink`}
                title={bank.name}
              >
                {bank.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-ink/12 py-3 font-mono text-[8px] uppercase tracking-[0.1em] text-smoke">
        <span>
          El abono se realiza directamente en la cuenta jurídica de tu empresa.
        </span>
        <span className="inline-flex items-center gap-2 text-ink">
          <span className="size-1.5 bg-signal-500" />
          sencillopay solo procesa datos
        </span>
      </div>
    </div>
  );
}
