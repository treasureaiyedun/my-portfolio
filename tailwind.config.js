/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui:{
    themes:["light"],
  },
  plugins: [
    daisyui,
  ],
}

