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
      'tusker': ['Tusker'],
    },
    extend: {
      fontSize: {
        '134': '134px',
      },
    },
  },
  plugins: [],
}