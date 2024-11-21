import { container } from "../../styled-system/patterns";
import Banner from "./banner";
import LastCTA from "./lastcta";

export default function Home() {
  return (
    <div
      className={container({
        roundedBottom: "100px",
        bg: "colorPalette.50",
        "& > * + *": {
          mt: 8,
        },
      })}
    >
      <Banner />
      <LastCTA />
    </div>
  );
}
