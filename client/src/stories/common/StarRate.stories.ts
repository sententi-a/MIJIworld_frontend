import { Meta, StoryObj } from "@storybook/react";
import { StarRate } from "@components/common";

const meta: Meta<typeof StarRate> = {
  title: "components/common/StarRate",
  component: StarRate,
};

export default meta;
type Story = StoryObj<typeof StarRate>;

export const Empty: Story = {
  args: { rate: 0 },
};

export const Full: Story = {
  args: { rate: 5 },
};
