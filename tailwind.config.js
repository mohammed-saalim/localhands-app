/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], //all files within app folder and components folder
  theme: {
    extend: {
      colors: {
        'custom-yellow': '#FFC107',
        'custom-blue': '#00BCD4',
      },
    },
  },
  plugins: [],
}

