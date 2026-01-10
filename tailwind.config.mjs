/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "jet-black": "#242424",
        "cloud-dancer": "#F0EEE9",
        "dark-magenta": "#8B008B",
        magenta: "#FF00FF",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        engineering: {
          primary: "#8B008B", // Dark Magenta
          secondary: "#FF00FF", // Magenta
          accent: "#FF00FF",
          neutral: "#242424", // Jet Black
          "base-100": "#242424", // Jet Black background
          "base-200": "#1a1a1a",
          "base-300": "#0f0f0f",
          "base-content": "#F0EEE9", // Cloud Dancer text
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        photography: {
          primary: "#8B008B",
          secondary: "#FF00FF",
          accent: "#8B008B",
          neutral: "#F0EEE9", // Cloud Dancer
          "base-100": "#F0EEE9", // Cloud Dancer background
          "base-200": "#e5e3de",
          "base-300": "#dad8d3",
          "base-content": "#242424", // Jet Black text
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
