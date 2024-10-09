/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],  
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        },
      },
    },
  },
  plugins: [],
}