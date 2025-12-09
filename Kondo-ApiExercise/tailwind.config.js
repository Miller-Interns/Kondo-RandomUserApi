/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        // 🎩 Primary Brand Colors
        bourbon: "#8C5E3C", // rich whiskey brown
        oak: "#3F2C23", // deep wood brown
        barrel: "#6E4A35", // aged barrel brown

        // ✨ Accent Colors
        gold: "#D4AF37", // classy gold highlight
        brass: "#B08B4F", // softer gold-metal accent
        mutedbrass: "#cab593",
        amber: "#E6B17E", // cocktail amber tone
        copper: "#B87333", // warm copper accent
        rye: "#C19A6B", // light rye whiskey
        brown: "#D2B48C", // light brown accent
        card: "#89311b",
        // 🪵 Wood & Earth Neutrals
        bark: "#2A1F1A",
        espresso: "#1B1412",
        smoke: "#4A403A",
        cork: "#9E7E5C",

        // ⚫ Dark UI Colors
        charcoal: "#0E0E0E",
        iron: "#1A1A1A",
        steel: "#2A2A2A",

        // 🕯 Soft Whites
        ivory: "#F5EDE2",
        linen: "#E8DCC8",
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [],
};
