import { motion } from 'framer-motion';

// 3 orbital rings rotating around a central SAP core, each ring carrying
// a few tech labels. Pure SVG/CSS — no external assets.

const rings = [
  {
    radius: 70,
    duration: 22,
    items: ['ABAP', 'OData', 'CDS', 'AMDP', 'IDoc'],
    color: 'rgba(34,211,238,0.95)',
    bg: 'rgba(34,211,238,0.10)',
  },
  {
    radius: 110,
    duration: 32,
    reverse: true,
    items: ['RFC', 'BAPI', 'Smart Forms', 'Module Pool', 'ALV', 'Open SQL'],
    color: 'rgba(168,85,247,0.95)',
    bg: 'rgba(168,85,247,0.10)',
  },
  {
    radius: 150,
    duration: 44,
    items: ['React', 'Tailwind', 'Vercel', 'GitHub', 'Java', 'SQL', 'API'],
    color: 'rgba(236,72,153,0.9)',
    bg: 'rgba(236,72,153,0.10)',
  },
];

export default function TechOrbit() {
  return (
    <div className="glass relative aspect-square w-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-grid-glow opacity-70" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="absolute inset-0 grid place-items-center">
        <div className="relative size-full max-w-[360px] max-h-[360px]">
          {/* rings (visible track) */}
          {rings.map((r, i) => (
            <div
              key={`track-${i}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
              style={{
                width: r.radius * 2,
                height: r.radius * 2,
                borderColor: r.bg.replace('0.10', '0.35'),
              }}
            />
          ))}

          {/* rings (rotating with items) */}
          {rings.map((r, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: r.radius * 2, height: r.radius * 2 }}
              animate={{ rotate: r.reverse ? -360 : 360 }}
              transition={{ duration: r.duration, repeat: Infinity, ease: 'linear' }}
            >
              {r.items.map((label, j) => {
                const angle = (j / r.items.length) * Math.PI * 2;
                const x = r.radius + r.radius * Math.cos(angle);
                const y = r.radius + r.radius * Math.sin(angle);
                return (
                  <motion.div
                    key={label}
                    // Counter-rotate so labels stay upright
                    animate={{ rotate: r.reverse ? 360 : -360 }}
                    transition={{ duration: r.duration, repeat: Infinity, ease: 'linear' }}
                    className="absolute"
                    style={{ left: x, top: y, transform: 'translate(-50%,-50%)' }}
                  >
                    <span
                      className="whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-semibold backdrop-blur-md"
                      style={{
                        borderColor: r.color.replace('0.95', '0.35').replace('0.9', '0.35'),
                        color: r.color,
                        background: r.bg,
                      }}
                    >
                      {label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}

          {/* central core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ scale: [1, 1.05, 1], boxShadow: [
                '0 0 30px rgba(168,85,247,0.4)',
                '0 0 60px rgba(34,211,238,0.55)',
                '0 0 30px rgba(168,85,247,0.4)',
              ] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500"
            >
              <span className="font-display text-lg font-extrabold tracking-wide text-white">
                SAP
              </span>
            </motion.div>
            <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
              core
            </p>
          </div>
        </div>
      </div>

      {/* corner mono labels */}
      <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
        / live stack
      </div>
      <div className="absolute right-4 top-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
        <span className="size-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(16,185,129,0.6)]" />
        active
      </div>
    </div>
  );
}
