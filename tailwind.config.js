module.exports = {
  content: [
    "./themes/ours/**/*.{html,js}",
    "./content/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
