// Premium monogram — solid dark glass square, white TS, thin border,
// soft sky-blue accent. Used in navbar, footer, loader.

export default function Wordmark({ size = 'md', className = '' }) {
  const sizes = {
    sm: { box: 'size-8', text: 'text-[11px]', dot: 'size-1' },
    md: { box: 'size-9', text: 'text-[12px]', dot: 'size-1' },
    lg: { box: 'size-14', text: 'text-[18px]', dot: 'size-1.5' },
  };
  const s = sizes[size] || sizes.md;
  return (
    <span className={`relative inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`relative grid ${s.box} place-items-center overflow-hidden rounded-xl bg-ink-900 ring-1 ring-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_24px_-12px_rgba(0,0,0,0.8)]`}
      >
        <span
          className={`font-display ${s.text} font-bold tracking-[0.05em] text-white`}
        >
          TS
        </span>
        <span
          aria-hidden
          className={`absolute bottom-1.5 right-1.5 ${s.dot} rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]`}
        />
      </span>
      {size === 'lg' && (
        <span className="font-display text-base font-semibold uppercase tracking-[0.32em] text-white">
          THILOTH
        </span>
      )}
    </span>
  );
}
