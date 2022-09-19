/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-gray": '#f1f5f9',
        "theme-primary": "#6366f1",
        "theme-primary-dark": "#5661b3",
      }
    },
    fontFamily: {
      'sans': 'Roboto, sans-serif',
    }
  },
  plugins: [],
}
