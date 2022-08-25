/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,vue}'],
  theme: {
    extend: {
      backgroundSize: {
        sm: '320px',
        md: '432px',
        lg: '512px',
      },
      fontFamily: {
        rubik: ["'Rubik'", 'sans-serif'],
      },
      colors: {
        primary: '#2767BB',
        secondary: '#FA9038',
        light: '#E6F4F1',
        dark: '#002A3D',
      },
      animation: {
        'slide-left': 'slide 350ms ease-in-out',
      },
      keyframes: {
        slide: {
          '0%': {
            left: '0',
            width: '0px',
          },
          '35%': {
            width: '2rem',
          },
          '100%': {
            width: '1rem',
          },
        },
      },
    },
  },
  plugins: [],
};
