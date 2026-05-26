import { motion } from 'framer-motion';

// Multi-channel SAP data flow: 3 simultaneous streams (IDoc, OData, RFC)
// flowing left-to-right with packet animations and per-channel telemetry.

const channels = [
  {
    label: 'IDoc',
    color: '#22d3ee',
    metric: 'Inbound · Async',
    speed: 3.2,
    packets: 5,
  },
  {
    label: 'OData',
    color: '#a855f7',
    metric: 'Sync · REST',
    speed: 2.4,
    packets: 6,
  },
  {
    label: 'RFC',
    color: '#f472b6',
    metric: 'Direct · Binary',
    speed: 4.0,
    packets: 4,
  },
];

export default function DataFlow() {
  return (
    <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <div className="pointer-events-none absolute -top-32 -right-24 size-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 size-72 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
            / live data exchange
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-white">
            Cross-system enterprise dataflow
          </h3>
        </div>
        <span className="chip border-emerald-400/30 text-emerald-200">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(16,185,129,0.6)]" />
          streaming
        </span>
      </div>

      <div className="grid grid-cols-[80px_1fr_80px] items-stretch gap-3">
        {/* Source */}
        <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center">
          <div className="size-10 rounded-xl bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 ring-1 ring-white/15 grid place-items-center">
            <span className="font-display text-xs font-bold text-white">ECC</span>
          </div>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">source</p>
        </div>

        {/* Channels */}
        <div className="space-y-3">
          {channels.map((c, i) => (
            <div
              key={c.label}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-white/5 px-3 py-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className="size-2 rounded-full"
                    style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }}
                  />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                    {c.label}
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
                  {c.metric}
                </span>
              </div>

              <div className="relative h-8 overflow-hidden">
                {/* track */}
                <div
                  className="absolute inset-y-1/2 left-0 right-0 h-px -translate-y-1/2"
                  style={{ background: `linear-gradient(90deg, transparent, ${c.color}55, transparent)` }}
                />
                {/* moving packets */}
                {Array.from({ length: c.packets }).map((_, p) => (
                  <motion.div
                    key={p}
                    className="absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full"
                    style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }}
                    initial={{ left: '-2%' }}
                    animate={{ left: '102%' }}
                    transition={{
                      duration: c.speed,
                      delay: (p / c.packets) * c.speed + i * 0.2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                ))}
                {/* moving longer pulse */}
                <motion.div
                  className="absolute top-1/2 h-[2px] w-12 -translate-y-1/2 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${c.color}, transparent)`,
                  }}
                  initial={{ left: '-15%' }}
                  animate={{ left: '110%' }}
                  transition={{
                    duration: c.speed * 1.6,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Target */}
        <div className="grid place-items-center rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-center">
          <div className="size-10 rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-pink-500/30 ring-1 ring-white/15 grid place-items-center">
            <span className="font-display text-xs font-bold text-white">S/4</span>
          </div>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-400">target</p>
        </div>
      </div>

      {/* tiny status footer */}
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { k: 'msgs / min', v: '1.2k', color: 'text-cyan-300' },
          { k: 'avg latency', v: '38ms', color: 'text-fuchsia-300' },
          { k: 'success rate', v: '99.9%', color: 'text-emerald-300' },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">{s.k}</p>
            <p className={`mt-0.5 font-display text-base font-bold ${s.color}`}>{s.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
