// Minimal enterprise wordmark — Space Grotesk, thin tracking,
// subtle electric-blue underline. Used in navbar, footer, loader.

export default function Wordmark({ size = 'md', className = '' }) {
  const sizes = {
    sm: { text: 'text-[13px]', under: 'h-[2px] w-5' },
    md: { text: 'text-[15px]', under: 'h-[2px] w-6' },
    lg: { text: 'text-[28px]', under: 'h-[3px] w-10' },
  };
  const s = sizes[size] || sizes.md;
  return (
    <span className={`relative inline-flex flex-col leading-none ${className}`}>
      <span
        className={`font-display font-semibold uppercase tracking-[0.32em] text-white ${s.text}`}
      >
        THILOTH
      </span>
      <span
        className={`mt-1 ${s.under} bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]`}
        aria-hidden
      />
    </span>
  );
}
