/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clean canvas system
        'surface': {
          0: '#ffffff',
          50: '#fafaf8',
          100: '#f5f5f0',
          200: '#ebebE5',
          300: '#d9d9d2',
          400: '#b8b8b0',
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
        // The ONE accent - warm amber/gold
        'amber': {
          50: '#fffcf5',
          100: '#fff3d6',
          200: '#ffe4a8',
          300: '#ffd06a',
          400: '#f0a030',
          500: '#d4920a',
          600: '#b87a08',
          700: '#8c5d06',
          800: '#6b4705',
          900: '#4a3104',
        },
        // Functional only
        'status': {
          live: '#22c55e',
          dev: '#f0a030',
        },
      },
      fontFamily: {
        'display': ['Syne', 'system-ui', 'sans-serif'],
        'body': ['Outfit', 'system-ui', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 10vw, 8.5rem)', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
        'display-xl': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(1.8rem, 4.5vw, 3.2rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      animation: {
        'scan': 'scan 10s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
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
