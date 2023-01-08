/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'poppins'
      },

      colors: {
        dark: {
          '900': '#121214'
        }
      }
    },
  },
  plugins: [],
}