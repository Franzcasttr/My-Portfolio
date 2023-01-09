/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
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
      },
    },
  },
  plugins: [],
};
