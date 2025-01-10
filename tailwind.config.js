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
        'light-gray': '#57585f'
      },
      fontSize: {
        'clamp-6xl': 'clamp(36px, 4vw, 60px)'
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
