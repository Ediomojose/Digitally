/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        interBlack: ["inter-black", "sans-serif"],
        interBold: ["inter-bold", "sans-serif"],
        interExtraBold: ["inter-extrabold", "sans-serif"],
        interExtraLight: ["inter-extralight", "sans-serif"],
        interLight: ["inter-light", "sans-serif"],
        interMedium: ["inter-medium", "sans-serif"],
        interRegular: ["inter-regular", "sans-serif"],
        interSemiBold: ["inter-semibold", "sans-serif"],
        interThin: ["inter-thin", "sans-serif"],
      },
      colors: {
        "natural-orchid": "#B65AB6",
        'natural-light-orchid':'#F2E5F2',
        "natural-lemon": "#8EC641",
        "natural-light-lemon": "#8EC64133",
        "natural-light-orange":"#E4DE5C33",
        "natural-soft-cheddar": "#E4DE5C",
        "natural-dark-purple": "#200020",
        "natural-light-purple":"#B65AB633",
        "natural-white": "#FFFFFF",
        "natural-grey":"#DDDDDD",
        "natural-light-grey":"#F3F3F3",
      },
    },
  },
  plugins: [],
};
