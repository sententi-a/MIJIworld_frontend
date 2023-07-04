import { Meta, StoryObj } from "@storybook/react";
import ModalHeader from "@components/Modal/ModalHeader/ModalHeader";

const meta: Meta<typeof ModalHeader> = {
  title: "modal/ModalHeader/ModalHeader",
  component: ModalHeader,
};

export default meta;

type Story = StoryObj<typeof ModalHeader>;

export const Basic: Story = {
  args: { restName: "samarkant", country: "우즈베키스탄" },
};
