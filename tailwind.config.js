/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34d399",
          secondary: "#d1d5db",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#166534",
          warning: "#eab308",
          error: "#b91c1c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
