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

      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 md:gap-6">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`glass group relative overflow-hidden rounded-2xl p-4 transition hover:-translate-y-1 hover:shadow-glow sm:rounded-3xl sm:p-6 ${
              i === 2 ? 'col-span-2 md:col-span-1' : ''
            }`}
          >
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-sky-500/15 to-cyan-500/15 blur-2xl" />
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-sky-400/20 to-cyan-500/20 ring-1 ring-white/10 sm:size-11 sm:rounded-2xl">
                <GraduationCap size={14} className="text-sky-300 sm:hidden" />
                <GraduationCap size={20} className="hidden text-sky-300 sm:block" />
              </span>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-slate-300 sm:px-3 sm:py-1.5 sm:text-xs">
                {e.period}
              </span>
            </div>
            <h3 className="mt-3 font-display text-[13px] font-semibold leading-snug text-white sm:mt-4 sm:text-lg">
              {e.school}
            </h3>
            {e.location && <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">{e.location}</p>}
            <p className="mt-1 text-[11px] text-slate-400 sm:text-sm">{e.degree}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[11px] font-semibold text-emerald-200 sm:mt-4 sm:gap-2 sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-sm">
              <Trophy size={12} /> {e.score}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
