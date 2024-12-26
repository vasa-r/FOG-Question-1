/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        sidebar: "#0E0E0E",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#CFC5C5",
        basepPink: "#FF5656",
        borderRed: "#CA0000",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #4C0000 0%, #0A0A0A 100%), linear-gradient(90deg, rgba(0, 0, 0, 0) 73.01%, rgba(15, 15, 15, 0.6) 73.01%)",
        "custom-dark-gradient":
          "linear-gradient(180deg, #270909 0%, #0E0D0D 100%), linear-gradient(90deg, rgba(0, 0, 0, 0) 73.01%, rgba(15, 15, 15, 0.6) 73.01%)",
        "artist-bg-image": "url('./src/assets/artist-bg.png')",
      },
      boxShadow: {
        custom: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
