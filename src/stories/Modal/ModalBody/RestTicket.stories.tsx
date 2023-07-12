import { Meta, StoryObj } from "@storybook/react";
import RestTicket from "@components/Modal/ModalBody/RestTicket";

const meta: Meta<typeof RestTicket> = {
  title: "components/modal/ModalBody/RestTicket",
  component: RestTicket,
  decorators: [
    (Story) => (
      <div style={{ textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RestTicket>;

export const Rest_Ticket: Story = {
  args: { restName: "samarkant" },
};
