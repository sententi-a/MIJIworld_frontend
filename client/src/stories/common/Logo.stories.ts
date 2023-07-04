import { Meta, StoryObj } from "@storybook/react";
import { Logo } from "@components/common";

const meta: Meta<typeof Logo> = {
  title: "components/common/Logo",
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Korean = {
  args: { isMain: false },
};

export const English = {
  args: { isMain: true },
};
