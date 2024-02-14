import type { Config } from 'tailwindcss'

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  plugins: [require('tailwindcss-animate')],
  prefix: '',
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
    },
  },
} satisfies Config

export default config
