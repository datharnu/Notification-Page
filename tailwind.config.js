/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': { 'min': '310px', 'max': '1023px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'lg': { 'min': '1024px', 'max': '2560px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        vlgblue: "hsl(210, 60%, 98%)",
        lgblue1: "hsl(211, 68%, 94%)",
        lgblue2: "hsl(205, 33%, 90%)",
        gblue: "hsl(219, 14%, 63%)",
        dgblue: "hsl(219, 12%, 42%)",
        vdblue: "hsl(224, 21%, 14%)",
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)"
      }
    },
  },
  plugins: [],
}

