import { motion } from 'framer-motion';
import { Award, Briefcase, Layers, Trophy } from 'lucide-react';
import { metrics, monthsAtIBM } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Counter from './Counter';

const icons = [Briefcase, Award, Trophy, Layers];

export default function Metrics() {
  return (
    <section id="metrics" className="section">
      <SectionHeading
        eyebrow="By the numbers"
        title="Engineered impact, in numbers."
        subtitle="A snapshot of enterprise contributions, certifications, and depth across SAP backend domains."
      />

      <div className="relative">
        {/* Decorative gradient line */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => {
            const Icon = icons[i % icons.length];
            const value = m.dynamic === 'monthsAtIBM' ? monthsAtIBM() : m.value;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div
                  className={`pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br ${m.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
                />
                <div className="flex items-start justify-between">
                  <span
                    className={`grid size-11 place-items-center rounded-2xl bg-gradient-to-br ${m.accent} shadow-glow`}
                  >
                    <Icon size={18} className="text-white" />
                  </span>
                  <div className="size-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(16,185,129,0.6)]" />
                </div>
                <p className="mt-6 font-display text-4xl font-extrabold leading-none">
                  <span
                    className={`bg-gradient-to-br ${m.accent} bg-clip-text text-transparent`}
                  >
                    <Counter to={value} suffix={m.suffix || ''} />
                  </span>
                </p>
                <p className="mt-2 text-sm font-medium text-slate-200">{m.label}</p>
                {m.suffixLabel && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    {m.suffixLabel}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
