import { globalStyles } from "@/globalStyles";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  globalCss: globalStyles,

  // Whether to use css reset
  preflight: true,
  jsxFramework: "react",

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        shadows: {
          primary: {
            value:
              "0 20px 25px -5px rgb(0 155 190 / 0.1), 0 8px 10px -6px rgb(0 155 190 / 0.1)",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
