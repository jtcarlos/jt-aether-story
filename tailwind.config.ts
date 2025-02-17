import DefaultColors from "tailwindcss/colors"
import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      ...DefaultColors,
      primary: {
        DEFAULT: "#2B50AA",
      },
      secondary: {
        DEFAULT: "#DE7E4B",
      },
      text: {
        DEFAULT: "#092539",
        light: "#4D4D4D",
      },
      lightGray: {
        DEFAULT: "#FAFAFA",
      },
    },
  },
  plugins: [],
} satisfies Config
