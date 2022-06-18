/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'prim1':"#231942",
        'prim2':"#42307D",
        'sec':"#5e548e",
      },
      keyframes:{
        waving : {
          '0%':{transform: 'rotate(-20deg)'},
          
          '50%':{transform: 'rotate(+20deg)'},
          '100%':{transform: 'rotate(-20deg)'}
        }
      },
      animation:{
        waving : 'waving 2s ease-in-out infinite ',
        slowed_bounce : 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
