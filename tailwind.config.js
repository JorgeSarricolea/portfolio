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
      boxShadow: {
        primary: "0px 0px 12px #eaa0fd",
      },
    },
  },
  plugins: [],
};
