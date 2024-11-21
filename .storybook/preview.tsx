import type { Preview } from "@storybook/react";
import React from "react";

import "../src/app/index.css";
import font from "../src/font";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={font.className}>
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
