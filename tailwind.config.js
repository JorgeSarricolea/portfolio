/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // Morado vibrante pero elegante
        secondary: "#1E1B4B", // Azul índigo muy oscuro
        accent: "#3B82F6", // Azul brillante para acentos
        dark: "#0F172A", // Azul oscuro casi negro para fondos
        "gray-dark": "#1E293B", // Gris azulado oscuro
        "gray-light": "#334155", // Gris azulado medio
        light: "#F1F5F9", // Gris muy claro casi blanco
      },
      boxShadow: {
        primary: "0px 0px 12px rgba(139, 92, 246, 0.3)", // Sombra sutil del primary
      },
    },
  },
  plugins: [],
};
