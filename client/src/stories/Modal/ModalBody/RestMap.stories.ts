import { Meta, StoryObj } from "@storybook/react";
import RestMap from "@components/Modal/ModalBody/RestMap";

const meta: Meta<typeof RestMap> = {
  title: "modal/ModalBody",
  component: RestMap,
};

export default meta;

type Story = StoryObj<typeof RestMap>;

export const Rest_Map: Story = {
  args: { restName: "samarkant" },
};
