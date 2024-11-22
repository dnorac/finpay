import { cva } from "../../styled-system/css";

export const button = cva({
  base: {
    px: 8,
    py: 3,
    rounded: "xl",
    border: "1px solid transparent",
    fontWeight: "medium",
    transition: "background 0.3s, border-color 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    cursor: "pointer",
  },
  variants: {
    variant: {
      primary: {
        bg: {
          base: "colorPalette.700",
          _hover: "colorPalette.800",
        },
        color: "white",
      },
      outline: {
        bg: "transparent",
        borderColor: {
          base: "colorPalette.700/20",
          _hover: "colorPalette.700/40",
        },
        color: "colorPalette.700",
      },
    },
  },
  defaultVariants: { variant: "primary" },
});
