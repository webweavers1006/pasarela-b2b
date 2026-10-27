export function Stamp({
  className = "",
  tone = "light",
  id = "default",
  label = "CERO CUSTODIA · FONDOS DIRECTOS AL BANCO ·",
}: {
  className?: string;
  tone?: "light" | "dark";
  id?: string;
  label?: string;
}) {
  const ink = tone === "dark" ? "#F4F1E9" : "#0B0D0B";
  const muted = tone === "dark" ? "rgba(244,241,233,0.62)" : "rgba(11,13,11,0.62)";
  const pathId = `sp-stamp-path-${id}`;

  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Sello de cero custodia de fondos"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id={pathId}
          d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
        />
      </defs>
      <circle cx="100" cy="100" r="96" stroke={ink} strokeOpacity="0.22" />
      <circle cx="100" cy="100" r="88" stroke={ink} strokeOpacity="0.55" />
      <circle cx="100" cy="100" r="64" stroke={ink} strokeOpacity="0.18" />
      <text
        fill={muted}
        fontFamily="var(--font-mono)"
        fontSize="8.4"
        fontWeight="500"
        letterSpacing="2.1"
      >
        <textPath href={`#${pathId}`} startOffset="2%">
          {label} {label}
        </textPath>
      </text>
      <text
        x="100"
        y="106"
        textAnchor="middle"
        fill={ink}
        fontFamily="var(--font-display)"
        fontSize="54"
        fontWeight="700"
        letterSpacing="-3"
      >
        0%
      </text>
      <text
        x="100"
        y="126"
        textAnchor="middle"
        fill={muted}
        fontFamily="var(--font-mono)"
        fontSize="7.8"
        fontWeight="600"
        letterSpacing="2.4"
      >
        RETENIDO
      </text>
      <rect x="94" y="76" width="12" height="3" fill="#FF4A1C" />
    </svg>
  );
}
