import font, { fontBold } from "@/font";
import type { Metadata } from "next";
import Link from "next/link";
import { css, cva, cx } from "../../styled-system/css";
import { container, hstack } from "../../styled-system/patterns";
import "./index.css";

export const metadata: Metadata = {
  title: "Finpay - Payment made easy",
  description: "Finpay is a payment gateway that makes payment easy.",
};

const button = cva({
  base: {
    px: 8,
    py: 3,
    rounded: "xl",
    border: "1px solid transparent",
    fontWeight: "medium",
    transition: "background 0.3s, border-color 0.3s",
  },
  variants: {
    variant: {
      primary: {
        bg: {
          base: "colorPalette.700",
          _hover: "colorPalette.800",
        },
        color: "white",
      },
      outline: {
        bg: "transparent",
        borderColor: {
          base: "colorPalette.700/20",
          _hover: "colorPalette.700/40",
        },
        color: "colorPalette.700",
      },
    },
  },
  defaultVariants: { variant: "primary" },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cx(font.className, fontBold.variable)}>
        <div
          className={container({
            bg: "colorPalette.50",
            position: "sticky",
            top: 0,
            zIndex: 1,
          })}
        >
          <header
            className={hstack({
              py: 4,
              justify: "space-between",
            })}
          >
            <div className={hstack({ gap: 28 })}>
              <Link
                href="/"
                className={css({
                  fontWeight: "bold",
                })}
              >
                Finpay
              </Link>
              <nav className={hstack({ gap: 12 })}>
                <Link href="/products">Products</Link>
                <Link href="/customers">Customers</Link>
                <Link href="/pricing">Pricing</Link>
                <Link href="/learn">Learn</Link>
              </nav>
            </div>
            <div className={hstack()}>
              <Link href="/login" className={button({ variant: "outline" })}>
                Login
              </Link>
              <Link href="/signup" className={button()}>
                Sign Up
              </Link>
            </div>
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}
