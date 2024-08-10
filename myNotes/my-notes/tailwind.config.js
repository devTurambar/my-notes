/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-bg': '#EDADAD',
        "gray-bg": "#D9D9D9"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

