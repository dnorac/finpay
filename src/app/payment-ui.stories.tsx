import type { Meta, StoryObj } from "@storybook/react";

import PaymentUI from "./payment-ui";

const meta: Meta<typeof PaymentUI> = {
  component: PaymentUI,
};

export default meta;
type Story = StoryObj<typeof PaymentUI>;

export const Primary: Story = {
  args: {},
};
