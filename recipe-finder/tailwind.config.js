/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E76F29'  // orange accent for Ghanaian flavor
      }
    },
  },
  plugins: [],
}
