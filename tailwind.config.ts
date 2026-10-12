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
        background: '#ffffff',
        'section-bg': '#f8fafc',
        'text-primary': '#1e293b',
        'text-secondary': '#475569',
        'text-muted': '#64748b',
        line: '#e2e8f0',
        accent: '#3b82f6',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
