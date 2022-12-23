/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*.{html,js}"],
  theme: {
    extend: {
      screens: {
      'sm': '350px',
      'md': '480px',
      'lg': '1024px',
    }},
  },
  plugins: [],
}
