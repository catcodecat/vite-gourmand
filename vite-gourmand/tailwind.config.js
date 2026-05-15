/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7efe5',
        ivory: '#fffaf2',
        wine: '#6f1d2f',
        merlot: '#42101d',
        gold: '#c6944b',
        ink: '#171312',
        charcoal: '#241f1d',
        sage: '#6d7a63'
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        premium: '0 24px 80px rgba(23, 19, 18, 0.14)',
        soft: '0 16px 44px rgba(66, 16, 29, 0.12)'
      }
    }
  },
  plugins: []
}
