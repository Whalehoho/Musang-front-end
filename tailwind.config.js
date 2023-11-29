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
        inder: ['Inder'],
        cardo: ['Cardo-Regular'],
        cardo_bold: ['Cardo-Bold'],
        cardo_italic: ['Cardo-Italic'],
      }
    },
  },
  plugins: [],
}

