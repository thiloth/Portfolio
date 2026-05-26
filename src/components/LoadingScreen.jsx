import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Wait for fonts + first paint, then fade out
    const timer = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink-950"
        >
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[120px]" />
          <div className="absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 font-display text-2xl font-bold text-white shadow-glow"
            >
              TS
              <motion.span
                aria-hidden
                animate={{ rotate: 360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-3xl border border-white/15 border-t-cyan-300"
              />
            </motion.div>

            <div className="text-center">
              <p className="font-display text-sm font-semibold tracking-[0.3em] text-white">
                THILOTH B SHETTY
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-slate-500">
                Initializing Enterprise Workspace
              </p>
            </div>

            <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="h-full w-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
