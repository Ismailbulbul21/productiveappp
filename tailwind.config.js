/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        xasuus: {
          purple: "#6d28d9",
          "purple-light": "#8b5cf6",
          "purple-dark": "#5b21b6",
        },
      },
    },
  },
  plugins: [],
}
