/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: '#F5F0E8',
        cream: '#FAF8F5',
        'brown-dark': '#2D2420',
        'brown-medium': '#5D4E47',
        'green': '#228B22',
        'green-dark': '#1a6b1a',
        'gold': '#D4A853',
        'gold-light': '#E8C87A',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
