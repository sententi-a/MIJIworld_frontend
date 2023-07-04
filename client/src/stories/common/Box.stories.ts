import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@components/common";

const meta: Meta<typeof Box> = {
  title: "components/common/Box",
  component: Box,
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Weak: Story = {
  args: { shadowIntensity: "weak", style: { height: "50vh" } },
};

export const Modest = {
  args: { shadowIntensity: "modest", style: { height: "50vh" } },
};

export const Strong = {
  args: { shadowIntensity: "strong", style: { height: "50vh" } },
};
