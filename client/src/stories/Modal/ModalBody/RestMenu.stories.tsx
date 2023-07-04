import { Meta, StoryObj } from "@storybook/react";
import RestMenu from "@components/Modal/ModalBody/RestMenu";

const meta: Meta<typeof RestMenu> = {
  title: "components/modal/ModalBody/RestMenu",
  component: RestMenu,
  decorators: [
    (Story) => (
      <div style={{ textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RestMenu>;

export const Rest_Menu: Story = {
  args: { restName: "samarkant" },
};
