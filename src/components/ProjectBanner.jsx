import { motion } from 'framer-motion';

// Unique animated banner per project. Pure inline SVG + Framer Motion —
// no external assets, no network calls.

export default function ProjectBanner({ name, type, highlight }) {
  const variant = pickVariant(name, type);

  return (
    <div className="relative h-28 overflow-hidden sm:h-40">
      <BackgroundLayer type={type} />
      <Illustration variant={variant} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2 sm:px-5 sm:py-3">
        <span className="truncate font-mono text-[8px] uppercase tracking-[0.18em] text-slate-300/80 sm:text-[10px] sm:tracking-[0.2em]">
          {type === 'Enterprise' ? `/ SAP · ${variant.tag}` : `/ PERSONAL · ${variant.tag}`}
        </span>
        {highlight && (
          <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur sm:px-2 sm:text-[10px] sm:tracking-[0.18em]">
            {highlight}
          </span>
        )}
      </div>
    </div>
  );
}

function BackgroundLayer({ type }) {
  const palette =
    type === 'Enterprise'
      ? ['#22d3ee', '#6366f1', '#a855f7']
      : ['#f472b6', '#a855f7', '#22d3ee'];

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 30% 20%, ${palette[0]}26, transparent 55%),
                       radial-gradient(120% 80% at 80% 80%, ${palette[2]}26, transparent 55%),
                       linear-gradient(135deg, #0a0d22 0%, #060818 100%)`,
        }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none">
        <defs>
          <pattern id="grid-pat" width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M 22 0 L 0 0 0 22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pat)" />
      </svg>
      <motion.div
        animate={{ x: [-40, 40, -40] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full opacity-50 blur-2xl"
        style={{ background: palette[1] }}
      />
    </>
  );
}

function pickVariant(name, type) {
  const n = name.toLowerCase();
  if (/integration/.test(n)) return { kind: 'integration', tag: 'INTEGRATION' };
  if (/performance|optim/.test(n)) return { kind: 'performance', tag: 'PERFORMANCE' };
  if (/cds|amdp/.test(n)) return { kind: 'database', tag: 'DATA LAYER' };
  if (/module pool/.test(n)) return { kind: 'modulepool', tag: 'MODULE POOL' };
  if (/report/.test(n)) return { kind: 'report', tag: 'REPORTING' };
  if (/form/.test(n)) return { kind: 'forms', tag: 'FORMS' };
  if (/enhance|exit/.test(n)) return { kind: 'enhancement', tag: 'ENHANCEMENT' };
  if (/automat|validation/.test(n)) return { kind: 'automation', tag: 'AUTOMATION' };
  if (/money|tracker/.test(n)) return { kind: 'finance', tag: 'FINTECH' };
  if (/between/.test(n)) return { kind: 'narrative', tag: 'NARRATIVE' };
  if (/wood|story/.test(n)) return { kind: 'story', tag: 'STORY' };
  if (/portfolio/.test(n)) return { kind: 'portfolio', tag: 'PORTFOLIO' };
  return { kind: type === 'Enterprise' ? 'sap' : 'web', tag: type === 'Enterprise' ? 'BACKEND' : 'WEB' };
}

function Illustration({ variant }) {
  switch (variant.kind) {
    case 'integration':
      return <IntegrationArt />;
    case 'performance':
      return <PerformanceArt />;
    case 'database':
      return <DatabaseArt />;
    case 'modulepool':
      return <ModulePoolArt />;
    case 'report':
      return <ReportArt />;
    case 'forms':
      return <FormsArt />;
    case 'enhancement':
      return <EnhancementArt />;
    case 'automation':
      return <AutomationArt />;
    case 'finance':
      return <FinanceArt />;
    case 'narrative':
      return <NarrativeArt />;
    case 'story':
      return <StoryArt />;
    case 'portfolio':
      return <PortfolioArt />;
    default:
      return <DefaultArt />;
  }
}

/* ---------- Illustrations ---------- */

