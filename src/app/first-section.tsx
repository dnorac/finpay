import { css } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";
import FirstCTA from "./first-cta";
import PaymentUI from "./payment-ui";
import WeirdCard from "./weird-card";

export default function FirstSection() {
  return (
    <div className={wrapper}>
      {/*  */}
      <FirstCTA />
      <div
        className={css({
          position: "relative",
          flex: "0 0 auto",
          w: "100%",
          maxW: 400,
          display: ["none", "block"],
          transformStyle: "preserve-3d",
          transition: "transform .3s",
          _hover: {
            transform: "rotateY(-25deg)",
          },
        })}
      >
        <PaymentUI />
        <div
          className={css({
            position: "absolute",
            top: "-5%",
            right: "-20px",
            transition: "transform .3s",
            transform: "translateZ(40px) translateX(-20px) scale(0.9)",
          })}
        >
          <WeirdCard />
        </div>
      </div>
      {/*  */}
    </div>
  );
}

const wrapper = container({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  rowGap: 8,
  py: 14,
  perspective: "800px",
});
