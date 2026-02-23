/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette - Industrial Futurism
        'carbon': {
          950: '#050505',
          900: '#0a0a0a',
          850: '#0f0f0f',
          800: '#141414',
          700: '#1a1a1a',
          600: '#252525',
          500: '#333333',
          400: '#555555',
          300: '#777777',
          200: '#999999',
          100: '#cccccc',
        },
        // Accent - Warm amber/gold for premium feel
        'ember': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Secondary accent - Electric blue for tech
        'volt': {
          50: '#f0fdff',
          100: '#ccfbff',
          200: '#99f6ff',
          300: '#5eefff',
          400: '#00d4ff',
          500: '#00b8e6',
          600: '#0093bf',
          700: '#00759a',
          800: '#085f7e',
          900: '#0c4e69',
        },
        // Tertiary - Muted sage for organic contrast
        'sage': {
          50: '#f6f7f6',
          100: '#e3e6e3',
          200: '#c6ccc6',
          300: '#a1aba1',
          400: '#7c877c',
          500: '#616d61',
          600: '#4d574d',
          700: '#404740',
          800: '#363b36',
          900: '#2f332f',
        },
      },
      fontFamily: {
        'display': ['Syne', 'system-ui', 'sans-serif'],
        'body': ['Outfit', 'system-ui', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
      },
      animation: {
        'scan': 'scan 4s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 30s linear infinite',
        'ticker': 'ticker 20s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'reveal': 'reveal 1s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(251, 191, 36, 0.6)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        'grid-dense': `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        'radial-fade': 'radial-gradient(ellipse at center, transparent 0%, #0a0a0a 70%)',
        'diagonal-lines': `repeating-linear-gradient(
          -45deg,
          transparent,
          transparent 10px,
          rgba(255,255,255,0.02) 10px,
          rgba(255,255,255,0.02) 11px
        )`,
      },
      backgroundSize: {
        'grid': '60px 60px',
        'grid-sm': '30px 30px',
      },
      boxShadow: {
        'inner-glow': 'inset 0 0 60px rgba(251, 191, 36, 0.1)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 50px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(251, 191, 36, 0.2)',
      },
    },
  },
  plugins: [],
}
