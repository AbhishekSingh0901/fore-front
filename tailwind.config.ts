import type { Config } from "tailwindcss";

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
        cadetblue: "#a4b3c7",
        burntumber: "#8b243c",
        orientalpink: "#c3949c",
        coraltree: "#a76476",
        amethystsmoke: "#9484a4",
        cannonpink: "#9a4a60",
        cadillac: "#a44c64",
        vinrouge: "#943c54",
        puce: "#cc8c9c",
      },
      fontFamily: {
        polySans: "var(--font-poly), sans-serif",
      },
    },
  },
  plugins: [],
} satisfies Config;
