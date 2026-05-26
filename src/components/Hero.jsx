import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio';
import Particles from './Particles';
import Typing from './Typing';
import AbapCodeWindow from './AbapCodeWindow';
import ProfileImage from './ProfileImage';

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute inset-0 -z-10 bg-grid-glow opacity-80" />
      <div className="absolute -left-32 top-24 -z-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-24 -z-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
      <Particles count={32} />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(16,185,129,0.7)]" />
            Available for SAP backend opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 font-display text-[clamp(2.4rem,6vw,4.6rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            <span className="block">Hi, I&apos;m</span>
            <span className="gradient-text animate-gradient bg-[length:200%_200%]">
              Thiloth B Shetty
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 flex items-center gap-2 text-lg sm:text-xl"
          >
            <Sparkles size={18} className="text-cyan-300" />
            <span className="text-slate-300">I&apos;m a </span>
            <Typing
              words={profile.typingRoles}
              className="font-display font-semibold text-white"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} /> Contact Me
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Download size={16} /> Resume
            </a>
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
            <div className="hidden md:block">
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
