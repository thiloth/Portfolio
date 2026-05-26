import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Wordmark from './Wordmark';

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
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center gap-5"
          >
            <Wordmark size="lg" />
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-slate-500">
              SAP ABAP Developer · IBM
            </p>
            <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="h-full w-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
