//generic tailwindcss configuration for astro

export default {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],

  plugins: [require("@tailwindcss/typography")],
};
