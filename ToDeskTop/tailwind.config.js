/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary':'#3238f2',
      },
      fontFamily:{
        // 'anuj-font':['Poppins','sans-serif']
        'display':['Poppins','sans-serif'],
        'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

