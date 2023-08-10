/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        residencial: 'url(/About/Residencial.svg)',
        comercial: 'url(/About/Comercial.svg)',
        rural: 'url(/About/Rural.svg)',
      },
      gridTemplateRows: {
        tablet: '20rem_1fr',
      },
      colors: {
        black: '#19191B',
        blue: '#0496FF',
        white: '#FFFFFF',
        white70: '#FFFFFFB2',
        gray: '#5A657A',
        background: 'rgba(0, 0, 0, 0.44)',
      },
      boxShadow: {
        statistics: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
