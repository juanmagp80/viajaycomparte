/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'martel': ['Martel'],
      'noto': ['Noto'],
      'oswald': ['Oswald'],
    },
    extend: {},
  },
  plugins: [],
}