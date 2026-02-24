/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light canvas
        'surface': {
          0: '#ffffff',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e8e8e8',
          300: '#d4d4d4',
          400: '#b0b0b0',
        },
        // Cool slate
        'slate': {
          950: '#0a0f14',
          900: '#141c24',
          850: '#1c2530',
          800: '#253040',
          700: '#354050',
          600: '#45556a',
          500: '#607080',
        },
        // Text hierarchy
        'ink': {
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#4a4a4a',
          600: '#5c5c5c',
          500: '#6e6e6e',
          400: '#8a8a8a',
          300: '#a8a8a8',
          200: '#c8c8c8',
        },
        // Sky blue accent (Boston Dynamics style)
        'sky': {
          50: '#f0f7ff',
          100: '#dbeeff',
          200: '#b8ddff',
          300: '#78c0ff',
          400: '#3aa0f0',
          500: '#0085d4',
          600: '#006db3',
          700: '#005590',
          800: '#003f6b',
          900: '#002a47',
        },
        // Functional
        'status': {
          live: '#22c55e',
          dev: '#3aa0f0',
        },
      },
      fontFamily: {
        'display': ['Syne', 'system-ui', 'sans-serif'],
        'body': ['Outfit', 'system-ui', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 10vw, 8.5rem)', { lineHeight: '1.2', letterSpacing: '-0.05em' }],
        'display-xl': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '1.2', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(1.8rem, 4.5vw, 3.2rem)', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
      },
      animation: {
        'scan': 'scan 10s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
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
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.03)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.06)',
        'elevated': '0 8px 30px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
