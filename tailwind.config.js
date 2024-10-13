/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#6d91d5",
        "weather-secondary": "#2d4d89",
      },
    },
    fontFamily: {
      Roboto: ["Roboto Mono, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};

