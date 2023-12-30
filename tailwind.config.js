/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,md,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,md,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        rubik: ['Rubik', 'sans-serif']
      },
      // colors: { 
      //   'calypso': { '50': '#edfdfe', '100': '#d2f8fb', '200': '#abeff6', '300': '#71e2ef', '400': '#31cbdf', '500': '#15afc5', '600': '#148ca6', '700': '#18748b', '800': '#1c5b6e', '900': '#1b4d5e', '950': '#0c3240' },
      // },
    }
  },
  plugins: []
}