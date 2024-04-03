//generic tailwindcss configuration for astro

module.exports = {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],

  plugins: [require("@tailwindcss/typography")],
};
