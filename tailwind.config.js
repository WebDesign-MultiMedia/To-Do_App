/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
         headings: ["Limelight", "sans-serif"],
         toDoList: ["Bruno Ace SC", "sans-serif"],
         toDoList2: ["Handlee", "cursive"],

      }
    },
  },
  plugins: [],
}

