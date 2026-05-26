import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-ink-950/80 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 font-display text-sm font-bold text-white shadow-glow">
            TS
          </span>
          <div className="leading-tight">
            <p className="font-display text-sm font-semibold text-white">Thiloth B Shetty</p>
            <p className="text-xs text-slate-400">Engineering Scalable SAP Backend Solutions</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-white hover:shadow-glow-cyan"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-fuchsia-400/50 hover:text-white hover:shadow-glow"
          >
            <Github size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:text-white hover:shadow-glow-blue"
          >
            <Mail size={16} />
          </a>
          <a
            href={`tel:${profile.phoneRaw}`}
            aria-label="Phone"
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:text-white hover:shadow-glow"
          >
            <Phone size={16} />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Thiloth B Shetty. All rights reserved.
          </p>
          <motion.a
            href="#home"
            whileHover={{ y: -3 }}
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/40 text-white shadow-glow"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
