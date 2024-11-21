import { css } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";
import Banner from "./banner";
import LastCTA from "./lastcta";

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
        className={container({
          roundedBottom: "100px",
          bg: "colorPalette.50",
        })}
      >
        <Banner />
      </div>
      <div className={container()}>
        <LastCTA />
      </div>
    </div>
  );
}
