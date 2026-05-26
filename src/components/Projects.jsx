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
                      className="group/live relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-3.5 py-1.5 text-xs font-bold text-ink-950 shadow-[0_8px_30px_-6px_rgba(34,211,238,0.55)] transition hover:scale-[1.04] hover:shadow-[0_10px_40px_-6px_rgba(34,211,238,0.85)]"
                    >
                      <span className="relative flex size-2 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink-950/70" />
                        <span className="relative inline-flex size-2 rounded-full bg-ink-950" />
                      </span>
                      Live Demo
                      <ExternalLink size={11} strokeWidth={3} />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
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

