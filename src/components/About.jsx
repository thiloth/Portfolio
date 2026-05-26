import { motion } from 'framer-motion';
import { Award, Code2, Database, Layers, Rocket, Sparkles, Users, Zap } from 'lucide-react';
import { profile, stats, strengths } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import ArchitectureDiagram from './ArchitectureDiagram';
import TechOrbit from './TechOrbit';
import DataFlow from './DataFlow';
import { IBMLogo, SAPLogo } from './Logos';

const strengthIcons = [Zap, Rocket, Sparkles, Users, Award];

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="About Me"
        title="Crafting enterprise SAP backends with care."
        subtitle="SAP ABAP Developer at IBM India Pvt. Ltd., specializing in ABAP Cloud, CDS Views, OData, and scalable backend architectures that power real businesses."
      />

      <div className="grid gap-6 lg:grid-cols-12">
        <TiltCard className="lg:col-span-7" max={4}>
          <div className="glass relative h-full overflow-hidden rounded-3xl p-7 sm:p-9 neon-border">
            <div className="absolute -top-24 -right-24 size-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-cyan-500/15 blur-3xl" />

            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 ring-1 ring-white/10">
                <Code2 size={18} className="text-cyan-300" />
              </span>
              <h3 className="font-display text-xl font-semibold text-white">Who I am</h3>
            </div>

            <p className="mt-5 leading-relaxed text-slate-300">
              SAP ABAP Developer with hands-on experience in enterprise{' '}
              <SAPLogo size={14} className="mx-1 align-[-3px]" />
              backend development at{' '}
              <IBMLogo size={12} className="mx-1 align-[-1px]" />
              <span className="font-semibold text-white">India Pvt. Ltd.</span> Skilled in
              developing custom reports, Smart Forms, enhancements, debugging, integrations, and
              scalable SAP applications.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { icon: Layers, label: 'CDS Views' },
                { icon: Database, label: 'OData' },
                { icon: Code2, label: 'ABAP Cloud' },
                { icon: Zap, label: 'Performance' },
                { icon: Sparkles, label: 'Smart Forms' },
                { icon: Rocket, label: 'Integrations' },
              ].map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200 transition hover:border-fuchsia-400/40 hover:bg-white/[0.06]"
                >
                  <Icon size={14} className="text-cyan-300 transition group-hover:text-fuchsia-300" />
                  {label}
                </motion.div>
              ))}
            </div>

            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Strengths
              </p>
              <div className="flex flex-wrap gap-2">
                {strengths.map((s, i) => {
                  const Icon = strengthIcons[i % strengthIcons.length];
                  return (
                    <span key={s} className="chip">
                      <Icon size={12} className="text-fuchsia-300" />
                      {s}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </TiltCard>

        <div className="grid gap-5 lg:col-span-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-fuchsia-400/40"
            >
              <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-fuchsia-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">
                  {s.value}
                </span>
              </p>
              <p className="mt-1 text-sm text-slate-400">{s.label}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-5"
          >
            <p className="text-sm text-slate-400">Currently engineering at</p>
            <div className="mt-2 flex items-center gap-3">
              <IBMLogo size={20} />
              <p className="font-display text-lg font-semibold text-white">India Pvt. Ltd.</p>
            </div>
            <p className="mt-1 text-sm text-slate-400">Since {profile.startDate}</p>
          </motion.div>
        </div>
      </div>

      {/* Enterprise SAP architecture illustration */}
      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ArchitectureDiagram />
        </div>
        <div className="lg:col-span-5">
          <TechOrbit />
        </div>
      </div>

      {/* Live cross-system dataflow */}
      <div className="mt-6">
        <DataFlow />
      </div>
    </section>
  );
}
