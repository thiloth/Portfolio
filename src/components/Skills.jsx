import { motion } from 'framer-motion';
import { Code2, Cpu, Layers, Sparkles, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const iconMap = {
  code: Code2,
  layers: Layers,
  cpu: Cpu,
  sparkles: Sparkles,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Skills"
        title="My technical toolbelt."
        subtitle="Deep SAP ABAP expertise, advanced SAP technologies, modern development tools, and a curiosity for full stack web."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
        {skillGroups.map((g, gi) => {
          const Icon = iconMap[g.icon] || Code2;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-glow sm:rounded-3xl sm:p-6"
            >
              <div
                className={`absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br ${g.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25`}
              />
              <div className="flex items-center gap-3">
                <span
                  className={`grid size-10 place-items-center rounded-xl bg-gradient-to-br ${g.accent} shadow-glow`}
                >
                  <Icon size={18} className="text-white" />
                </span>
                <h3 className="font-display text-base font-semibold text-white sm:text-lg">
                  {g.title}
                </h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="cursor-default rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-white sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <SkillsMarquee />
    </section>
  );
}

function SkillsMarquee() {
  const items = [
    'SAP ABAP', 'OData', 'CDS Views', 'AMDP', 'IDoc',
    'Module Pool', 'Smart Forms', 'Adobe Forms', 'ALV',
    'RFC', 'User Exits', 'Open SQL', 'SE38', 'SE80', 'SE11',
  ];
  const row = [...items, ...items];
  return (
    <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((s, i) => (
          <span
            key={i}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-300"
          >
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
