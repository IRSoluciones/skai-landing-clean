import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "rgb(27, 20, 100)", // Azul Solverkey
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "rgb(219, 73, 94)", // Coral Solverkey
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(219,73,94,0.0)" },
          "50%": { boxShadow: "0 0 40px rgba(27,20,100,0.35)" },
        },
        floaty: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" },
        },
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        shine: "shine 1.8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

