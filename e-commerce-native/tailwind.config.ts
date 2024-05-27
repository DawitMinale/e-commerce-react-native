/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': [4, 3],
        '3/2': [3, 2],
        '1/1': [1, 1],
      },
    },
  },
  plugins: [],
}

