// Inline SVG logos so we ship zero external image requests.
// Tweak `size` and `className` (uses Tailwind text-color utilities for SAP).

export function IBMLogo({ size = 28, className = '' }) {
  // IBM — 8-bar mark in IBM Blue. Public trademark, used here to denote employer.
  const w = size * 2.4;
  const h = size;
  return (
    <svg
      role="img"
      aria-label="IBM"
      viewBox="0 0 80 32"
      width={w}
      height={h}
      className={className}
      fill="#0F62FE"
    >
      {/* I */}
      <rect x="2" y="4" width="14" height="2" />
      <rect x="2" y="8" width="14" height="2" />
      <rect x="2" y="12" width="14" height="2" />
      <rect x="2" y="16" width="14" height="2" />
      <rect x="2" y="20" width="14" height="2" />
      <rect x="2" y="24" width="14" height="2" />
      {/* B */}
      <rect x="20" y="4" width="22" height="2" />
      <rect x="20" y="8" width="22" height="2" />
      <rect x="20" y="12" width="4" height="2" />
      <rect x="38" y="12" width="4" height="2" />
      <rect x="20" y="16" width="22" height="2" />
      <rect x="20" y="20" width="22" height="2" />
      <rect x="20" y="24" width="22" height="2" />
      {/* M */}
      <rect x="46" y="4" width="32" height="2" />
      <rect x="46" y="8" width="32" height="2" />
      <rect x="46" y="12" width="4" height="2" />
      <rect x="58" y="12" width="8" height="2" />
      <rect x="74" y="12" width="4" height="2" />
      <rect x="46" y="16" width="4" height="2" />
      <rect x="58" y="16" width="8" height="2" />
      <rect x="74" y="16" width="4" height="2" />
      <rect x="46" y="20" width="4" height="2" />
      <rect x="62" y="20" width="0" height="2" />
      <rect x="74" y="20" width="4" height="2" />
      <rect x="46" y="24" width="4" height="2" />
      <rect x="74" y="24" width="4" height="2" />
    </svg>
  );
}

export function SAPLogo({ size = 28, className = '' }) {
  // SAP — bold sans serif on a blue gradient pill. A faithful, royalty-friendly
  // representation of the wordmark used to denote SAP technologies.
  const w = size * 2.2;
  const h = size;
  return (
    <svg
      role="img"
      aria-label="SAP"
      viewBox="0 0 88 40"
      width={w}
      height={h}
      className={className}
    >
      <defs>
        <linearGradient id="sap-grad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0FAAFF" />
          <stop offset="1" stopColor="#003F8F" />
        </linearGradient>
      </defs>
      <path d="M0 4 H72 L88 20 L72 36 H0 Z" fill="url(#sap-grad)" />
      <text
        x="36"
        y="27"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="20"
        letterSpacing="1"
        fill="#ffffff"
      >
        SAP
      </text>
    </svg>
  );
}
