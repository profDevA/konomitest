module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        "main-bg": "#221334",
      },
      backgroundImage: {
        card: "url('assets/images/card.png')",
        "card-active": "url('assets/images/card-active.png')",
      },
      fontFamily: {
        "ubuntu": "Ubuntu"
      }
    },
  },
  plugins: [],
};
