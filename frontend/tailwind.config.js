/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        primary: "#4C2365",
        "primary-hover": "#3A1A4F",
        "primary-light": "#F6EFFB",
        brandPurple: "#4C2365",
        brandAmethyst: "#7F5D99",
        "brandAmethyst-hover": "#6B4C85",
        "brandAmethyst-light": "#F2ECF7",
        brandLavender: "#9E7EB5",
        "brandLavender-hover": "#8C6BA4",
        "brandLavender-light": "#F7F2FA",
        brandLilac: "#C4A4DA",
        "brandLilac-light": "#FAF6FC",
        surface: "#FFFFFF",
        "surface-soft": "#FAF7FD",
        "surface-card": "#F7F2FA",
        dark: "#170E1E",
        "dark-soft": "#2C1E37",
        "dark-muted": "#52445E",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(220px, 1fr))",
      },
      boxShadow: {
        luxury: "0 12px 32px -10px rgba(76, 35, 101, 0.12)",
        "luxury-lg": "0 20px 44px -12px rgba(76, 35, 101, 0.22)",
        purple: "0 12px 32px -10px rgba(127, 93, 153, 0.28)",
        glow: "0 0 25px rgba(158, 126, 181, 0.35)",
        card: "0 4px 20px -2px rgba(76, 35, 101, 0.06), 0 2px 6px -1px rgba(76, 35, 101, 0.04)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "float 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
