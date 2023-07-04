import { Meta, StoryObj } from "@storybook/react";
import PinWithDialog from "@components/Map/PinWithDialog";

const meta: Meta<typeof PinWithDialog> = {
  title: "map/PinWithDialog",
  component: PinWithDialog,
};

export default meta;

type Story = StoryObj<typeof PinWithDialog>;

export const Basic: Story = {
  args: { restName: "samarkant", handleOnClick: () => {}, top: 20, left: 50 },
};
