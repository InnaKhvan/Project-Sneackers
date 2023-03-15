/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
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

  },
  height: {
    13: '55px',
    37: '156px',
    53: '211px',
  },
  width: {
84: '346px',
  },
  padding: {
    pl: {
      calc1: 'calc(50% - 1440px/2)',
    },
  },
  margin: {
    ml: {
      calc1: 'calc(50% - 1440px/2)',
      1290:'1290px'
    },
  },
  borderRadius:{
    rounded10: '10px', 
  },
  plugins: [],
}}
