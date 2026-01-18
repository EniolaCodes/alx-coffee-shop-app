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
        deepPink: "EDD6C8",
      },
    },
  },
  plugins: [],
};
