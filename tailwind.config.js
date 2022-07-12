/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.purple["700"],
        // secondary: "#FCF8FF",
        secondary: colors.gray["100"],
      },
    },
  },
  plugins: [],
};
