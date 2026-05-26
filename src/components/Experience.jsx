import { motion } from 'framer-motion';
import { Briefcase, Building2, CheckCircle2, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';
import SectionHeading from './SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've engineered impact."
        subtitle="Building reliable, scalable SAP backend solutions for enterprise customers."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-indigo-500/40 to-fuchsia-500/40 sm:left-1/2" />
        {experience.map((exp, i) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative mb-10 sm:grid sm:grid-cols-2 sm:gap-12"
          >
            <span className="absolute left-4 top-6 z-10 grid -translate-x-1/2 place-items-center sm:left-1/2">
              <span className="absolute size-7 animate-ping rounded-full bg-fuchsia-400/30" />
              <span className="grid size-4 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 ring-4 ring-ink-950" />
            </span>

            <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:col-start-2 sm:pl-10'}`}>
              <div
                className={`glass inline-block w-full rounded-2xl p-6 text-left ${
                  i % 2 === 0 ? 'sm:text-right' : ''
                }`}
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-300">
                  <Briefcase size={12} />
                  <span>{exp.period}</span>
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">{exp.role}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                  <Building2 size={14} className="text-fuchsia-300" />
                  <span className="font-medium">{exp.company}</span>
                </p>
                <p className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin size={12} /> {exp.location}
                </p>
                <ul
                  className={`mt-4 space-y-2 text-sm text-slate-300 ${
                    i % 2 === 0 ? 'sm:items-end' : ''
                  }`}
                >
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className={`flex items-start gap-2 ${i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''}`}
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 shrink-0 text-emerald-400"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
