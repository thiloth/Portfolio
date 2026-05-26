/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        poppins: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          // Matte-black canvas with subtle navy undertone
          950: '#04050d',
          900: '#070a16',
          800: '#0a0f22',
          700: '#0f1530',
        },
        navy: {
          // Deep enterprise navy — used for sections behind glass cards
          950: '#040711',
          900: '#070b1c',
          800: '#0b1230',
          700: '#111a44',
          600: '#1a2560',
        },
        neon: {
          // Electric blue + violet enterprise accents
          blue: '#3b82f6',
          electric: '#1d6bff',
          cyan: '#22d3ee',
          purple: '#a855f7',
          violet: '#7c3aed',
          pink: '#ec4899',
        },
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 30% 20%, rgba(99,102,241,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(168,85,247,0.18), transparent 40%)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 30px rgba(139, 92, 246, 0.35)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.35)',
        card: '0 10px 40px -10px rgba(2, 6, 23, 0.6)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        gradient: 'gradient 12s ease infinite',
        blink: 'blink 1s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
