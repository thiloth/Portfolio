import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto';
  return (
    <div className={`mb-8 max-w-3xl sm:mb-14 ${alignClass}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          <span className="size-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`mt-6 h-px w-24 origin-left bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
