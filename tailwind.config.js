// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: () => ({
        home: "url('/assets/bg-home.jpg')",
        section: "url('/assets/bg-content.jpg')",
      }),
      fontFamily: {
        sans: ['var(--font-dancing-script)', ...fontFamily.sans],
        serif: ['var(--font-crimson-pro)', ...fontFamily.serif],
      },
      animation: {
        bounceSlow: 'bounceSlow 5s infinite',
      },
      keyframes: {
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(-3%)',
            animationTimingFunction: 'cubic-bezier(1, 1, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(1, 1, 1, 1)',
          }
        }
      }
    },
  },
  plugins: [],
}
