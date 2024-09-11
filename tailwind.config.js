/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});


module.exports = {
  content: ["./src/*{html,js}"],
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
  plugins: [Myclass],
}

