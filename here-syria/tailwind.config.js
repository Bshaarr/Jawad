/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b1a16',
        surface: '#102821',
        surface2: '#102821',
        text: '#e8f3ee',
        muted: '#b7d5ca',
        primary: '#12a777',
        accent: '#c2a35b',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,.35)',
        cardHover: '0 20px 50px rgba(0,0,0,.5)',
      },
      fontFamily: {
        arabic: ['Tajawal','Cairo','ui-sans-serif','system-ui','sans-serif'],
      },
    },
  },
  plugins: [],
}
