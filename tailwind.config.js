/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      h1: ["45px", { lineHeight: "55px", fontWeight: "700" }],
      h2: ["15px", { lineHeight: "18px", fontWeight: "500" }],
      p1: ["12px", { lineHeight: "15px", fontWeight: "400" }],
    },
    extend: {},
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1200px",
    },
    colors: {
      primary1: "#0A0A0A",
      primary2: "#FFA800",
      secondary1: "#F1F1F1",
      secondary2: "#7A7A7A",
      sale: "#FF0000",
      secondary3: "#FFC34F",
      secondary4: "#EF8F00",
    },
    container: {
      center: true,
      // padding: '1rem',
      screens: {
        mobile: "100%",
        tablet: "704px",
        desktop: "1200px",
      },
    },
    // backgroundImage: {
    //   'main-background': ""
    // }
  },
  plugins: [],
};
