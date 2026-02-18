import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // Theme-aware palette (blue/cyan in light, purple/indigo in dark)
        tt: {
          blue: {
            DEFAULT: "hsl(var(--tt-blue-400) / <alpha-value>)",
            50: "hsl(var(--tt-blue-50) / <alpha-value>)",
            100: "hsl(var(--tt-blue-100) / <alpha-value>)",
            200: "hsl(var(--tt-blue-200) / <alpha-value>)",
            300: "hsl(var(--tt-blue-300) / <alpha-value>)",
            400: "hsl(var(--tt-blue-400) / <alpha-value>)",
            500: "hsl(var(--tt-blue-500) / <alpha-value>)",
            600: "hsl(var(--tt-blue-600) / <alpha-value>)",
            700: "hsl(var(--tt-blue-700) / <alpha-value>)",
            800: "hsl(var(--tt-blue-800) / <alpha-value>)",
            900: "hsl(var(--tt-blue-900) / <alpha-value>)",
          },
          cyan: {
            DEFAULT: "hsl(var(--tt-cyan-500) / <alpha-value>)",
            50: "hsl(var(--tt-cyan-50) / <alpha-value>)",
            100: "hsl(var(--tt-cyan-100) / <alpha-value>)",
            200: "hsl(var(--tt-cyan-200) / <alpha-value>)",
            300: "hsl(var(--tt-cyan-300) / <alpha-value>)",
            400: "hsl(var(--tt-cyan-400) / <alpha-value>)",
            500: "hsl(var(--tt-cyan-500) / <alpha-value>)",
            600: "hsl(var(--tt-cyan-600) / <alpha-value>)",
            700: "hsl(var(--tt-cyan-700) / <alpha-value>)",
            800: "hsl(var(--tt-cyan-800) / <alpha-value>)",
            900: "hsl(var(--tt-cyan-900) / <alpha-value>)",
          },
          sky: "hsl(var(--tt-sky) / <alpha-value>)",
          deep: "hsl(var(--tt-deep) / <alpha-value>)",
          navy: "hsl(var(--tt-navy) / <alpha-value>)",
          dark: "hsl(var(--tt-dark) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--tt-blue-500) / 0.2)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--tt-blue-500) / 0.4)" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
