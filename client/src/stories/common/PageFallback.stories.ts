import { Meta, StoryObj } from "@storybook/react";
import { PageFallback } from "@components/common";

const meta: Meta<typeof PageFallback> = {
  title: "common/PageFallback",
  component: PageFallback,
};

export default meta;

type Story = StoryObj<typeof PageFallback>;

export const Basic: Story = {
  args: {},
};
