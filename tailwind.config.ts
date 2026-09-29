import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Czysta, profesjonalna skandynawsko-szwajcarska paleta zaufania
        canvas: "#FFFFFF",
        surface: "#F8FAFC", // Subtelne tło sekcji (slate-50)
        surfacealt: "#F1F5F9", // slate-100
        ink: "#0F172A", // Głęboki granat/grafit tekstu (slate-900)
        coal: "#1E293B", // slate-800
        card: "#FFFFFF",
        cream: "#0F172A", // kompatybilność z istniejącymi klasami tekstu
        sand: "#334155", // slate-700
        muted: "#64748B", // slate-500
        border: "#E2E8F0", // slate-200
        // Szlachetne złoto architektoniczne (dyskretny akcent, nie kicz)
        gold: "#B88939",
        goldlight: "#D4A853",
        golddeep: "#8C651F",
        goldsoft: "#FDF8ED", // Ciepłe tło wyróżnień
        sage: "#059669", // Szmaragdowa zieleń bezpieczeństwa
        sagesoft: "#ECFDF5",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        clean: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card: "0 10px 30px -10px rgba(15, 23, 42, 0.08)",
        hover: "0 20px 35px -12px rgba(15, 23, 42, 0.12)",
        glow: "0 4px 20px -2px rgba(184, 137, 57, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
