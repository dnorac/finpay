import font, { fontBold } from "@/font";
import type { Metadata } from "next";
import { cx } from "../../styled-system/css";
import Header from "./header";
import "./index.css";

export const metadata: Metadata = {
  title: "Finpay - Payment made easy",
  description: "Finpay is a payment gateway that makes payment easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cx(font.className, fontBold.variable)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
