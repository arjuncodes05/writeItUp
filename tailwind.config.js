/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#EEEEEE',
        'secondary' : '#F5EFFF'
      },
      spacing: {
        'remaining' : `calc(100vh - 4rem)`
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
