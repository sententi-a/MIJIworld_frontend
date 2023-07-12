import { Meta, StoryObj } from "@storybook/react";
import PinWithDialog from "@components/Map/PinWithDialog";

const meta: Meta<typeof PinWithDialog> = {
  title: "components/map/PinWithDialog",
  component: PinWithDialog,
};

export default meta;

type Story = StoryObj<typeof PinWithDialog>;

export const Pin_With_Dialog: Story = {
  args: { restName: "samarkant", handleOnClick: () => {}, top: 20, left: 50 },
};
