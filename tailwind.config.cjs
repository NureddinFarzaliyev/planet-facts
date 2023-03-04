/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-mercury': '#347E96',
        'c-venus': '#9C5B0F',
        'c-earth': '#5422A8',
        'c-mars': '#A53A25',
        'c-jupiter': '#A52420',
        'c-saturn': '#A4411A',
        'c-uranus': '#189A82',
        'c-neptune': '#0C3DAE',
        'c-background': '#06061D',
        'c-nav-text': '#777680',
        'c-text': 'rgb(232, 230, 227)',
        'c-border': '#06062C'
      },
      fontFamily: {
        'f-text': 'League Spartan, sans-serif',
        'f-header': 'Antonio, sans-serif'
      }

    },
  },
  plugins: [],
}