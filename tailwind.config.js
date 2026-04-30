/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        background: 'var(--background, #FFFFFF)',
        foreground: 'var(--foreground, #281715)',
        surface: '#fff8f7',
        'surface-dim': '#f3d3cf',
        'surface-bright': '#fff8f7',
        primary: '#b70011',
        'on-primary': '#ffffff',
        secondary: '#735c00',
        'on-secondary': '#ffffff',
        tertiary: '#005e8d',
        'on-tertiary': '#ffffff',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        border: '#000000',
        muted: '#F3F4F6',
        card: '#fff8f7',
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-md': '6px 6px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
