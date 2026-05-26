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
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at 30% 20%, rgba(29,107,255,0.18), transparent 40%), radial-gradient(circle at 80% 80%, rgba(56,189,248,0.14), transparent 40%)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(56, 189, 248, 0.35)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.35)',
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.35)',
        card: '0 10px 40px -10px rgba(2, 6, 23, 0.6)',
      },
      animation: {
        gradient: 'gradient 12s ease infinite',
        blink: 'blink 1s steps(1) infinite',
      },
      keyframes: {
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
