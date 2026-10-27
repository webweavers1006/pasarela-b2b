import Link from "next/link";

export function LogoMark({
  className = "",
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 36 36"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="36"
        height="36"
        rx="2"
        fill={inverted ? "#F4F1E9" : "#0B0D0B"}
      />
      <path
        d="M8.6 18.4L14.8 24.5L26.4 10.6"
        stroke={inverted ? "#0B0D0B" : "#F4F1E9"}
        strokeWidth="3.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <rect x="26" y="26" width="6" height="6" fill="#FF4A1C" />
    </svg>
  );
}

export function Logo({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href="/#inicio"
      aria-label="sencillopay — volver al inicio"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark
        className="size-7 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
        inverted={tone === "dark"}
      />
      <span
        className={`font-display text-[19px] font-bold leading-none tracking-[-0.045em] ${
          tone === "dark" ? "text-bone" : "text-ink"
        }`}
      >
        SENCILLO<span className="text-signal-500">PAY</span>
      </span>
    </Link>
  );
}
