/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      h1: ["45px", { lineHeight: "55px", fontWeight: "700" }],
      h2: ["25px", { lineHeight: "30px", fontWeight: "500" }],
      h3: ["15px", { lineHeight: "18px", fontWeight: "500" }],
      h4: ["35px", { lineHeight: "43px", fontWeight: "700" }],
      h2t: ["20px", { lineHeight: "24px", fontWeight: "500" }],
      h2m: ["16px", { lineHeight: "20px", fontWeight: "500" }],
      p1: ["14px", { lineHeight: "17px", fontWeight: "400" }],
      p2: ["12px", { lineHeight: "15px", fontWeight: "400" }],
      p3: ["18px", { lineHeight: "22px", fontWeight: "500" }],
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
      white: "rgb(255 255 255)",
    },
    container: {
      center: true,
      screens: {
        mobile: "100%",
        tablet: "704px",
        desktop: "1200px",
      },
      padding: {
        DEFAULT: "15px",
      },
    },
  },
  plugins: [],
};