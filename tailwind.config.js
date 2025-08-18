/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medieval: ["MedievalSharp", "cursive"],
        roboto: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],  
}

