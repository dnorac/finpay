import { defineGlobalStyles } from "@pandacss/dev";

export const globalStyles = defineGlobalStyles({
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
