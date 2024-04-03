//generic tailwindcss configuration for astro

export default {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'

  plugins: [require("@tailwindcss/typography")],
};
