/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {

      colors: {
        primary: "#2563EB",
        secondary: "#10B981",
        tetiary: "#111827",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          
        }
      }
    },
  },
  plugins: [],
}

