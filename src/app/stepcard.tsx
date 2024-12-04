"use client";

import { motion } from "motion/react";
import { css } from "../../styled-system/css";

const variants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 10,
    transition: { delay: index * 1, duration: 0.5 },
  }),
};

const Card = ({ step }: { step: number }) => (
  <div
    className={css({
      p: 8,
      rounded: "2xl",
      bg: "colorPalette.900/50",
      isolation: "isolate",
      "& h3": {
        fontSize: "xl",
      },
      "& p": {
        mt: 4,
        color: "white/50",
        fontSize: "sm",
      },
    })}
  >
    <motion.span
      aria-hidden="true"
      custom={step}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      className={css({
        display: "inline-block",
        // opacity: 0,
        fontSize: "8xl",
        lineHeight: 0.75,
        mb: 4,
        mt: -4,
        textGradient: "to-b",
        gradientFrom: "white/70",
        gradientTo: "transparent",
        zIndex: -1,
      })}
    >
      {step}
    </motion.span>
    <h3>Open your account</h3>
    <p>Sign up to Finpay and set up your account from the dashboard.</p>
  </div>
);

export default Card;
