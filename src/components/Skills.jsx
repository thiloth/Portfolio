import { motion } from 'framer-motion';
import { Code2, Cpu, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const groupIcon = [Code2, Cpu, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Skills"
        title="My technical toolbelt."
        subtitle="A curated stack across SAP, backend development, and the tools I use every day to deliver enterprise solutions."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, gi) => {
          const Icon = groupIcon[gi % groupIcon.length];
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div
                className={`absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br ${g.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
              />
              <div className="flex items-center gap-3">
                <span
                  className={`grid size-10 place-items-center rounded-xl bg-gradient-to-br ${g.accent} shadow-glow`}
                >
                  <Icon size={18} className="text-white" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{g.title}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    whileHover={{ y: -2 }}
                    className="cursor-default rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200 transition hover:border-fuchsia-400/40 hover:text-white hover:shadow-glow"
                  >
                    {s}
                  </motion.li>
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
    'SAP ABAP', 'ABAP Cloud', 'CDS Views', 'OData',
    'Smart Forms', 'Adobe Forms', 'ALV', 'RFC', 'BAPI',
    'User Exits', 'Open SQL', 'SE38', 'SE80', 'SE11',
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
