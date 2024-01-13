/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lime-color": "var(--lime-color)",
        "bunker-color": "var(--bunker-color)"
      },
    },
  },
  plugins: [],
}

