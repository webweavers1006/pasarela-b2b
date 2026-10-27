export function SectionLabel({
  index,
  children,
  tone = "light",
  className = "",
}: {
  index: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-[9.5px] uppercase tracking-[0.2em] ${
        tone === "dark" ? "text-bone/55" : "text-smoke"
      } ${className}`}
    >
      <span className="inline-flex h-6 min-w-6 items-center justify-center bg-signal-500 px-1.5 font-semibold tracking-[0.06em] text-ink">
        {index}
      </span>
      <span className="font-medium">{children}</span>
      <span
        aria-hidden="true"
        className={`h-px w-10 ${tone === "dark" ? "bg-bone/20" : "bg-ink/20"}`}
      />
    </div>
  );
}
