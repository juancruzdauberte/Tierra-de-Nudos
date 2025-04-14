/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#f1f0fd",
        customDark: "#242424",
        customFooterNav: "rgb(242, 231, 231)",
        customBrown: "#8f655f",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
