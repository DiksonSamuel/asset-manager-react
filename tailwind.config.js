/** @type {import('tailwindcss').Config} */
const { default: colors } = require('./src/utils/colors');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: colors
  },
  plugins: [],
}

