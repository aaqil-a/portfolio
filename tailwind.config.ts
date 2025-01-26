import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundAccent: "var(--background-accent)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        accentDarker: "var(--accent-darker)",
      },
      fontFamily: {
        kadwa: "var(--font-kadwa)",
        inter: "var(--font-inter)"
      },
      keyframes: {
        appear: {
          "0%": {
            translate: "0 0",
          },
          "80%": {
            translate: "-150% 0",
          },
        },
        leave: {
           "0%": {
            translate: "0% 0",
          },
          "80%": {
            translate: "-150% 0",
          }, 
        }
      },
      animation: {
        appear: "appear 1s",
        leave: "leave 1s"
      }
    },
  },
  plugins: [],
} satisfies Config;
