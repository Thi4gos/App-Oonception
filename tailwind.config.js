/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        //Thema Black Gray
        'principalBG':'#0B0B0B',
        'secudnariaBG': '#1A1A1A', 
        'terciariaBG': '#2F2F2F',
        //Thema White Gray
        'principalWG': '#F5F5F5',
        'secundariaWG': '#E0E0E0',
        'terciariaWG': '#B0B0B0'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
    plugins: [],
  }
}