import { css } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";
import Banner from "./banner";
import LastCTA from "./lastcta";
import StepSection from "./stepsection";

export default function Home() {
  return (
    <div
      className={css({
        "& > * + *": {
          mt: 8,
        },
      })}
    >
      <div
        className={css({
          bg: "colorPalette.50",
          roundedBottom: "100px",
        })}
      >
        <div className={container()}>
          <Banner />
        </div>
      </div>
      <StepSection />
      <div className={container()}>
        <LastCTA />
      </div>
    </div>
  );
}
