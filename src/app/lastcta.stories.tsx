import type { Meta, StoryObj } from "@storybook/react";

import LastCTA from "./lastcta";

const meta: Meta<typeof LastCTA> = {
  component: LastCTA,
};

export default meta;
type Story = StoryObj<typeof LastCTA>;

export const Primary: Story = {
  args: {},
};
