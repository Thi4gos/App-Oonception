/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'steel-blue': 'rgba(79, 124, 172, 1)',
        'mint-green': 'rgba(192, 224, 222, 1)',
        'gunmetal': 'rgba(22, 37, 33, 1)',
        'outer-space': 'rgba(60, 71, 75, 1)',
        'ice-blue': 'rgba(158, 239, 229, 1)',

        'steel-blue-opposite': 'rgba(206, 132, 58, 1)',
        'mint-green-opposite': 'rgba(224, 192, 201, 1)',
        'gunmetal-opposite': 'rgba(232, 193, 191, 1)',
        'outer-space-opposite': 'rgba(204, 179, 170, 1)',
        'ice-blue-opposite': 'rgba(239, 158, 178, 1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
    plugins: [],
  }
}