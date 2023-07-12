import { Meta, StoryObj } from "@storybook/react";
import { PageFallback } from "@components/common";

const meta: Meta<typeof PageFallback> = {
  title: "components/common/PageFallback",
  component: PageFallback,
};

export default meta;

type Story = StoryObj<typeof PageFallback>;

export const Page_Fallback: Story = {
  args: {},
};
