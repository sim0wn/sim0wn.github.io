import type { Config } from 'tailwindcss'

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  plugins: [require('tailwindcss-animate')],
  prefix: '',
  theme: {
    extend: {},
  },
} satisfies Config

export default config
