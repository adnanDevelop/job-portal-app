/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1f2937",
        green: "#059669",
        slate: "#94A3B8",
        ouline: "#1F2937FF",
        color: "#94a3b857",
      },
      boxShadow: {
        "custom-light": "0px 0.5px 10px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1500px",
        "3xl": "1620px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#130185",
          "sky-blue": "#587DBD",
          "light-blue": "#1F73B7",
          purple: "#110C31",
          "light-black": "#2F3941",
          "dark-gray": "#68737D",
          "gray-300": "#CFCFCF",
          "gray-500": "#A0A4A8",
          "gray-700": "#535151",
          "warning-red": "#C03221",
        },
      },
    ],
  },
};
