import type { Meta, StoryObj } from "@storybook/react";

import FirstCTA from "./first-cta";

const meta: Meta<typeof FirstCTA> = {
  component: FirstCTA,
};

export default meta;
type Story = StoryObj<typeof FirstCTA>;

export const Primary: Story = {
  args: {},
};
