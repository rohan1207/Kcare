/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: '#E0FBFB',
          100: '#B8F5F5',
          200: '#8BEFEF',
          300: '#03FDFC',
          400: '#00D8D8',
          500: '#00D8D8',
          600: '#03C0C1',
          700: '#009C9D',
          800: '#007F80',
          900: '#005F60',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        display: ['Fraunces', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
