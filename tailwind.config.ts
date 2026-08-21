import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F6F1E8',
        charcoal: '#1A1917',
        stone: '#C4B8A8',
        deep: '#1A1917',
        paper: '#F6F1E8',
        ink: '#1A1917',
        rule: '#C4B8A8',
        accent: '#7C6548',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'section': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '0.01em' }],
      },
    },
  },
  plugins: [],
}

export default config
