/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grover: ['Irish Grover', 'cursive'], // Assuming 'cursive' is a suitable fallback
        fatface: ['Abril Fatface'],
      }
    },
  },
  plugins: [],
}

