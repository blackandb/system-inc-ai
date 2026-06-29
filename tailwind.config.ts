import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#FFFFFF",

        border: "#1E1E1E",

        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#050505",
        },

        secondary: {
          DEFAULT: "#111111",
          foreground: "#FFFFFF",
        },

        muted: {
          DEFAULT: "#0F0F0F",
          foreground: "#A1A1AA",
        },

        accent: {
          DEFAULT: "#18181B",
          foreground: "#FFFFFF",
        },

        success: "#16A34A",
        warning: "#F59E0B",
        destructive: "#DC2626",

        card: "#0A0A0A",

        input: "#111111",

        ring: "#FFFFFF",
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif"
        ]
      },

      borderRadius: {
        lg: "16px",
        xl: "20px",
        "2xl": "28px"
      },

      boxShadow: {
        card: "0 10px 40px rgba(0,0,0,.35)",
      },

      maxWidth: {
        content: "1440px",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },

      transitionDuration: {
        400: "400ms",
      }
    },
  },

  plugins: [],
};

export default config;
