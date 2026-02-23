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
          50: '#fafaf8',
          100: '#f5f5f0',
          200: '#ebebE5',
          300: '#d9d9d2',
          400: '#b8b8b0',
        },
        // Warm slate — for dark sections
        'slate': {
          950: '#0f0f14',
          900: '#1a1a22',
          850: '#22222c',
          800: '#2a2a35',
          700: '#343442',
          600: '#44445a',
          500: '#5e5e78',
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
        // Rich gold accent
        'gold': {
          50: '#fdf9ef',
          100: '#faf0d5',
          200: '#f5e0a8',
          300: '#e8c86a',
          400: '#d4a84b',
          500: '#c9a44c',
          600: '#b8933f',
          700: '#9a7830',
          800: '#7a5e24',
          900: '#5a4419',
        },
        // Keep amber for compatibility
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
        // Functional
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
        'display-2xl': ['clamp(3.5rem, 10vw, 8.5rem)', { lineHeight: '1.0', letterSpacing: '-0.05em' }],
        'display-xl': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(1.8rem, 4.5vw, 3.2rem)', { lineHeight: '1.15', letterSpacing: '-0.03em' }],
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
        'glow-gold': '0 0 20px rgba(201, 164, 76, 0.15), 0 0 60px rgba(201, 164, 76, 0.08)',
        'glow-gold-strong': '0 0 30px rgba(201, 164, 76, 0.25), 0 0 80px rgba(201, 164, 76, 0.12)',
      },
    },
  },
  plugins: [],
}
