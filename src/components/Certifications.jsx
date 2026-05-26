import { motion } from 'framer-motion';
import { Award, BadgeCheck, Cloud, Database, Sparkles } from 'lucide-react';
import { certifications, achievements } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

const iconMap = {
  badge: BadgeCheck,
  sparkles: Sparkles,
  cloud: Cloud,
  database: Database,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading
        eyebrow="Certifications & Recognition"
        title="Globally credentialed. Industry recognized."
        subtitle="Two SAP Global Certifications, an Azure credential, and IBM appreciation for delivery excellence."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((c, i) => {
          const Icon = iconMap[c.icon] || BadgeCheck;
          return (
            <TiltCard key={c.title} max={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition hover:shadow-glow"
              >
                <div
                  className={`pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br ${c.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
                />
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${c.color} shadow-glow`}
                  >
                    <Icon size={20} className="text-white" />
                  </span>
                  {c.badge && (
                    <span className="chip border-fuchsia-400/30 text-fuchsia-200">
                      <Sparkles size={12} /> {c.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white sm:text-lg">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-400">{c.issuer}</p>
              </motion.div>
            </TiltCard>
          );
        })}
      </div>

      {/* Achievements */}
      <div className="mt-16">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognized for going above and beyond."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1"
            >
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-gradient-to-br from-amber-400/20 to-fuchsia-500/20 blur-2xl transition group-hover:opacity-100" />
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-fuchsia-500/20 ring-1 ring-white/10">
                  <Award size={20} className="text-amber-300" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-amber-300/80">{a.metric}</p>
                  <h3 className="font-display text-lg font-semibold text-white">{a.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
