/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1A0F0A',
        mahogany: '#3B1F14',
        gold: '#C8973A',
        linen: '#F5EDD8',
        sage: '#7A8C74',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        hero: ['72px', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        section: ['48px', { lineHeight: '1.1' }],
        sub: ['28px', { lineHeight: '1.3' }],
      },
      letterSpacing: {
        eyebrow: '0.15em',
      },
    },
  },
  plugins: [],
}
