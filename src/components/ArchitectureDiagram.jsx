import { motion } from 'framer-motion';
import { Cloud, Cog, Database, FileCode2, Layers, Server } from 'lucide-react';

// Enterprise SAP backend flow — purely SVG/CSS, no external assets.
const layers = [
  {
    title: 'Presentation',
    sub: 'SAP GUI · Module Pool · Fiori',
    Icon: Layers,
    accent: 'from-sky-400 to-cyan-400',
  },
  {
    title: 'OData Services',
    sub: 'CDS-exposed APIs',
    Icon: Cloud,
    accent: 'from-cyan-500 to-sky-500',
  },
  {
    title: 'Application Layer',
    sub: 'Reports · Forms · Enhancements',
    Icon: FileCode2,
    accent: 'from-sky-500 to-blue-500',
  },
  {
    title: 'Business Logic',
    sub: 'Module Pool · User & Customer Exits',
    Icon: Cog,
    accent: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Integration Bus',
    sub: 'IDoc · RFC · BAPI · OData',
    Icon: Server,
    accent: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Data Layer',
    sub: 'CDS Views · AMDP · Open SQL · HANA',
    Icon: Database,
    accent: 'from-indigo-600 to-blue-700',
  },
];

export default function ArchitectureDiagram() {
  return (
    <div className="glass relative overflow-hidden rounded-3xl p-7 sm:p-9">
      <div className="absolute -top-32 -right-24 size-72 rounded-full bg-blue-500/15 blur-3xl" />
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

      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
        {layers.map((l, i) => (
          <motion.div
            key={l.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group relative flex items-center gap-2.5 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-2.5 transition hover:border-sky-400/30 hover:bg-white/[0.05] sm:gap-3 sm:rounded-2xl sm:p-3.5"
          >
            <div
              className={`pointer-events-none absolute -right-10 -top-10 size-24 rounded-full bg-gradient-to-br ${l.accent} opacity-15 blur-2xl transition-opacity duration-500 group-hover:opacity-35 sm:size-28`}
            />
            <span
              className={`grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${l.accent} shadow-[0_0_18px_rgba(56,189,248,0.25)] sm:size-9 sm:rounded-xl`}
            >
              <l.Icon size={14} className="text-white" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-[12px] font-semibold leading-tight text-white sm:text-sm">
                {l.title}
              </p>
              <p className="mt-0.5 truncate font-mono text-[9px] leading-tight text-slate-400 sm:text-[11px]">
                {l.sub}
              </p>
            </div>
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
            className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500"
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
