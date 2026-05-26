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

// Drop public/SAPlogo.png any time — it'll override the inline mark below.
import { useState } from 'react';

export function SAPLogo({ size = 28, className = '' }) {
  const [errored, setErrored] = useState(false);

  if (!errored) {
    return (
      <img
        src="./SAPlogo.png"
        alt="SAP"
        height={size}
        style={{ height: size, width: 'auto' }}
        onError={() => setErrored(true)}
        className={`inline-block select-none ${className}`}
        draggable={false}
      />
    );
  }

  // Fallback: clean flat SAP wordmark — solid SAP brand blue, no gradient,
  // no decorative shape. Drop /public/SAPlogo.png for the real mark.
  const h = size;
  const w = size * 1.9;
  return (
    <svg
      role="img"
      aria-label="SAP"
      viewBox="0 0 76 40"
      width={w}
      height={h}
      className={`inline-block ${className}`}
    >
      <text
        x="38"
        y="31"
        textAnchor="middle"
        fontFamily='"Helvetica Neue", "Arial Black", Arial, sans-serif'
        fontWeight="900"
        fontSize="30"
        letterSpacing="-0.5"
        fill="#0091DA"
      >
        SAP
      </text>
    </svg>
  );
}
