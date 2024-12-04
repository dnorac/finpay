import { css } from "../../styled-system/css";
import { Grid } from "../../styled-system/jsx";
import { container } from "../../styled-system/patterns";
import Card from "./stepcard";

export default function StepSection() {
  return (
    <section
      className={css({
        p: [8, 16, 16, 24],
        bg: "colorPalette.950",
        color: "white",
        "& h2": {
          fontSize: ["3xl", "5xl"],
          lineHeight: "none",
          mt: 4,
          mb: 8,
        },
        "& .sub": {
          textTransform: "uppercase",
          fontSize: "sm",
          fontWeight: "medium",
          color: "colorPalette.600",
        },
      })}
    >
      <div className={container()}>
        <span className="sub">Step</span>
        <h2>Maximize your returns with a Reserve account that generates.</h2>
        <Grid columns={[1, 2, 3]} gap={8} mt={16}>
          <Card step={1} />
          <Card step={2} />
          <Card step={3} />
        </Grid>
      </div>
    </section>
  );
}
