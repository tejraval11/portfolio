/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#282C33',
        accent: '#a855f7',
        purple: '#c778dd',
        gray: '#abb2bf' // Keep this for the accent color
      },
      fontFamily: {
        firacode: ['"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}