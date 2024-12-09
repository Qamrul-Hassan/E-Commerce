/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Ensure your main HTML file is included
    './src/**/*.{js,ts,jsx,tsx}', // Includes JS, TS, JSX, and TSX files inside the src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [], // You can add plugins here if required
};
