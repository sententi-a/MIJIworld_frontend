import { Meta, StoryObj } from "@storybook/react";
import RestPhoto from "@components/Modal/ModalBody/RestPhoto";

const meta: Meta<typeof RestPhoto> = {
  title: "modal/ModalBody",
  component: RestPhoto,
  decorators: [
    (Story) => (
      <div style={{ textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RestPhoto>;

export const Rest_Photo: Story = {
  args: { restName: "samarkant" },
};
