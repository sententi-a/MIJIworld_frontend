import { Meta, StoryObj } from "@storybook/react";
import { ErrorFallback } from "@components/common";

const meta: Meta<typeof ErrorFallback> = {
  title: "components/common/ErrorFallback",
  component: ErrorFallback,
};

export default meta;

type Story = StoryObj<typeof ErrorFallback>;

export const Error_Fallback: Story = {
  args: { error: {}, resetErrorBoundary: () => {} },
};
