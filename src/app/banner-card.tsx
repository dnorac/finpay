import { css } from "../../styled-system/css";

const BannerCard = ({
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
    <h2 className={css({ fontSize: "2xl", fontWeight: "medium", my: 2 })}>
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

export default BannerCard;
