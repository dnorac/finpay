import { bleed, container } from "../../styled-system/patterns";
import Banner from "./banner";
import LastCTA from "./lastcta";

const content = container({
  "& > * + *": {
    mt: 8,
  },
});

export default function Home() {
  return (
    <div className={content}>
      <div
        className={bleed({
          bg: "colorPalette.50",
          inline: 8,
          pb: 8,
          px: 8,
          mb: 20,
          roundedBottom: "100px",
        })}
      >
        <Banner />
      </div>
      <LastCTA />
    </div>
  );
}
