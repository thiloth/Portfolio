import { motion } from 'framer-motion';
import { GraduationCap, Trophy } from 'lucide-react';
import { education } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation."
        subtitle="A consistent academic track record that built the fundamentals behind today's engineering work."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/15 blur-2xl" />
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 ring-1 ring-white/10">
                <GraduationCap size={20} className="text-cyan-300" />
              </span>
              <span className="chip">{e.period}</span>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-white">{e.school}</h3>
            <p className="mt-1 text-sm text-slate-400">{e.degree}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm font-semibold text-emerald-200">
              <Trophy size={14} /> {e.score}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
