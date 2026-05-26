import { motion } from 'framer-motion';

const lines = [
  { t: 'CLASS ', c: 'text-fuchsia-400' },
  { t: 'lcl_solution ', c: 'text-cyan-300' },
  { t: 'DEFINITION FINAL.\n', c: 'text-slate-400' },
  { t: '  PUBLIC SECTION.\n', c: 'text-slate-500' },
  { t: '    METHODS ', c: 'text-fuchsia-400' },
  { t: 'engineer ', c: 'text-emerald-300' },
  { t: 'IMPORTING ', c: 'text-fuchsia-400' },
  { t: 'iv_scope', c: 'text-amber-300' },
  { t: ' TYPE string.\n', c: 'text-slate-400' },
  { t: 'ENDCLASS.\n\n', c: 'text-slate-500' },
  { t: 'METHOD ', c: 'text-fuchsia-400' },
  { t: 'engineer.\n', c: 'text-emerald-300' },
  { t: '  ', c: '' },
  { t: 'DATA(', c: 'text-fuchsia-400' },
  { t: 'lo_solution', c: 'text-amber-300' },
  { t: ') = ', c: 'text-slate-400' },
  { t: 'NEW ', c: 'text-fuchsia-400' },
  { t: 'cl_sap_backend( ).\n', c: 'text-cyan-300' },
  { t: '  ', c: '' },
  { t: 'lo_solution', c: 'text-amber-300' },
  { t: '->', c: 'text-slate-400' },
  { t: 'with_cds_views', c: 'text-emerald-300' },
  { t: '( )->\n  ', c: 'text-slate-400' },
  { t: 'with_amdp', c: 'text-emerald-300' },
  { t: '( )->', c: 'text-slate-400' },
  { t: 'with_odata', c: 'text-emerald-300' },
  { t: '( )->\n  ', c: 'text-slate-400' },
  { t: 'with_idoc', c: 'text-emerald-300' },
  { t: '( )->', c: 'text-slate-400' },
  { t: 'deliver', c: 'text-emerald-300' },
  { t: '( ', c: 'text-slate-400' },
  { t: 'iv_scope ', c: 'text-amber-300' },
  { t: ').\n', c: 'text-slate-400' },
  { t: 'ENDMETHOD.', c: 'text-fuchsia-400' },
];

export default function AbapCodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative w-full max-w-xl"
    >
      <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-blue-600/25 via-sky-500/25 to-cyan-400/25 opacity-60 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2 border-b border-white/5 bg-white/[0.03] px-3 py-2 sm:px-4 sm:py-2.5">
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/80 sm:size-3" />
            <span className="size-2.5 rounded-full bg-yellow-400/80 sm:size-3" />
            <span className="size-2.5 rounded-full bg-emerald-400/80 sm:size-3" />
          </div>
          <span className="truncate font-mono text-[10px] text-slate-400 sm:text-[11px]">
            solution.abap — IBM · SAP
          </span>
          <span className="hidden shrink-0 text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:inline">
            ABAP Cloud
          </span>
        </div>
        <div className="grid grid-cols-[26px_1fr] gap-2 overflow-x-auto p-3 font-mono text-[10.5px] leading-relaxed sm:grid-cols-[36px_1fr] sm:gap-3 sm:p-4 sm:text-[12.5px]">
          <div className="select-none text-right text-slate-600">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <pre className="whitespace-pre-wrap break-words text-slate-300">
            {lines.map((seg, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: 0.6 + i * 0.04 }}
                className={seg.c}
              >
                {seg.t}
              </motion.span>
            ))}
            <span className="ml-0.5 inline-block h-4 w-1.5 -mb-0.5 bg-cyan-300 align-middle animate-blink" />
          </pre>
        </div>
      </div>
    </motion.div>
  );
}
