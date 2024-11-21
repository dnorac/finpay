import { css } from "../../styled-system/css";

const wrapper = css({
  bg: "colorPalette.950",
  color: "colorPalette.500",
  px: [10, 28],
  py: [10, 20],
  rounded: "3xl",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: 8,
  //
  "& span": {
    textTransform: "uppercase",
    fontSize: "sm",
    fontWeight: "medium",
    color: "colorPalette.600",
  },
  //
  "& h2": {
    fontSize: ["3xl", "5xl"],
    color: "white",
    lineHeight: "none",
    mt: 4,
    mb: 8,
  },
  //
  "& p": {
    color: "white/50",
  },
  //
  "& .left": {
    maxWidth: 480,
  },
  //
  "& a": {
    color: "white",
    px: 8,
    py: 5,
    rounded: "2xl",
    border: "1px solid",
    borderColor: "colorPalette.800",
    fontWeight: "medium",
    transition: "background 0.3s, border-color 0.3s",
    display: "inline-block",
    textAlign: "center",
    _hover: {
      borderColor: "colorPalette.600",
    },
    //
    "&.primary": {
      bg: "colorPalette.600",
      color: "white",
      borderColor: "colorPalette.600",
      _hover: {
        bg: "colorPalette.800",
      },
    },
  },
  "& .links": {
    flex: "1 1 fit-content",
    alignSelf: "center",
    minW: "fit",
    maxW: "max",
    display: "flex",
    flexDirection: "column",
    "@media (width > 470px)": {
      flexDirection: "row",
    },
    gap: 4,
  },
});

export default function LastCTA() {
  return (
    <div className={wrapper}>
      {/*  */}
      <div className="left">
        <span>Try it now</span>
        <h2>Ready to level up your payment process?</h2>
        <p>
          Supports small businesses with simple invoicing, powerful
          integrations, and cash flow management tools.
        </p>
      </div>
      <div className="links">
        <a href="/signup" className="primary">
          Get Started Now
        </a>
        <a href="/products">Learn More</a>
      </div>
      {/*  */}
    </div>
  );
}
