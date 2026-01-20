/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        coffee: "#C67C4E",
        black: "#313131",
        grey: "#E3E3E3",
        lightPink: "#F9F2ED",
        deepPink: "#EDD6C8",
        foundationWhite: "#FFFFFF",
        foundationGrey: "#A2A2A2",
        foundationBlack: "#242424",
        foundationSurface: "#E3E3E3",
        foundationSurfaceNormal: "#D8D8D8",
        shadowColor: "#050505",
        starColor: "#FBBE21",
      },
    },
  },
  plugins: [],
};
