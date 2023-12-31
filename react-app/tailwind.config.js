/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: false,
    darkTheme: "light",
    utils: true,
    prefix: "d-",
    logs: true,
    themeRoot: ":root",
  },
};
