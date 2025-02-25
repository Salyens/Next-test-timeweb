import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#3b3b3b",
        secondary: "#745246",
        "secondary-hover": "rgb(135, 95, 82)",
        footer: "#292929",
        "footer-border": "#41474e",
        "footer-text": "#a7a7a7",
        "footer-icon": "#f0f0f0",
        "second-gray": "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
