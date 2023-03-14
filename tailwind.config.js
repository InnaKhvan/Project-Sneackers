/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      md: "768px",
      xl: "1440px",
    },
    colors: {
      primary1: "#0A0A0A",
      primary2: "#FFA800",
      secondary1: "#F1F1F1",
      secondary2: "#F1F1F1",
      sale: "#FF0000",
      secondary3: "#FFC34F",
      secondary4: "#EF8F00",
    },

    plugins: [],
  },
};
