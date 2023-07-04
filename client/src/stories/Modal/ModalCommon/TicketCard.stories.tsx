import { Meta, StoryObj } from "@storybook/react";
import TicketCard from "@components/Modal/ModalCommon/TicketCard";

const meta: Meta<typeof TicketCard> = {
  title: "modal/ModalCommon",
  component: TicketCard,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "30px",
          gap: "0.5vmax",
          width: "80%",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof TicketCard>;

export const Ticket_Card: Story = {
  args: { restName: "samarkant" },
};
