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
        residencial2: 'url(/About/Residencial2.svg)',
        comercial: 'url(/About/Comercial.svg)',
        comercial2: 'url(/About/Comercial2.svg)',
        rural: 'url(/About/Rural.svg)',
        rural2: 'url(/About/Rural2.svg)',
        'linear-gradient-button':
          'linear-gradient(124deg, #0496FF 0%, #0076CB 100%)',
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
        input: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        button: '0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
