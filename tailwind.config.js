/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,md,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,md,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // typography: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            'img': {
              display: 'block',
              float: 'none',
              // marginLeft: 'auto'
              // marginRight: 'auto'
              margin: 'auto',
              width: 'auto',
              height: 'auto',
              // maxWidth: '50%', // makes images responsive by default
              // maxHeight: 'auto', // allows images to maintain their aspect ratio
              maxWidth: '80%',
              maxHeight: '80%',
            },
            // changes color of list numbers
            '--tw-prose-counters': theme('colors.gray[800]'),
            '--tw-prose-invert-counters': theme('colors.gray[200]'),
            // changes color of list bullets
            '--tw-prose-bullets': theme('colors.gray[600]'),
            '--tw-prose-invert-bullets': theme('colors.gray[300]'),
            // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
            "code::before": {content: ''},
            "code::after": {content: ''},
          },
        },
      }),
      fontFamily: { 
        rubik: ['Rubik', 'sans-serif']
      },
      // colors: { 
      //   'calypso': { '50': '#edfdfe', '100': '#d2f8fb', '200': '#abeff6', '300': '#71e2ef', '400': '#31cbdf', '500': '#15afc5', '600': '#148ca6', '700': '#18748b', '800': '#1c5b6e', '900': '#1b4d5e', '950': '#0c3240' },
      // },
    }
  },
  plugins: [ require('@tailwindcss/typography') ]
}