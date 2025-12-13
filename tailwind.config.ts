import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          50: "color-mix(in srgb, var(--primary) 5%, white)",
          100: "color-mix(in srgb, var(--primary) 10%, white)",
          200: "color-mix(in srgb, var(--primary) 20%, white)",
          300: "color-mix(in srgb, var(--primary) 30%, white)",
          400: "color-mix(in srgb, var(--primary) 40%, white)",
          500: "var(--primary)",
          600: "color-mix(in srgb, var(--primary) 90%, black)",
          700: "color-mix(in srgb, var(--primary) 80%, black)",
          800: "color-mix(in srgb, var(--primary) 70%, black)",
          900: "color-mix(in srgb, var(--primary) 60%, black)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
        },
        background: "#ffffff",
        foreground: "#1a1a1a",
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#737373",
        },
        border: "#e5e5e5",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s infinite",
        "gradient": "gradient-rotate 3s linear infinite",
        "wave": "wave 8s ease-in-out infinite",
        "ripple": "ripple 1.5s ease-out infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        "scale-in": "scaleIn 0.3s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(8, 145, 178, 0.5), 0 0 10px rgba(8, 145, 178, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(8, 145, 178, 0.8), 0 0 30px rgba(8, 145, 178, 0.4)" },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(8, 145, 178, 0.4)',
        'glow-lg': '0 0 40px rgba(8, 145, 178, 0.5)',
        'glow-accent': '0 0 20px rgba(245, 158, 11, 0.4)',
        'premium': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.03)',
        'premium-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'inner-glow': 'inset 0 0 20px rgba(8, 145, 178, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
      },
    },
  },
  plugins: [],
};

export default config;
