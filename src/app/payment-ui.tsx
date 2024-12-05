import IconDipa from "@/icons/dipa.svg";
import { css, cx } from "../../styled-system/css";
import { button } from "./button";

export default function PaymentUI() {
  return (
    <div className={wrapper}>
      {/*  */}
      <div
        className={css({
          display: "flex",
          gap: 3,
          alignItems: "center",
        })}
      >
        <IconDipa
          width="50px"
          height="50px"
          className={css({
            color: "colorPalette.700",
            translate: "auto",
            x: "-1",
          })}
        />
        <div>
          <h3
            className={css({
              fontWeight: "semibold",
            })}
          >
            Dipa Inhouse
          </h3>
          <p
            className={css({
              fontSize: "sm",
            })}
          >
            dipainhouse@gmail.com
          </p>
        </div>
      </div>

      {/* Invoice */}
      <div className={invoice}>
        <h4>Invoice</h4>
        <span className="price">$1,876,580</span>
        <span>April 21, 2024</span>
      </div>
      {/*  */}
      <label htmlFor="credit-card">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            d="M20 4H4c-1.103 0-2 .897-2 2v2h20V6c0-1.103-.897-2-2-2zM2 18c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-6H2v6zm3-3h6v2H5v-2z"
            fill="currentColor"
          />
        </svg>
        Credit Card
        <input type="radio" name="method" id="credit-card" checked readOnly />
      </label>
      <label htmlFor="bank-account">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462zM381 836H264V462h117zm189 0H453V462h117zm190 0H642V462h118z"
          />
        </svg>
        Bank Account
        <input type="radio" name="method" id="bank-account" />
      </label>

      <button
        className={cx(
          button(),
          css({
            transform: "translateZ(80px) translateY(-13px) translateX(-35px) scale(0.9)",
          })
        )}
      >
        Pay
      </button>
    </div>
  );
}

const wrapper = css({
  p: 8,
  rounded: "3xl",
  shadow: "primary",
  display: "grid",
  gap: 4,
  bg: "white",
  transformStyle: "preserve-3d",
  "& label": {
    display: "flex",
    gap: 2,
    alignItems: "center",
    p: 4,
    border: "1px solid",
    borderColor: "colorPalette.500/20",
    rounded: "xl",
    fontSize: "sm",
    cursor: "pointer",
    transition: "border-color 0.3s",
    "&:has(input:checked), &:hover": {
      borderColor: "colorPalette.600",
    },
    "& input": {
      ml: "auto",
    },
  },
});

const invoice = css({
  rounded: "xl",
  p: 4,
  border: "1px solid",
  borderColor: "colorPalette.500/20",
  color: "colorPalette.950/60",
  transformStyle: "preserve-3d",

  "& h4": {
    fontSize: "sm",
  },

  "& .price": {
    fontSize: "3xl",
    fontWeight: "bold",
    color: "colorPalette.950",
    transform: "translateZ(80px) translateX(-35px) translateY(5px) scale(0.9)",
  },

  "& span": {
    display: "block",
    fontSize: "sm",
  },
});
