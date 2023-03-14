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
    margin: {
      ml: {
        9.1: "38px"},
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
