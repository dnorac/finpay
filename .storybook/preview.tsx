import type { Preview } from "@storybook/react";
import React from "react";

import "../src/app/index.css";
import font, { fontBold } from "../src/font";
import { cx } from "../styled-system/css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={cx(font.className, fontBold.variable)}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
