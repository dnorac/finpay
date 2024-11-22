import type { Meta, StoryObj } from "@storybook/react";

import FirstSection from "./first-section";

const meta: Meta<typeof FirstSection> = {
  component: FirstSection,
};

export default meta;
type Story = StoryObj<typeof FirstSection>;

export const Primary: Story = {
  args: {},
};
