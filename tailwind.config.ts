import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#08132B',
          900: '#0B1B3D',
          800: '#122955',
          700: '#0B3067',
          600: '#114289',
          50: '#F0F4FA',
        },
        brandRed: {
          600: '#C8102E',
          700: '#A60C24',
        },
        brandGold: {
          500: '#EAB308',
          400: '#F5A623',
        },
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        ambient: '0 4px 20px -4px rgba(11, 27, 61, 0.05)',
        elevated: '0 12px 32px -8px rgba(11, 27, 61, 0.12)',
        glowRed: '0 8px 20px -4px rgba(200, 16, 46, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;