/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      oswald: ["Oswald"],
      "roboto-mono": ["Roboto Mono"],
      syne: ["Syne"],
    },
    extend: {},
  },
  plugins: [],
};
