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
        beigeBackground: "#F4F4EC", // 落ち着いたベージュ
        darkText: "#1A1A1A", // 濃いテキスト色
        accentYellow: "#FFD700", // 明るい黄色
        accentBlack: "#000000", // 深い黒
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // モダンでインパクトのあるフォント
      },
      borderRadius: {
        xl: "1.5rem", // 画像の丸みを再現
      },
    },
  },
  plugins: [],
} satisfies Config;
