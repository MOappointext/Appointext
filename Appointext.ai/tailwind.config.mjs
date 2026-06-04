/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow:       '#FFD900',
        'yellow-soft':'#FFE970',
        blue:         '#1849D6',
        'blue-hover': '#1339B5',
        red:          '#E63946',
        dark:         '#0A0A0A',
        ink:          '#000000',
        surface:      '#111111',
        muted:        '#5B6480',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.75' },
        },
      },
      animation: {
        marquee:      'marquee 30s linear infinite',
        float:        'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
