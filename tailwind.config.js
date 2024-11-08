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

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'selector',
  content: ["./src/*{html,js}", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
      },
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
        },
        slide_right2: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)' },
        },
        slide_left2: {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        'slide_down': 'slide_down 2s linear 1',
        'slide_right': 'slide_right 2s linear 1',
        'slide_left': 'slide_left 2s linear 1',
        'slide_left2': 'slide_left2 2s ease-out 1',
        'slide_right2': 'slide_right2 2s ease-out 1',
        'fadeIn': "fadeIn 1s ease-in-out forwards",
        'fadeOut': "fadeOut 1s ease-in-out forwards",
      },

    },
  },
  plugins: [Myclass],
}