const NODE = 'rgba(34,211,238,0.95)';
const NODE_DIM = 'rgba(34,211,238,0.35)';
const LINE = 'rgba(168,85,247,0.7)';
const ACCENT = 'rgba(99,102,241,0.95)';

function IntegrationArt() {
  // 3 systems exchanging data via animated lines
  const sys = [
    { x: 48, y: 60, label: 'ECC' },
    { x: 220, y: 38, label: 'S/4' },
    { x: 308, y: 80, label: 'CRM' },
  ];
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      {/* connecting lines */}
      <line x1={sys[0].x} y1={sys[0].y} x2={sys[1].x} y2={sys[1].y} stroke={LINE} strokeWidth="1.2" strokeDasharray="3 4" />
      <line x1={sys[1].x} y1={sys[1].y} x2={sys[2].x} y2={sys[2].y} stroke={LINE} strokeWidth="1.2" strokeDasharray="3 4" />
      <line x1={sys[0].x} y1={sys[0].y} x2={sys[2].x} y2={sys[2].y} stroke={LINE} strokeWidth="1.2" strokeDasharray="3 4" opacity="0.5" />

      {/* moving packets */}
      {[0, 0.6, 1.2].map((d, i) => (
        <motion.circle
          key={i}
          r="3"
          fill={NODE}
          initial={{ offsetDistance: '0%' }}
          animate={{
            cx: [sys[0].x, sys[1].x, sys[2].x, sys[0].x],
            cy: [sys[0].y, sys[1].y, sys[2].y, sys[0].y],
          }}
          transition={{ duration: 4.5, delay: d, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {/* system nodes */}
      {sys.map((s) => (
        <g key={s.label}>
          <circle cx={s.x} cy={s.y} r="14" fill="rgba(15,18,40,0.9)" stroke={ACCENT} strokeWidth="1.5" />
          <text x={s.x} y={s.y + 3} textAnchor="middle" fontFamily="Space Grotesk, Inter, sans-serif" fontSize="9" fontWeight="700" fill="white">
            {s.label}
          </text>
        </g>
      ))}

      <text x="20" y="20" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="2">
        IDoc · RFC · OData
      </text>
    </svg>
  );
}

function PerformanceArt() {
  const bars = [22, 38, 56, 74, 92];
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={70 + i * 38}
          width="22"
          rx="3"
          fill={i === bars.length - 1 ? NODE : ACCENT}
          initial={{ y: 110, height: 0 }}
          animate={{ y: 110 - h, height: h }}
          transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
        />
      ))}
      {/* speed line */}
      <motion.line
        x1="60"
        x2="280"
        y1="30"
        y2="30"
        stroke={NODE}
        strokeWidth="1.5"
        strokeDasharray="5 4"
        animate={{ x1: [60, 280], x2: [280, 280] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <text x="60" y="22" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="2">
        ▲ 3.6x speedup
      </text>
    </svg>
  );
}

function DatabaseArt() {
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      {[0, 1, 2].map((i) => (
        <motion.g
          key={i}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 30 + i * 22, opacity: 1 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <ellipse cx="180" cy={32 + i * 22} rx="70" ry="9" fill="rgba(15,18,40,0.9)" stroke={i === 0 ? NODE : ACCENT} strokeWidth="1.4" />
          <text x="180" y={35 + i * 22} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.7)">
            {['CDS Views', 'AMDP', 'HANA'][i]}
          </text>
        </motion.g>
      ))}
      <motion.circle
        cx="180"
        cy="100"
        r="4"
        fill={NODE}
        animate={{ cy: [100, 30, 100] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}

function ModulePoolArt() {
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="80" y="22" width="200" height="96" rx="6" fill="rgba(8,10,24,0.9)" stroke="rgba(255,255,255,0.18)" />
      <line x1="80" y1="40" x2="280" y2="40" stroke="rgba(255,255,255,0.18)" />
      <circle cx="92" cy="31" r="2.2" fill="#ef4444" />
      <circle cx="100" cy="31" r="2.2" fill="#eab308" />
      <circle cx="108" cy="31" r="2.2" fill="#22c55e" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <text x="92" y={58 + i * 16} fontFamily="ui-monospace, monospace" fontSize="8" fill="rgba(255,255,255,0.4)">
            {['MATNR', 'WERKS', 'BUKRS'][i]}
          </text>
          <motion.rect
            x="150"
            y={50 + i * 16}
            width="115"
            height="10"
            rx="2"
            fill="rgba(168,85,247,0.15)"
            stroke={ACCENT}
            initial={{ width: 0 }}
            animate={{ width: 115 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          />
        </g>
      ))}
      <motion.rect
        x="220"
        y="100"
        width="50"
        height="12"
        rx="3"
        fill={NODE}
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.95, 1.02, 0.95] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <text x="245" y="109" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="700" fill="#062130">
        SUBMIT
      </text>
    </svg>
  );
}

