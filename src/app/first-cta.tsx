import IconCoinbase from "@/icons/coinbase.svg";
import IconInstacart from "@/icons/instacart.svg";
import IconKlarna from "@/icons/klarna.svg";
import { css, cx } from "../../styled-system/css";
import { button } from "./button";

export default function FirstCTA() {
  return (
    <div className={wrapper}>
      {/*  */}
      <h1 className={heading}>
        <span>Get paid early</span> save automatically all you pay.
      </h1>
      <p className={description}>
        Supports small businesses with simple invoicing, powerful integrations,
        and cash flow management tools.
      </p>

      <form className={subscriptionForm}>
        <input
          type="text"
          placeholder="Your business e-mail"
          className={css({ minW: 0 })}
        />
        <button
          className={cx(
            button(),
            css({
              py: 0,
              px: 3,
            })
          )}
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 7h10v10M7 17L17 7"
            />
          </svg>
        </button>
      </form>
      {/*  */}
      <div
        className={css({
          display: "flex",
          gap: 12,
          alignItems: "center",
          my: -4,
        })}
      >
        <IconKlarna width="150px" height="24px" className={css({ mr: -4 })} />
        <IconCoinbase width="150px" height="140px" />{" "}
        <IconInstacart width="150px" height="30px" />
      </div>
    </div>
  );
}

const subscriptionForm = css({
  bg: "white",
  border: "1px solid",
  borderColor: "gray/20",
  rounded: "2xl",
  display: "flex",
  maxW: "lg",
  p: "2px",
  "& input": {
    p: 4,
    outline: "none",
    rounded: "2xl",
    flex: 1,
  },
});

const heading = css({
  fontSize: ["4xl", "7xl"],
  lineHeight: "tight",
  "& span": {
    fontWeight: "semibold",
  },
});

const description = css({
  fontSize: "lg",
  color: "colorPalette.950/60",
  maxW: "lg",
  textWrap: "balance",
  mt: 3,
  mb: 5,
});

const wrapper = css({
  maxW: "2xl",
  w: "100%",
});
