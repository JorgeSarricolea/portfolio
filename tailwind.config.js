/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#1E1B4B",
        accent: "#3B82F6",
        amber: "#F59E0B",
        dark: "#0A0A0A",
        surface: "#141414",
        "surface-light": "#1C1C1C",
        "gray-dark": "#1E293B",
        "gray-light": "#334155",
        light: "#F1F5F9",
      },
      boxShadow: {
        primary: "0px 0px 12px rgba(139, 92, 246, 0.3)",
        glow: "0px 0px 20px rgba(139, 92, 246, 0.15)",
      },
      fontFamily: {
        mono: ["'SF Mono'", "Monaco", "monospace"],
      },
    },
  },
  plugins: [],
};
