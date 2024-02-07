/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'sm': '480px',

      'md': '700px',

      'lg': '1000px',

      'xl' :'1200'
    },
  },
  plugins: [],
}
