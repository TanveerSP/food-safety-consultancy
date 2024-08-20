/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      carbanblack: "#1C1D20",
      transparent: "#ffffff00",
      'bluedianne-500': '#173b45',

      richblack: {
        5: "#F1F2FF",
        25: "#DBDDEA",
        50: "#C5C7D4",
        100: "#AFB2BF",
        200: "#999DAA",
        300: "#838894",
        400: "#6E727F",
        500: "#585D69",
        600: "#424854",
        700: "#2C333F",
        800: "#161D29",
        900: "#000814",
      },

      yellow: {
        5: "#FFF970",
        25: "#FFE83D",
        50: "#FFD60A",
        100: "#E7C009",
        200: "#CFAB08",
        300: "#B69507",
        400: "#9E8006",
        500: "#866A04",
        600: "#6E5503",
        700: "#553F02",
        800: "#3D2A01",
        900: "#251400",
      },

      //  we used in webpage
      bluedianne: {
        5: "#EFFCFC",
        100: "#d8f5f5",
        200: "#b5eaec",
        300: "#82d9de", // 10%
        400: "#47c0c9",
        500: "#2ca4ae",
        600: "#278593",
        700: "#266b78",
        800: "#275963",
        900: "#244b55",
        950: "#173b45", // this use for 60%
      },
      orange: {
        5: "#FFF4ED",
        100: "#FFE6D4",
        200: "#FFC9A8",
        300: "#FFA471",
        400: "#FF6728", // this use in figma for btn
        500: "#FE4D11",
        600: "#EF3307",
        700: "#C62108",
        800: "#9D1D0F",
        900: "#7E1B10",
        950: "#440906",
      },

      maincolor: {
        first: "#F8EDED",
        second: "#D2D3FF",
        third: "#E1ECE6",
        fourth: "#FDEEB3",
        fifth: "#B43F3F",
        sixsth: "#695C5C",
      },

      webcolor: {
        bgcolor: "#F0F7FF",
        primary: "#1F2B3E",
        secondry: "#DBE2EF",
      },

      btncolor: {
        1: "#2E49EC",
        2: "#455CE9",

      },
      wellread: {
        5: "#FCF6E6",
        100: "#FAECE9",
        200: "#F5D9D6",
        300: "#ECBAB5",
        400: "#E1928B",
        500: "#D26761",
        600: "#B43F3F", // are used
        700: "#9E3235",
        800: "#842D32",
        900: "#72292F",
        950: "#3F1215",
      },

      gradientBlue: {
        200: "#16bee0",
      },
      gradientGreen: {
        200: "#0be495",
      },
      red: {
        200: "#eb445a",
      },

      gradientGolden: {
        500: "#996709",
      },
    },
    extend: {
      backgroundImage: {
        'parallax': 'url("../src/assets/Images/Banner.webp")',
        'parallaxx': 'url("../src/assets/Images/About.jpg")',
        'parallaxcontact': 'url("../src/assets/Images/Contact.jpg")',
        'parallaxblog': 'url("../src/assets/Images/Blog.jpg")',
        // "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var (--tw-gradient-stops))",
      },
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [],
};
