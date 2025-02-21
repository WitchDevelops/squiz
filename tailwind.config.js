/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        foreground: "var(--color-text)",
        primary: "var(--color-primary)",
        primaryHover: "var(--color-primary-hover)",
        primaryActive: "var(--color-primary-active)",
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
