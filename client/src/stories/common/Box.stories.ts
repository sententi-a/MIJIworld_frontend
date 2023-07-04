import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@components/common";

const meta: Meta<typeof Box> = {
  title: "components/common/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Box는 컨테이너의 역할을 하는 atomic한 컴포넌트입니다.",
  },
  argTypes: {
    shadowIntensity: { description: "Box의 그림자 강도" },
    style: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Weak: Story = {
  args: { shadowIntensity: "weak", style: { height: "50vh" } },
};

export const Modest = {
  args: { shadowIntensity: "modest", style: { height: "50vh" } },
};

export const Strong = {
  args: { shadowIntensity: "strong", style: { height: "50vh" } },
};
