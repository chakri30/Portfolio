import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Ice Pitch Pro Theme Colors
        "pitch-black": "hsl(var(--pitch-black))",
        "deep-charcoal": "hsl(var(--deep-charcoal))",
        "slate-gray": "hsl(var(--slate-gray))",
        "muted-blue": "hsl(var(--muted-blue))",
        "ice-white": "hsl(var(--ice-white))",
        "electric-cyan": "hsl(var(--electric-cyan))",
        "electric-glow": "hsl(var(--electric-glow))",
        "ice-blue": "hsl(var(--ice-blue))",
        "floodlight": "hsl(var(--floodlight))",
        "stadium-shadow": "hsl(var(--stadium-shadow))",
        "pitch-line": "hsl(var(--pitch-line))",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-stadium": "var(--gradient-stadium)",
        "gradient-ice": "var(--gradient-ice)",
        "gradient-glow": "var(--gradient-glow)",
        "gradient-pitch": "var(--gradient-pitch)",
      },
      boxShadow: {
        stadium: "var(--shadow-stadium)",
        glow: "var(--shadow-glow)",
        ice: "var(--shadow-ice)",
      },
      transitionTimingFunction: {
        "bounce-gentle": "var(--bounce-gentle)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
