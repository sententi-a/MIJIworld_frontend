import { Meta, StoryObj } from "@storybook/react";
import { ErrorFallback } from "@components/common";

const meta: Meta<typeof ErrorFallback> = {
  title: "common/ErrorFallback",
  component: ErrorFallback,
};

export default meta;

type Story = StoryObj<typeof ErrorFallback>;

export const Basic: Story = {
  args: { error: {}, resetErrorBoundary: () => {} },
};
