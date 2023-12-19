/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx, html}"],
  theme: {
    colors: {
      yellow: "#FBB901",
      brown: "#6E6053",
      grey: "#838687",
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
      xs: "0.7rem",
      sm: "0.8rem",
      md: "1rem",
      lg: "1.3rem",
      xl: "1.5rem",
      "3xl": "2.2rem",
      "4xl": "2.5rem",
    },
    borderRadius: {
      sm: "10px",
      md: "20px",
      lg: "30px",
      full: "100%",
    },
    extend: {},
  },
  plugins: [],
};
