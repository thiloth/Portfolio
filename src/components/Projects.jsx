import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const filters = [
  { key: 'All', label: 'All' },
  { key: 'Enterprise', label: 'Enterprise (SAP)' },
  { key: 'Personal', label: 'Personal' },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = projects.filter((p) => filter === 'All' || p.type === filter);

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work — enterprise & personal."
        subtitle="A blend of SAP backend engineering at IBM and live, deployed personal projects."
      />

      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`relative rounded-full border px-4 py-2 text-sm font-medium transition ${
              filter === f.key
                ? 'border-fuchsia-400/40 bg-white/[0.06] text-white shadow-glow'
                : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white'
            }`}
          >
            {filter === f.key && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/20"
              />
            )}
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:shadow-glow"
            >
              <ProjectBanner name={p.name} type={p.type} highlight={p.highlight} />

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="chip border-cyan-400/20 text-cyan-200">
                    {p.type === 'Enterprise' ? 'SAP · Enterprise' : 'Personal · Live'}
                  </span>
                  {p.highlight && (
                    <span className="chip border-fuchsia-400/30 text-fuchsia-200">
                      <Sparkles size={12} /> {p.highlight}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 transition hover:from-cyan-500/30 hover:to-fuchsia-500/30"
                    >
                      <ExternalLink size={12} /> Live
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
                    >
                      <Github size={12} /> GitHub
                    </a>
                  )}
                  {!p.live && !p.repo && (
                    <span className="text-[11px] text-slate-500">Internal · IBM project</span>
                  )}
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fuchsia-300"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function ProjectBanner({ name, type, highlight }) {
  // Generative animated banner per project — no external assets needed
  const palette =
    type === 'Enterprise'
      ? ['#22d3ee', '#6366f1', '#a855f7']
      : ['#f472b6', '#a855f7', '#22d3ee'];

  // Simple deterministic hash to vary banners
  const hash = [...name].reduce((h, c) => (h * 33 + c.charCodeAt(0)) >>> 0, 5381);
  const a = (hash % 60) - 30;
  const b = ((hash >> 3) % 60) - 30;

  return (
    <div className="relative h-36 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at ${50 + a}% ${30 + b}%, ${palette[0]}33, transparent 60%),
                       radial-gradient(120% 80% at ${50 - a}% ${70 - b}%, ${palette[2]}33, transparent 60%),
                       linear-gradient(135deg, #0b0e22 0%, #0a0c1a 100%)`,
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="none">
        <defs>
          <pattern id={`p-${hash}`} width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#p-${hash})`} />
      </svg>
      <motion.div
        animate={{ x: ['0%', '100%', '0%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-6 h-32 w-32 rounded-full opacity-50 blur-2xl"
        style={{ background: palette[1] }}
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300/80">
          {type === 'Enterprise' ? '/ SAP · BACKEND' : '/ PERSONAL · LIVE'}
        </span>
        {highlight && (
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
            {highlight}
          </span>
        )}
      </div>
    </div>
  );
}
