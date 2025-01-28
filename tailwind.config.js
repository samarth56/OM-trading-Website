/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Adjust this path to match your project structure
    "./Public/**/*.html",
    "./components/**/*.{html,js}"
  ], // Correct paths
  theme: {
    extend: {},
  },
  plugins: [],
};
