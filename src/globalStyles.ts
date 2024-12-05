import { defineGlobalStyles } from "@pandacss/dev";

export const globalStyles = defineGlobalStyles({
  "::selection": {
    backgroundColor: "colorPalette.300",
    color: "colorPalette.950",
  },
  "html, body": {
    colorPalette: "cyan",
    color: "colorPalette.950",
    pb: 4,
  },
  "a, button": {
    _active: {
      opacity: 0.7,
    },
  },
});
