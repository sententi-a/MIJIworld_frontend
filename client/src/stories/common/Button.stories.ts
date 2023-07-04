import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components/common";

const meta: Meta<typeof Button> = {
  title: "components/common/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: { label: "버튼", size: "small" },
};

export const Medium: Story = {
  args: { label: "버튼", size: "medium" },
};

export const Large: Story = {
  args: { label: "버튼", size: "large" },
};

export const Disabled: Story = {
  args: { label: "버튼", clicked: true },
};

export const Vertical: Story = {
  args: { label: "버튼", isVertical: true },
};
