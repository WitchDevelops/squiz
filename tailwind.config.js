/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)", // Fixes bg-background
        foreground: "var(--color-text)", // Fixes text-foreground
        primary: "var(--color-primary)", // Fixes bg-primary
      },
    },
  },
  plugins: [],
};
