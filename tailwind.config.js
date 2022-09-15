const { readBuilderProgram } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        shadow01: '0 2px 5px 2px rgba(0, 0, 0, 0.7)',
        shadow02: '3px 10px 15px -3px rgba(0, 0, 255, 0.1)',
      },
    },
    colors: {
      header_bg: 'rgba(213, 243, 246, 0.4)',
      blue_bg: 'rgba(0, 102, 255, 0.2)',
      black_bg: 'rgba(0, 0, 0, 0.5)',
      green_bg: 'rgba(102, 255, 102, 0.7)',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
