/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'massive-blue': {
          900: '#040B25',
          800: '#081135',
          700: '#0D1A4F',
          600: '#102165',
          500: '#132777',
        },
        'massive-orange': {
          700: '#DB5000',
          600: '#F05800',
          500: '#FF5E00',
        },
        'massive-blood-orange': '#FF3401',
      },
      screens: {
        '3xl': '1920px',
      }
    },
  },
  plugins: [],
}
