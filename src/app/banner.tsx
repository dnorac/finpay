import IconBank from "@/icons/bank.svg";
import IconShield from "@/icons/shield.svg";
import IconTransfers from "@/icons/transfers.svg";
import { css } from "../../styled-system/css";
import { Wrap } from "../../styled-system/jsx";
import BannerCard from "./banner-card";

export default function Banner() {
  return (
    <div
      className={css({
        p: {
          base: 8,
          sm: 24,
        },
        rounded: "2xl",
        shadow: "primary",
        bg: "white",
      })}
    >
      <div
        className={css({
          color: "colorPalette.600",
          textTransform: "uppercase",
          fontSize: "sm",
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
            flex: "1 1 100%",
            fontSize: {
              base: "4xl",
              sm: "5xl",
            },
            lineHeight: "none",
            maxW: 520,
            textWrap: "pretty",
          })}
        >
          Experience that grows with your scale.
        </h1>
        <p
          className={css({
            flex: "1 1 300px",
            maxW: 400,
            minW: [0, 300],
            color: "colorPalette.950/50",
            fontSize: "lg",
            mt: 2,
            textWrap: "pretty",
          })}
        >
          Design a financial operating system that works for your business and
          streamlined cash flow management
        </p>
      </div>
      <Wrap mt="20" gap="20">
        <BannerCard icon={IconTransfers} />
        <BannerCard icon={IconBank} />
        <BannerCard icon={IconShield} />
      </Wrap>
    </div>
  );
}
