// Logo components.
// IBMLogo uses /public/IBMlogo.png (replace anytime — auto picked up).
// SAPLogo is an inline SVG so we don't need a network request for it.

export function IBMLogo({ size = 28, className = '' }) {
  // PNG aspect ratio is roughly 2.5:1 for the standard IBM 8-bar mark.
  return (
    <img
      src="./IBMlogo.png"
      alt="IBM"
      height={size}
      style={{ height: size, width: 'auto' }}
      className={`inline-block select-none ${className}`}
      draggable={false}
    />
  );
}

export function SAPLogo({ size = 28, className = '' }) {
  // SAP wordmark on a blue gradient pill (original design).
  const w = size * 2.2;
  const h = size;
  return (
    <svg
      role="img"
      aria-label="SAP"
      viewBox="0 0 88 40"
      width={w}
      height={h}
      className={`inline-block ${className}`}
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
