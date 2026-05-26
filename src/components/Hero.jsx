import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';
import Particles from './Particles';
import Typing from './Typing';
import AbapCodeWindow from './AbapCodeWindow';
import ProfileImage from './ProfileImage';
import MagneticButton from './MagneticButton';
import { IBMLogo, SAPLogo } from './Logos';

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-0 -z-10 bg-grid-glow opacity-60" />
      <div className="absolute -left-32 top-24 -z-10 h-72 w-72 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="absolute -right-32 bottom-24 -z-10 h-80 w-80 rounded-full bg-sky-500/15 blur-[120px]" />
      <Particles count={18} />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="eyebrow">
              <span className="size-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(16,185,129,0.7)]" />
              Available for SAP backend opportunities
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-slate-300 backdrop-blur">
              <IBMLogo size={12} /> <span className="text-slate-500">·</span>
              <SAPLogo size={12} />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 font-display text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[1.05] tracking-tight text-white"
          >
            THILOTH B SHETTY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-3 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
            <span className="font-display text-base font-medium text-slate-300 sm:text-lg">
              SAP ABAP Developer at <span className="text-white">IBM</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 flex items-center gap-2 text-base text-slate-400 sm:text-lg"
          >
            <Typing
              words={profile.typingRoles}
              className="font-mono text-sky-300"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-5 max-w-2xl font-display text-lg font-medium leading-snug text-white/90 sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton>
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowDown size={16} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#contact" className="btn-ghost">
                <Mail size={16} /> Contact Me
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                download="Thiloth-B-Shetty-Resume.pdf"
                className="btn-ghost"
              >
                <Download size={16} /> Resume
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-white hover:shadow-glow-cyan"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-fuchsia-400/50 hover:text-white hover:shadow-glow"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:text-white hover:shadow-glow-blue"
            >
              <Mail size={18} />
            </a>
            <span className="hidden h-6 w-px bg-white/10 sm:block" />
            <span className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
              <MapPin size={14} /> {profile.location}
            </span>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid gap-6">
            <ProfileImage />
            <div className="block">
              <AbapCodeWindow />
            </div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-slate-400 sm:flex"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="grid size-7 place-items-center rounded-full border border-white/10 bg-white/5"
        >
          <ArrowDown size={12} />
        </motion.span>
      </motion.a>
    </section>
  );
}
