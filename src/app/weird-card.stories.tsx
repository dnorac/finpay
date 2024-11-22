import type { Meta, StoryObj } from "@storybook/react";

import WeirdCard from "./weird-card";

const meta: Meta<typeof WeirdCard> = {
  component: WeirdCard,
};

export default meta;
type Story = StoryObj<typeof WeirdCard>;

export const Primary: Story = {
  args: {},
};
