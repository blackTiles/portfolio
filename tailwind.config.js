/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["sans-serif"],
    },
    extend: {
      colors: {
        black1: "#0f1112",
        black2: "#0406084f",
        white: "#e9e1e1",
        grey: "#b1abab",
        pink1: "#FA5252",
        pink2: "#DD2476",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
