/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: '375px',
      md: '768px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        110:  '#F1F1F1',
        910: '#444444',
      },
      red: '#FF0000',
  },
  fontSize: {
    xs: {
      size: '12px',
      height: '14.63px',
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
