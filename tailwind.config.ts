import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--void)",
        "void-2": "var(--void-2)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        ink: "var(--text)",
        "ink-soft": "var(--text-soft)",
        "ink-faint": "var(--text-faint)",
        line: "var(--line)",
        "line-bright": "var(--line-bright)",
        cyan: "var(--cyan)",
        "cyan-dim": "var(--cyan-dim)",
        magenta: "var(--magenta)",
        lime: "var(--lime)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
