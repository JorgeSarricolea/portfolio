/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAA0FD",
        secondary: "#72507A",
        gray: "#212121",
      },
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInFromLeft 1.5s ease-out forwards",
        slideInRight: "slideInFromRight 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