function ReportArt() {
  // ALV-style table with animated rows
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="40" y="20" width="280" height="100" rx="4" fill="rgba(8,10,24,0.85)" stroke="rgba(255,255,255,0.15)" />
      <rect x="40" y="20" width="280" height="18" fill="rgba(99,102,241,0.18)" />
      {[0, 1, 2].map((i) => (
        <text
          key={i}
          x={70 + i * 90}
          y="32"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
          fontSize="9"
          fontWeight="700"
          fill={NODE}
        >
          {['DOC', 'AMOUNT', 'STATUS'][i]}
        </text>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
        >
          <line x1="40" x2="320" y1={42 + i * 18} y2={42 + i * 18} stroke="rgba(255,255,255,0.06)" />
          <text x="70" y={54 + i * 18} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.7)">
            {['90001', '90002', '90003', '90004'][i]}
          </text>
          <text x="160" y={54 + i * 18} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.7)">
            {['12,400', '8,950', '23,100', '4,700'][i]}
          </text>
          <circle cx="245" cy={51 + i * 18} r="3" fill={i === 1 ? '#fbbf24' : NODE} />
          <text x="262" y={54 + i * 18} fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.7)">
            {i === 1 ? 'PEND' : 'OK'}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

function FormsArt() {
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${i * 18},${i * 6}) rotate(${i * -3} 180 70)`}>
          <rect x={120 + i * 30} y={20} width="120" height="100" rx="4" fill="rgba(8,10,24,0.92)" stroke="rgba(255,255,255,0.18)" />
          <rect x={120 + i * 30} y={20} width="120" height="14" fill={i === 0 ? 'rgba(99,102,241,0.4)' : 'rgba(168,85,247,0.4)'} />
          <text x={180 + i * 30} y="30" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="7" fontWeight="700" fill="white" letterSpacing="2">
            {i === 0 ? 'INVOICE' : 'PURCHASE ORDER'}
          </text>
          {[0, 1, 2, 3, 4].map((r) => (
            <motion.line
              key={r}
              x1={130 + i * 30}
              x2={230 + i * 30}
              y1={48 + r * 12}
              y2={48 + r * 12}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + r * 0.1 + i * 0.3 }}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

function EnhancementArt() {
  // Hook / puzzle imagery
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="80" y="48" width="100" height="44" rx="6" fill="rgba(8,10,24,0.85)" stroke="rgba(255,255,255,0.18)" />
      <text x="130" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.7)" letterSpacing="2">
        STANDARD
      </text>
      <motion.g
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x="200" y="48" width="100" height="44" rx="6" fill="rgba(168,85,247,0.18)" stroke={ACCENT} />
        <text x="250" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="white" letterSpacing="2">
          USER EXIT
        </text>
      </motion.g>
      <motion.path
        d="M180 70 L 200 70"
        stroke={NODE}
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <circle cx="180" cy="70" r="3" fill={NODE} />
      <circle cx="200" cy="70" r="3" fill={NODE} />
    </svg>
  );
}

function AutomationArt() {
  // checkmarks streaming
  const ticks = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      {ticks.map((i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: i * 0.18 }}
        >
          <rect x={50 + i * 56} y="58" width="44" height="22" rx="5" fill="rgba(15,18,40,0.85)" stroke={i === 4 ? NODE : 'rgba(255,255,255,0.18)'} />
          <path
            d={`M ${58 + i * 56} 70 L ${66 + i * 56} 76 L ${82 + i * 56} 64`}
            stroke={i === 4 ? NODE : ACCENT}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.g>
      ))}
      <text x="50" y="40" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="2">
        OBJECT VALIDATION · PASS
      </text>
    </svg>
  );
}

function FinanceArt() {
  // line chart trending up
  const points = '20,90 60,70 100,76 140,55 180,45 220,35 260,28 300,18';
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      <motion.polyline
        points={points}
        fill="none"
        stroke={NODE}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
      />
      {points.split(' ').map((p, i) => {
        const [x, y] = p.split(',').map(Number);
        return (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill={ACCENT}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          />
        );
      })}
      <text x="20" y="24" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="2">
        $ + 24% MoM
      </text>
    </svg>
  );
}

function NarrativeArt() {
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      <motion.path
        d="M60,90 C 100,40 180,40 220,90 S 320,140 340,90"
        stroke={NODE}
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      {[60, 140, 220, 300].map((x, i) => (
        <motion.circle
          key={x}
          cx={x}
          cy={i % 2 ? 70 : 90}
          r="6"
          fill={ACCENT}
          stroke={NODE}
          strokeWidth="1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}

function StoryArt() {
  // tree-of-stories
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      <line x1="180" y1="120" x2="180" y2="60" stroke={ACCENT} strokeWidth="2" />
      <line x1="180" y1="80" x2="100" y2="50" stroke={ACCENT} strokeWidth="1.5" />
      <line x1="180" y1="80" x2="260" y2="50" stroke={ACCENT} strokeWidth="1.5" />
      <line x1="180" y1="60" x2="120" y2="30" stroke={ACCENT} strokeWidth="1.5" opacity="0.6" />
      <line x1="180" y1="60" x2="240" y2="30" stroke={ACCENT} strokeWidth="1.5" opacity="0.6" />
      {[
        [180, 120],
        [180, 60],
        [100, 50],
        [260, 50],
        [120, 30],
        [240, 30],
      ].map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="5"
          fill={i === 0 ? NODE : ACCENT}
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}
    </svg>
  );
}

function PortfolioArt() {
  // Code-window mini
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      <rect x="70" y="22" width="220" height="96" rx="6" fill="rgba(8,10,24,0.92)" stroke="rgba(255,255,255,0.15)" />
      <line x1="70" y1="38" x2="290" y2="38" stroke="rgba(255,255,255,0.15)" />
      <circle cx="82" cy="30" r="2.5" fill="#ef4444" />
      <circle cx="92" cy="30" r="2.5" fill="#eab308" />
      <circle cx="102" cy="30" r="2.5" fill="#22c55e" />
      {[0, 1, 2, 3].map((i) => (
        <motion.line
          key={i}
          x1="86"
          x2={86 + (i % 2 === 0 ? 140 : 100) + Math.random() * 30}
          y1={56 + i * 14}
          y2={56 + i * 14}
          stroke={i % 3 === 0 ? NODE : ACCENT}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        />
      ))}
    </svg>
  );
}

function DefaultArt() {
  // pulsing constellation
  const dots = [
    [60, 50], [120, 90], [180, 40], [240, 80], [300, 56],
    [90, 100], [200, 110], [270, 30],
  ];
  return (
    <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
      {dots.map(([x1, y1], i) =>
        dots.slice(i + 1).map(([x2, y2], j) => {
          const d = Math.hypot(x2 - x1, y2 - y1);
          if (d > 100) return null;
          return <line key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(168,85,247,0.25)" strokeWidth="1" />;
        })
      )}
      {dots.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="3.5"
          fill={i % 2 ? NODE : ACCENT}
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </svg>
  );
}
