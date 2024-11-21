import IconBank from "@/icons/bank.svg";
import IconShield from "@/icons/shield.svg";
import IconTransfers from "@/icons/transfers.svg";
import { css } from "../../styled-system/css";
import { Wrap } from "../../styled-system/jsx";

const Card = ({
  icon: Icon,
}: {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}) => (
  <div
    className={css({
      flex: "1 1 200px",
    })}
  >
    <span className={css({ ml: -1, display: "inline-block" })}>
      <Icon width="60px" height="60px" />
    </span>
    <h2 className={css({ fontSize: "2xl", fontWeight: "semibold", my: 2 })}>
      Free transfers
    </h2>
    <p
      className={css({
        color: "colorPalette.900/70",
      })}
    >
      Create a financial experience and automate repeat purchases by scheduling
      recurring payments.
    </p>
  </div>
);

export default function Banner() {
  return (
    <div
      className={css({
        mb: -20,
        p: {
          base: 12,
          sm: 24,
        },
        rounded: "2xl",
        shadow: "primary",
        bg: "white",
      })}
    >
      <div
        className={css({
          color: "colorPalette.500",
          textTransform: "uppercase",
        })}
      >
        Future Payment
      </div>
      <div
        className={css({
          mt: 4,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 8,
        })}
      >
        <h1
          className={css({
            color: "colorPalette.950",
            fontSize: {
              base: "4xl",
              sm: "5xl",
            },
            fontWeight: "semibold",
            lineHeight: "none",
            maxW: 520,
          })}
        >
          Experience that grows with your scale.
        </h1>
        <p
          className={css({
            maxW: 333,
            color: "colorPalette.950/50",
          })}
        >
          Design a financial operating system that works for your business and
          streamlined cash flow management
        </p>
      </div>
      <Wrap mt="20" gap="20">
        <Card icon={IconTransfers} />
        <Card icon={IconBank} />
        <Card icon={IconShield} />
      </Wrap>
    </div>
  );
}
