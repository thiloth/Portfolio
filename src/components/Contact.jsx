import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import { IBMLogo } from './Logos';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    // Compose a mailto so the message lands in the user's inbox without a backend
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Thiloth,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 2400);
    }, 600);
  };

  return (
    <section id="contact" className="section pb-8 sm:pb-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something exceptional."
        subtitle="Open to SAP backend roles, freelance ABAP work, and meaningful collaborations."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="glass relative overflow-hidden rounded-3xl p-7 lg:col-span-2"
        >
          <div className="absolute -top-24 -left-24 size-64 rounded-full bg-cyan-500/15 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 size-64 rounded-full bg-sky-500/15 blur-3xl" />

          <h3 className="font-display text-xl font-semibold text-white">Get in touch</h3>
          <p className="mt-2 text-sm text-slate-400">
            I usually respond within a day. Prefer email or LinkedIn — both reach me fastest.
          </p>

          <ul className="mt-6 space-y-3">
            <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phoneRaw}`} />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value="thiloth-b-shetty"
              href={profile.linkedin}
            />
            <ContactRow icon={Github} label="GitHub" value="@thiloth" href={profile.github} />
            <ContactRow icon={MapPin} label="Location" value={profile.location} />
          </ul>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Currently</p>
            <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white">
              <span>SAP ABAP Developer</span>
              <span className="text-slate-500">@</span>
              <IBMLogo size={18} />
            </div>
            <p className="mt-1 text-xs text-slate-400">Open to global SAP & backend opportunities.</p>
          </div>
        </motion.div>

        {/* Form card */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="glass relative overflow-hidden rounded-3xl p-7 lg:col-span-3"
        >
          <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-cyan-500/10 blur-2xl" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Your Name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Recruiter, manager, or collaborator"
            />
            <Field
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@company.com"
            />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={5}
                required
                placeholder="Tell me about the role, the project, or just say hi…"
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/50 focus:bg-white/[0.05] focus:shadow-glow"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-500">Submitting opens your email client with the message pre-filled.</p>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary min-w-[170px]"
            >
              {status === 'idle' && (
                <>
                  Send Message <Send size={14} />
                </>
              )}
              {status === 'sending' && (
                <>
                  <Loader2 size={14} className="animate-spin" /> Sending…
                </>
              )}
              {status === 'sent' && (
                <>
                  <CheckCircle2 size={14} /> Sent!
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-sky-400/30 hover:bg-white/[0.05]">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-sky-400/20 to-cyan-500/20 ring-1 ring-white/10">
        <Icon size={16} className="text-sky-300 transition group-hover:text-sky-300" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">{label}</p>
        <p className="truncate text-sm font-medium text-slate-200">{value}</p>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}

function Field({ label, name, value, onChange, type = 'text', placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/50 focus:bg-white/[0.05] focus:shadow-glow"
      />
    </div>
  );
}
