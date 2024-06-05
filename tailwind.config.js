/** @type {import('tailwindcss').Config} */
const defaultTheme = require('./node_modules/tailwindcss/defaultTheme');
const { addDynamicIconSelectors } = require('./node_modules/@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Baloo 2"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'mentari' : '4px 4px 10px rgba(228, 230, 232, 0.90) inset',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}