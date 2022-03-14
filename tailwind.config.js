const themeSwapper = require("tailwindcss-theme-swapper")
const { baseColors, darkColors, aquaColors } = require("./theme-colors")

const themeSwapperConfig = {
  themes: [
    {
      name: "base",
      selectors: [":root"],
      theme: { colors: baseColors },
    },
    {
      name: "dark",
      selectors: ["[data-theme=dark]"],
      theme: { colors: darkColors },
    },
    {
      name: "aqua",
      selectors: ["[data-theme=aqua]"],
      theme: { colors: aquaColors },
    },
  ],
}

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [themeSwapper(themeSwapperConfig)],
}
