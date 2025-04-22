/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            50:  '#f2f8ff',
            100: '#d9e9ff',
            200: '#b6d1ff',
            300: '#8cb2ff',
            400: '#6092ff',
            500: '#3b7aff',
            600: '#2f62e6',
            700: '#254db4',
            800: '#1b3a82',
            900: '#112851',
          }
        }
      },
    },
    plugins: [],
  };