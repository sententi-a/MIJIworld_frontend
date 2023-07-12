import { Meta, StoryObj } from "@storybook/react";
import RestReview from "@components/Modal/ModalBody/RestReview";

const meta: Meta<typeof RestReview> = {
  title: "components/modal/ModalBody/RestReview",
  component: RestReview,
  decorators: [
    (Story) => (
      <div style={{ textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RestReview>;

export const Rest_Review: Story = {
  args: { restName: "samarkant" },
};
