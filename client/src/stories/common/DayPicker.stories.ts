import { Meta, StoryObj } from "@storybook/react";
import { DayPicker } from "@components/common";

const meta: Meta<typeof DayPicker> = {
  title: "components/common/DayPicker",
  component: DayPicker,
};

export default meta;
type Story = StoryObj<typeof DayPicker>;

//TODO: custom styling, setDate
export const Day_Picker: Story = {
  args: { date: new Date(), setDate: () => {} },
};
