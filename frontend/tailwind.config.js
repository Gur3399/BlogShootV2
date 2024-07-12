/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'grids_img':"url('/src/assets/grids.jpg')",
        'tw':"url('/src/assets/tw.png')"
      },
      borderColor:{
        'gray':'slate-900'
      }
    },
  },
  plugins: [],
}