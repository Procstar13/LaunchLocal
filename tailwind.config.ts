import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f7f3ea',
        'section-bg': '#eee7da',
        'text-primary': '#192621',
        'text-secondary': '#53615b',
        'text-muted': '#758079',
        line: '#d9d0c1',
        accent: '#2f63d8',
        rust: '#b65332',
        sun: '#e5aa3d',
        sage: '#7b8f76',
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        poppins: ['Manrope', 'sans-serif'],
        inter: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
