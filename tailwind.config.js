/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx, html}"],
  theme: {
    colors: {
      yellow: "#FBB901",
      brown: "#6E6053",
      grey: "#6E6053",
      silver: "#D3D3D3",
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
    fontSize: {
      xs: "0.8rem",
      sm: "1rem",
      md: "1.3rem",
      lg: "1.3rem",
      xl: "1.5rem",
      "4xl": "2.5rem",
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
