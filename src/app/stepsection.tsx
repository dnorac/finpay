import { css } from "../../styled-system/css";
import { Grid } from "../../styled-system/jsx";

const Card = () => (
  <div
    className={css({
      p: 8,
      rounded: "2xl",
      bg: "colorPalette.900/50",
      counterIncrement: "step",
      isolation: "isolate",
      "& h3": {
        fontSize: "xl",
      },
      "& p": {
        mt: 4,
        color: "white/50",
        fontSize: "sm",
      },
      _before: {
        content: "counter(step)",
        fontSize: "8xl",
        lineHeight: 0.75,
        display: "inline-block",
        mt: -4,
        mb: 4,
        transform: "translateY(20px)",
        textGradient: "to-b",
        gradientFrom: "white/70",
        gradientTo: "transparent",
        position: "relative",
        zIndex: -1,
      },
    })}
  >
    <h3>Open your account</h3>
    <p>Sign up to Finpay and set up your account from the dashboard.</p>
  </div>
);

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
        "& span": {
          textTransform: "uppercase",
          fontSize: "sm",
          fontWeight: "medium",
          color: "colorPalette.600",
        },
      })}
    >
      <span>Step</span>
      <h2>Maximize your returns with a Reserve account that generates.</h2>
      <Grid columns={[1, 2, 3]} gap={8} mt={16}>
        <Card />
        <Card />
        <Card />
      </Grid>
    </section>
  );
}
