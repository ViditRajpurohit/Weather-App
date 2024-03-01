/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    
    extend: {
      colors:{
        'grey':'#CECCCD'
      },
      keyframes:{
        'fadeRight':{
          '0% , 100%':{ transform: 'translateX(-20px)', opacity: '0'},
          '100%':{opacity: '1' , transform: 'translateX(0)'}
        }
      },
      animation:{
        
      }
    },
  },
  plugins: [],
}

