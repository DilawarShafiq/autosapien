/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian base - warm-tinted blacks
        'obsidian': {
          950: '#06060a',
          900: '#0a0a10',
          850: '#0f0f16',
          800: '#14141c',
          700: '#1c1c28',
          600: '#262635',
          500: '#333346',
          400: '#48485f',
          300: '#65657f',
          200: '#8a8aa3',
          100: '#b5b5c8',
        },
        // The ONE accent - refined amber/gold
        'signal': {
          50: '#fffcf0',
          100: '#fff5d4',
          200: '#ffe8a3',
          300: '#ffd666',
          400: '#f0a030',
          500: '#d4920a',
          600: '#b87a08',
          700: '#8c5d06',
          800: '#6b4705',
          900: '#4a3104',
        },
        // Functional only - status indicators
        'status': {
          live: '#3ddc84',
          dev: '#f0a030',
          alert: '#ff4444',
        },
      },
      fontFamily: {
        'display': ['Syne', 'system-ui', 'sans-serif'],
        'body': ['Outfit', 'system-ui', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 10vw, 9rem)', { lineHeight: '0.88', letterSpacing: '-0.05em' }],
        'display-xl': ['clamp(2.5rem, 7vw, 6rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(1.8rem, 4.5vw, 3.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      animation: {
        'scan': 'scan 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'rotate-slow': 'rotate 40s linear infinite',
        'ticker': 'ticker 30s linear infinite',
        'ticker-reverse': 'ticker-reverse 30s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'reveal': 'reveal 1.2s ease-out forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(240, 160, 48, 0.15)' },
          '50%': { boxShadow: '0 0 50px rgba(240, 160, 48, 0.25)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(240, 160, 48, 0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(240, 160, 48, 0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '80px 80px',
        'grid-sm': '40px 40px',
      },
      boxShadow: {
        'card': '0 4px 40px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(240, 160, 48, 0.15)',
        'glow': '0 0 40px rgba(240, 160, 48, 0.1)',
      },
    },
  },
  plugins: [],
}
