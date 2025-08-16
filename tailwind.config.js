/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0B',
        secondary: '#E8E5DF',
        accent: '#E7C75F',
        cta: '#2AE67D'
      },
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(231, 199, 95, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(231, 199, 95, 0.8)' },
        }
      }
    },
  },
  plugins: [],
};