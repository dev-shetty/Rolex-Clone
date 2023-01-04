/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-900": "#000000",
        "primary-800": "#212121",
        "primary-400": "#c1c1c1",
        "primary-300": "#d4d4d4",
        "primary-200": "#f7f7f7",
        "primary-100": "#ffffff",
        "secondary-400": "#12784a",
        "tertiary-400": "#0000ee",
      },
      fontFamily: {
        "primary-600": ["Poppins", "sans-serif"],
        "primary-400": ["Helvetica", "sans-serif"],
      },
      keyframes: {
        "infinite-scroll-down": {
          // "0%": { transform: "translateY(0) scale(1.5)" },
          // "25%": { transform: "translateY(200%) scale(1.5)" },
          // "50%": { transform: "translateY(-100%) scale(1.5)" },
          "100%": { transform: "translateY(300%) scale(1.25)", opacity: "0.5" },
          "0%": { transform: "translateY(0) scale(1.25)" },
        },
      },
      animation: {
        "infinite-scroll-down": "infinite-scroll-down 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
