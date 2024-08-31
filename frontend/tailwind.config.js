/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        baseColor: "rgba(var(--baseColor), <alpha-value>)",
        primary: "rgba(var(--primary), <alpha-value>)",
        text: "rgba(var(--text), <alpha-value>)",
        success: "rgba(var(--success), <alpha-value>)",
        error: "rgba(var(--error), <alpha-value>)",
        warning: "rgba(var(--warning), <alpha-value>)",
      },
      fontFamily: {
        Yekan: ["Yekan", "Inter", "system-ui"],
        Inter: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
