/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f8f4f1',
          100: '#f1e9e2',
          200: '#e5d9c9',
          300: '#d4c4aa',
          400: '#b39e7d',
          500: '#927960',
          600: '#725f4c',
          700: '#524538',
          800: '#382e25',
          900: '#231c16',
        }
      }
    },
  },
  plugins: [],
}