/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],


  theme: {   
    
   
    extend: {
      display: ["group-hover"],
      cursor: {
        'pointer': 'url("../images/icons/pointinghand.svg"),pointer',
      },
      animation:{
        bounce_two:'bounce 2s infinite',
        bounce_half:'bounce 1.3s infinite',

      },
    
      
   

      colors:{
        'hover-red': "#BF0A30",
        'font-blue':'#002868',
        'light-grey':"#B6B6B6",
        'white-f':"#FFFFFF",
        'font-gray':'#333333'
      },
      fontFamily: {
        proxima_nova: ['ProximaNova-bold', 'cursive'],
        proxima_nova_bold: ["ProximaNovaRegular", "cursive"],

        // time and weather
        source_sans_proBold: ["SourceSansProBold", "sans-serif"],
        Source_Sans_Pro:['SourceSansPro','sans-serif']

      },
    
      
    },
  },
  plugins: [],
}

