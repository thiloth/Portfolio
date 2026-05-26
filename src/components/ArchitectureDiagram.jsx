import { motion } from 'framer-motion';
import { Cloud, Cog, Database, FileCode2, Layers, Server } from 'lucide-react';

// Enterprise SAP backend flow — purely SVG/CSS, no external assets.
const layers = [
  {
    title: 'Presentation',
    sub: 'SAP GUI · Fiori',
    Icon: Layers,
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'OData Services',
    sub: 'CDS-exposed APIs',
    Icon: Cloud,
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'ABAP Cloud Layer',
    sub: 'RAP · Clean Core',
    Icon: Cog,
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Custom ABAP',
    sub: 'Reports · Forms · Exits',
    Icon: FileCode2,
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Integration Bus',
    sub: 'RFC · BAPI · OData',
    Icon: Server,
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Data Layer',
    sub: 'Open SQL · HANA',
    Icon: Database,
    accent: 'from-pink-500 to-rose-500',
  },
];

export default function ArchitectureDiagram() {
  return (
    <div className="glass relative overflow-hidden rounded-3xl p-7 sm:p-9">
      <div className="absolute -top-32 -right-24 size-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 size-72 rounded-full bg-cyan-500/15 blur-3xl" />

      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
            / enterprise sap backend
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-white">
            How I architect SAP solutions
          </h3>
        </div>
        <span className="chip border-cyan-400/30 text-cyan-200">Clean Core</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {layers.map((l, i) => (
          <motion.div
            key={l.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-fuchsia-400/30 hover:bg-white/[0.05]"
          >
            <div
              className={`pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-gradient-to-br ${l.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
            />
            <span
              className={`grid size-10 place-items-center rounded-xl bg-gradient-to-br ${l.accent} shadow-glow`}
            >
              <l.Icon size={16} className="text-white" />
            </span>
            <p className="mt-3 font-display text-sm font-semibold text-white">{l.title}</p>
            <p className="mt-0.5 font-mono text-[11px] text-slate-400">{l.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated flow trail */}
      <div className="mt-6 grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          Request
        </span>
        <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
          Response
        </span>
      </div>
    </div>
  );
}
