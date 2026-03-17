import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ntk-black': '#000000',
        'ntk-blue': '#083a5e',
        'ntk-orange': '#ff8e01',
        'ntk-white': '#ffffff',
        'ntk-green': '#007a3f',
        'ntk-grey': '#4b4b4b',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        opensans: ['var(--font-opensans)', 'sans-serif'],
      },
      keyframes: {
        orb1: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(80px, 60px) scale(1.15)' },
        },
        orb2: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(-60px, -80px) scale(1.2)' },
        },
        scanLine: {
          '0%': { top: '10%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '90%', opacity: '0' },
        },
        gradientRotate: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        progressFill: {
          '0%': { width: '0%' },
        },
      },
      animation: {
        'orb-1': 'orb1 10s ease-in-out infinite alternate',
        'orb-2': 'orb2 12s ease-in-out infinite alternate',
        'scan-line': 'scanLine 3s ease-in-out infinite',
        'gradient-rotate': 'gradientRotate 4s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
