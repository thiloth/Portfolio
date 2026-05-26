import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import ProjectBanner from './ProjectBanner';

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

      <motion.div layout className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-glow sm:rounded-3xl"
            >
              <ProjectBanner name={p.name} type={p.type} highlight={p.highlight} />

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/20 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-cyan-200 sm:px-3 sm:py-1.5 sm:text-xs">
                    {p.type === 'Enterprise' ? 'SAP · Enterprise' : 'Personal · Live'}
                  </span>
                  {p.highlight && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-400/30 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-fuchsia-200 sm:px-3 sm:py-1.5 sm:text-xs">
                      <Sparkles size={10} /> {p.highlight}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-sm font-semibold leading-snug text-white sm:text-lg">
                  {p.name}
                </h3>
                <p className="mt-1.5 line-clamp-3 flex-1 text-xs leading-relaxed text-slate-400 sm:line-clamp-none sm:mt-2 sm:text-sm">
                  {p.description}
                </p>

                <ul className="mt-3 flex flex-wrap gap-1 sm:mt-4 sm:gap-1.5">
                  {p.tech.slice(0, 3).map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-1.5 py-0.5 font-mono text-[9px] text-slate-300 sm:px-2 sm:text-[11px]"
                    >
                      {t}
                    </li>
                  ))}
                  {p.tech.length > 3 && (
                    <li className="hidden rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-500 sm:inline-block">
                      +{p.tech.length - 3}
                    </li>
                  )}
                  {p.tech.slice(3).map((t) => (
                    <li
                      key={t}
                      className="hidden rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300 sm:inline-block"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:mt-5 sm:gap-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group/live relative inline-flex items-center gap-1 overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-2.5 py-1 text-[10px] font-bold text-ink-950 shadow-[0_8px_30px_-6px_rgba(34,211,238,0.55)] transition hover:scale-[1.04] hover:shadow-[0_10px_40px_-6px_rgba(34,211,238,0.85)] sm:gap-1.5 sm:px-3.5 sm:py-1.5 sm:text-xs"
                    >
                      <span className="relative flex size-1.5 items-center justify-center sm:size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-950/70" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-ink-950 sm:size-2" />
                      </span>
                      <span className="hidden sm:inline">Live Demo</span>
                      <span className="sm:hidden">Live</span>
                      <ExternalLink size={10} strokeWidth={3} className="sm:hidden" />
                      <ExternalLink size={11} strokeWidth={3} className="hidden sm:inline" />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs"
                    >
                      <Github size={11} /> GitHub
                    </a>
                  )}
                  {!p.live && !p.repo && (
                    <span className="text-[10px] text-slate-500 sm:text-[11px]">Internal · IBM</span>
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

