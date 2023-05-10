/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-blue-image": "url('/bg-image.png')",
        "bg-order-image": "url('/main2.png')",
        "bg-order-mobile-image": "url('/mobile-order-bg.png')",
      },
      colors: {
        primary: "#FFF",
        gray: "#DDDEDD",
        darkGray: "#C7C9CA",
        green: "#B0CB32",
      },
      screens: {
        xs: "545px",
      },
    },
  },
  plugins: [],
};
