/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "sans-serif"],
      mono: ["Martian Mono Variable", "monospace"],
    },
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
    spacing: {
      0: "0",
      "025": "2px",
      "050": "4px",
      "075": "6px",
      100: "8px",
      150: "12px",
      200: "16px",
      250: "20px",
      300: "24px",
      400: "32px",
      500: "40px",
      600: "48px",
      800: "64px",
      1000: "80px",
    },
    rounded: {
      0: "0",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      full: "999px",
    },
    extend: {
      backgroundImage: {
        "text-gradient":
          "linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)",
        gradient: "linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)",
      },
      boxShadow: {
        primary:
          "0px 0px 0px 3px rgba(255, 255, 255, 1), 0px 0px 0px 5px rgba(56, 81, 89, 1)", // neutral-700
      },
    },
  },
  plugins: [],
};
