import { Meta, StoryObj } from "@storybook/react";
import { DayPicker } from "@components/common";

const meta: Meta<typeof DayPicker> = {
  title: "components/common/DayPicker",
  component: DayPicker,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "DayPicker은 날짜를 선택할 수 있는 molecule 컴포넌트입니다.",
  },
  argTypes: {
    date: { description: "DayPicker로 지정한 날짜" },
    setDate: { description: "date를 변경하는 setState 함수" },
  },
};

export default meta;
type Story = StoryObj<typeof DayPicker>;

//TODO: custom styling, setDate
export const Day_Picker: Story = {
  args: { date: new Date(), setDate: () => {} },
};
