/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#57585f',
        'dark-red': '#b21212',
        'light-red': '#ff6041',
      },
      fontSize: {
        'clamp-6xl': 'clamp(2.25rem, 4vw, 3.75rem)'
      },
      fontFamily: {
        sans: ['"Poppins", sans-serif'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
