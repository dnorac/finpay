import Link from "next/link";
import { css, cx } from "../../styled-system/css";
import { styled } from "../../styled-system/jsx";
import { container, hstack } from "../../styled-system/patterns";
import { button } from "./button";

const Logo = () => (
  <Link
    href="/"
    className={css({
      fontWeight: "semibold",
      fontSize: "3xl",
    })}
  >
    Finpay
  </Link>
);

const navlinks = hstack({
  gap: [6, 6, 6, 12],
  display: ["none", "none", "flex"],
});
const userlinks = hstack({ display: ["none", "none", "flex"] });

export default function Header() {
  return (
    <div
      className={css({
        bg: "colorPalette.50",
        position: "sticky",
        top: 0,
        zIndex: 1,
      })}
    >
      <div className={container()}>
        <header
          className={hstack({
            py: 4,
            justify: "space-between",
          })}
        >
          <div className={hstack({ gap: [12, 12, 12, 28] })}>
            <Logo />
            <nav className={navlinks}>
              <Link href="/products">Products</Link>
              <Link href="/customers">Customers</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/learn">Learn</Link>
            </nav>
          </div>
          <div className={userlinks}>
            <Link href="/login" className={button({ variant: "outline" })}>
              Login
            </Link>
            <Link href="/signup" className={button()}>
              Sign Up
            </Link>
          </div>
          <button
            className={cx(
              button({ variant: "outline" }),
              css({
                display: "grid",
                gap: 1,
                p: 2,
                rounded: 5,
                cursor: "pointer",
                md: {
                  display: "none",
                },
              })
            )}
          >
            <styled.div h="3px" w="24px" bg="currentColor" rounded="300px" />
            <styled.div h="3px" w="24px" bg="currentColor" rounded="300px" />
            <styled.div h="3px" w="24px" bg="currentColor" rounded="300px" />
          </button>
        </header>
      </div>
    </div>
  );
}
