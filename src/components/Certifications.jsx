import { motion } from 'framer-motion';
import { Award, BadgeCheck, Cloud, Database, ExternalLink, FileText, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { certifications, achievements } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { IBMLogo, SAPLogo } from './Logos';

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

      {/* Globally SAP Certified Professional spotlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 p-1"
      >
        <div className="relative flex flex-col items-center justify-between gap-5 rounded-[calc(theme(borderRadius.3xl)-4px)] bg-ink-950/80 p-6 backdrop-blur-xl sm:flex-row sm:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 size-64 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="flex items-center gap-4">
            <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 shadow-glow">
              <Globe size={22} className="text-white" />
            </span>
            <span className="hidden sm:inline-flex">
              <SAPLogo size={28} />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300/80">
                / spotlight
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">
                Globally SAP Certified Professional
              </h3>
              <p className="mt-1 max-w-xl text-sm text-slate-400">
                Two SAP global certifications validate enterprise-grade backend expertise across
                ABAP Cloud and modern SAP Business Suite directions.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
            <span className="chip border-cyan-400/30 text-cyan-200">
              <ShieldCheck size={12} /> ABAP Cloud — Back-End Developer
            </span>
            <span className="chip border-fuchsia-400/30 text-fuchsia-200">
              <Sparkles size={12} /> SAP Business AI Solutions
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6">
        {certifications.map((c, i) => {
          const Icon = iconMap[c.icon] || BadgeCheck;
          return (
            <TiltCard key={c.title} max={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass group relative h-full overflow-hidden rounded-2xl p-3.5 transition hover:shadow-glow sm:rounded-3xl sm:p-6"
              >
                <div
                  className={`pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br ${c.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
                />
                <div className="flex items-start justify-between gap-2 sm:gap-4">
                  <span
                    className={`grid size-9 place-items-center rounded-xl bg-gradient-to-br ${c.color} shadow-glow sm:size-12 sm:rounded-2xl`}
                  >
                    <Icon size={14} className="text-white sm:hidden" />
                    <Icon size={20} className="hidden text-white sm:block" />
                  </span>
                  {c.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-400/30 bg-white/[0.04] px-2 py-0.5 text-[9px] font-medium text-fuchsia-200 sm:px-3 sm:py-1.5 sm:text-xs">
                      <Sparkles size={10} /> {c.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-[13px] font-semibold leading-snug text-white sm:mt-5 sm:text-lg">
                  {c.title}
                </h3>
                <p className="mt-1 text-[11px] text-slate-400 sm:mt-1.5 sm:text-sm">{c.issuer}</p>
                {c.pdf && (
                  <a
                    href={c.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-200 transition hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:text-white sm:mt-4 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs"
                  >
                    <FileText size={11} /> View
                    <ExternalLink size={10} />
                  </a>
                )}
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
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-4 transition hover:-translate-y-1 sm:rounded-3xl sm:p-7"
            >
              <div className="absolute -right-12 -top-12 size-40 rounded-full bg-gradient-to-br from-amber-400/20 to-sky-500/20 blur-2xl transition group-hover:opacity-100" />
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-400/20 to-sky-500/20 ring-1 ring-white/10 sm:size-12 sm:rounded-2xl">
                  <Award size={14} className="text-amber-300 sm:hidden" />
                  <Award size={20} className="hidden text-amber-300 sm:block" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-amber-300/80 sm:text-[11px] sm:tracking-[0.22em]">{a.metric}</p>
                    {a.title.toLowerCase().includes('ibm') && <IBMLogo size={12} />}
                  </div>
                  <h3 className="font-display text-[13px] font-semibold leading-tight text-white sm:text-lg">{a.title}</h3>
                </div>
              </div>
              <p className="mt-3 line-clamp-3 text-[11px] leading-relaxed text-slate-300 sm:mt-4 sm:line-clamp-none sm:text-sm">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
