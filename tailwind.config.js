/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slide_down: {
          '0%': { transform: 'translateY(-300%)'},
          '100%': { transform: 'translateY(0)' },
        },
        slide_right: {
          '0%': { transform: 'translateX(-200%)'},
          '100%': { transform: 'translateX(0)' },
        },
        slide_left: {
          '0%': { transform: 'translateX(200%)'},
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'slide_down': 'slide_down 2s linear 1',
        'slide_right': 'slide_right 2s linear 1',
        'slide_left': 'slide_left 2s linear 1',
      },
    },
  },
  plugins: [],
}

