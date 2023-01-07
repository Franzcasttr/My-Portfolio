/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '4xl': [
          '5px 5px 5px rgba(0, 0, 0, 0.25)',
          '-5px -5px 5px rgba(255, 255, 255, 0.15)',
        ],
        '5xl': [
          'inset -3px -2px 5px rgba(255, 255, 255, 0.25)',
          'inset 1px 1px 10px rgba(0, 0, 0, 0.25)',
        ],
      },
    },
  },
  plugins: [],
};
