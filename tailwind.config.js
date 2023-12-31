/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        25: "6.25rem",
      },
      borderColor: {
        "gray-1": "#EBEAED",
      },
      textColor: {
        gray: "#838383",
      },
      fontSize: {
        sm: "16px",
        lg: "40px",
      },
      backgroundColor: {
        main: "#080809",
        second: "#19191A",
      },
      container: {
        center: true,
        padding: "12px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#6734BA",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
            paddingRight: "12px",
            paddingLeft: "12px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1124px",
          },
          "@screen xl": {
            maxWidth: "1124px",
          },
        },
      });
    },
  ],
};
