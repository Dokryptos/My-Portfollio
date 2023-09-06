/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-bar': "#EAEAEA",
        'complete-bar': "#7C7C7C"
      },
    },
  },
  plugins: [],
}

