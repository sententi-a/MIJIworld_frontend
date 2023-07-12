import { Meta, StoryObj } from "@storybook/react";
import { StarRate } from "@components/common";

const meta: Meta<typeof StarRate> = {
  title: "components/common/StarRate",
  component: StarRate,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle:
      "StarRate는 0~5점 사이의 점수를 별점으로 나타내는 컴포넌트입니다.",
  },
  argTypes: { rate: { description: "점수" } },
};

export default meta;
type Story = StoryObj<typeof StarRate>;

export const Empty: Story = {
  args: { rate: 0 },
};

export const Full: Story = {
  args: { rate: 5 },
};
