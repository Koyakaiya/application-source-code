/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gradientColorStops: theme=>({
          'primary': '#2460A7',
          'secondary': '#FFFFFF'
      }),
    },
  },
  plugins: [],
}

