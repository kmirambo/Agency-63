/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan:   '#2DE2C8',
          violet: '#7B5CF6',
          mid:    '#5BA8EE',
        },
        surface: {
          50:  '#FFFFFF',
          100: '#F7F8FC',
          200: '#EEF0F8',
          300: '#E2E5F0',
          400: '#C8CEDD',
          500: '#9AA2B8',
          600: '#5C6580',
          700: '#3A4160',
          800: '#1E2340',
          900: '#0D1126',
        },
      },
      fontFamily: {
        sans:    ['DM Sans', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
