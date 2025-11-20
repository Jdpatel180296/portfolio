import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "0", // Removed padding to extend to sides
      screens: {
        "2xl": "100%", // Make container full width
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
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
        header: "#4D4D4D", // Main color (dark gray)
        skills: "#E4AF76", // Secondary background color (peachy/light orange)
        section1: "#e8d3bd", // White background for first alternating section
        section2: "#9f805e", // Light orange for second alternating section
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" }, // Enhanced fade-in
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(-30px)" }, // Enhanced slide from left
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(30px)" }, // Enhanced slide from right
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.92)", opacity: "0" }, // Enhanced scale
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "float-image": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2.8rem)" }, // Enhanced floating movement
          "100%": { transform: "translateY(0)" },
        },
        "smooth-page-transition": {
          // New animation for page transitions
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.7s ease-out", // Slowed down for smoother effect
        "fade-in-right": "fade-in-right 0.7s ease-out",
        "fade-in-left": "fade-in-left 0.7s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "float-image": "float-image 4s ease-in-out infinite",
        "smooth-page-transition":
          "smooth-page-transition 0.9s cubic-bezier(0.22, 1, 0.36, 1)", // Custom timing function
        blob: "blob 7s infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      animationDelay: {
        "0": "0s",
        "2000": "2s",
        "4000": "4s",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
