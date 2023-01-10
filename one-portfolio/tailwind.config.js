/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        accent:{
          50: "#304865"
        }
      }
    },
    fontFamily:{
      signature: ['Bungee'],
    }

  },
  plugins: [],
}
