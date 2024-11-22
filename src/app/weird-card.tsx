import { css } from "../../styled-system/css";

export default function WeirdCard() {
  return (
    <div
      className={css({
        color: "white",
        maxW: 200,
        rounded: "3xl",
        shadow: "xl",
      })}
    >
      <div
        className={css({
          aspectRatio: "square",
          bg: "colorPalette.600",
          p: 6,
          roundedTop: "3xl",
        })}
      >
        <span
          className={css({
            fontWeight: "lighter",
            fontSize: "sm",
          })}
        >
          Credit Card
        </span>
        <p
          className={css({
            fontSize: "xl",
          })}
        >
          1234 **** ****
        </p>
      </div>
      <div
        className={css({
          bg: "colorPalette.950",
          p: 6,
          roundedBottom: "3xl",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="56"
          viewBox="0 0 24 24"
          className={css({ my: -4 })}
        >
          <path
            fill="currentColor"
            d="m22.222 15.768l-.225-1.125h-2.514l-.4 1.117l-2.015.004q1.943-4.669 2.884-6.917c.164-.392.455-.592.884-.589q.492.004 1.606.001L24 15.765zm-2.174-2.666h1.621l-.605-2.82zM7.062 8.257l2.026.002l-3.132 7.51l-2.051-.002a951 951 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804Q1.187 8.832 0 8.466v-.207h3.237c.56 0 .887.271.992.827q.159.836.8 4.254zm4.81.002l-1.601 7.509l-1.929-.003L9.94 8.257zm3.91-.139c.577 0 1.304.18 1.722.346l-.338 1.556c-.378-.152-1-.357-1.523-.35c-.76.013-1.23.332-1.23.638c0 .498.816.749 1.656 1.293c.958.62 1.085 1.177 1.073 1.783c-.013 1.255-1.073 2.494-3.309 2.494c-1.02-.015-1.388-.1-2.22-.396l.352-1.624c.847.354 1.206.467 1.93.467c.663 0 1.232-.268 1.237-.735c.004-.332-.2-.497-.944-.907s-1.788-.979-1.774-2.122c.017-1.462 1.402-2.443 3.368-2.443"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M17.46 21c1.32-2.76 2.04-5.76 2.04-9s-.72-6.36-2.04-9m-4.32 15.96C14.1 16.8 14.7 14.4 14.7 12s-.6-4.92-1.56-7.08m-4.32 12C9.54 15.36 9.9 13.68 9.9 12s-.36-3.48-1.08-4.92M4.5 14.76c.36-.84.6-1.8.6-2.76s-.24-2.04-.6-2.88"
          />
        </svg>
      </div>
    </div>
  );
}
