/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    backgroundImage: {
      darkVioletGradient: "url('/bg-main-mobile.png')",
      darkVioletGradientlg: "url('/bg-main-desktop.png')",
    },

    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      firstGradient: "hsl(249, 99%, 64%)",
      secondGradient: "hsl(278, 94%, 30%)",
      errorColor: "hsl(0, 100%, 66%)",

      White: "hsl(0, 0%, 100%)",
      lightGrayish: "hsl(270, 3%, 87%)",
      darkGrayish: "hsl(279, 6%, 55%)",
      darkViolet: "hsl(278, 68%, 11%)",
    },

    fontSize: {
      default: "18px",
    },

    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
  },
  plugins: [],
};
