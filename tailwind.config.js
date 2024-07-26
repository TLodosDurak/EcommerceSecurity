const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class', // or 'media'

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['lemonade','halloween'],
  },
}
