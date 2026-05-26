import { useState } from 'react';
import { motion } from 'framer-motion';

// Drop a real photo at /public/profile.jpg. It will replace the
// animated SVG avatar automatically. Otherwise the futuristic fallback shows.
export default function ProfileImage() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[260px] sm:max-w-[340px] lg:max-w-[420px]">
      {/* Rotating gradient ring */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'conic-gradient(from 90deg, rgba(56,189,248,0.0), rgba(56,189,248,0.7), rgba(34,211,238,0.7), rgba(29,107,255,0.6), rgba(56,189,248,0.0))',
          filter: 'blur(2px)',
        }}
      />
      <div className="absolute inset-[3px] rounded-full bg-ink-950" />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 rounded-full border border-dashed border-white/10"
      />

      {/* Inner photo / fallback */}
      <div className="absolute inset-[14px] overflow-hidden rounded-full ring-1 ring-white/10 shadow-glow">
        {!errored ? (
          <img
            src="/profile.jpg"
            alt="Thiloth B Shetty"
            loading="eager"
            onError={() => setErrored(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <FallbackAvatar />
        )}
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 top-10 hidden rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-[11px] font-semibold text-white shadow-card backdrop-blur-xl sm:block"
      >
        <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
          ABAP Cloud
        </span>
        <span className="ml-1 text-slate-400">Certified</span>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-2 bottom-12 hidden rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-[11px] font-semibold text-white shadow-card backdrop-blur-xl sm:block"
      >
        <span className="bg-gradient-to-r from-blue-300 to-sky-300 bg-clip-text text-transparent">
          IBM
        </span>
        <span className="ml-1 text-slate-400">SAP Developer</span>
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-2 left-10 hidden rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-[11px] font-semibold text-white shadow-card backdrop-blur-xl sm:block"
      >
        <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
          CDS · OData · ABAP Cloud
        </span>
      </motion.div>
    </div>
  );
}

function FallbackAvatar() {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <linearGradient id="avatarG" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.5)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
        <rect width="200" height="200" fill="url(#glow)" />
        <circle cx="100" cy="78" r="34" fill="url(#avatarG)" opacity="0.95" />
        <path d="M30 180 C 50 130, 150 130, 170 180 Z" fill="url(#avatarG)" opacity="0.95" />
        <text
          x="100"
          y="86"
          textAnchor="middle"
          fontFamily="Space Grotesk, Inter, sans-serif"
          fontWeight="700"
          fontSize="32"
          fill="#0b1020"
        >
          TBS
        </text>
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_40%)]" />
      <p className="absolute bottom-3 left-0 right-0 text-center text-[10px] uppercase tracking-[0.3em] text-slate-300/70">
        upload /public/profile.jpg
      </p>
    </div>
  );
}
