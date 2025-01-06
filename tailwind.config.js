/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      neutral: {
        0: "#ffffff",
        100: "#FAF5F3",
        200: "#E6E1DF",
        700: "#385159",
        900: "#062630",
      },
      "light-salmon": {
        50: "#FFF5EF",
        100: "#FFF5EF",
        500: "#FEA36F",
      },
    },
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
        gradient: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      },
    },
  },
  plugins: [],
};
