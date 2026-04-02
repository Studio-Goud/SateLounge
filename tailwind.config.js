/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F5',
        warm: '#F5F0E8',
        'brown-dark': '#2D2420',
        'brown-medium': '#5D4E47',
        'brown-darker': '#1a1411',
        green: '#228B22',
        'green-dark': '#1a6b1a',
        'green-light': '#2da832',
        gold: '#D4A853',
        'gold-light': '#E8C87A',
        'gold-dark': '#B8963F',
        red: '#DC143C',
        'red-dark': '#B01030',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
