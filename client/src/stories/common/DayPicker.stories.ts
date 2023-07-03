import { Meta, StoryObj } from "@storybook/react";
import { DayPicker } from "@components/common";

const meta: Meta<typeof DayPicker> = {
  title: "common/DayPicker",
  component: DayPicker,
};

export default meta;
type Story = StoryObj<typeof DayPicker>;

//TODO: custom styling, setDate
export const Basic: Story = {
  args: { date: new Date(), setDate: () => {} },
};
