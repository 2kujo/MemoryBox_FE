/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx, html}"],
  theme: {
    colors: {
      yellow: "#FBB901",
      brown: "#6E6053",
      grey: "#6E6053",
      blue: "#287EFF",
      white: "#FFFFFF",
      font1: "#333333",
      font2: "#838687",
      transparent: "transparent",
      dim: "rgba(0,0,0,0.7)",
    },
    fontFamily: {
      display: ["KBFGDisplay", "sans-serif"],
      text: ["KBFGText", "sans-serif"],
    },
    borderRadius: {
      sm: "10px",
      md: "20px",
      lg: "30px",
      full: "100%"
    },
    extend: {},
  },
  plugins: [],
};
