import type { Meta, StoryObj } from "@storybook/react";

import StepSection from "./stepsection";

const meta: Meta<typeof StepSection> = {
  component: StepSection,
};

export default meta;
type Story = StoryObj<typeof StepSection>;

export const Primary: Story = {
  args: {},
};
