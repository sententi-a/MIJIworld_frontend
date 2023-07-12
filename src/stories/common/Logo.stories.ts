import { Meta, StoryObj } from "@storybook/react";
import { Logo } from "@components/common";

const meta: Meta<typeof Logo> = {
  title: "components/common/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "Logo는 미지의 세계를 상징하는 이미지 컴포넌트입니다.",
  },
  argTypes: {
    isMain: { description: "메인 페이지 여부" },
    position: { description: "로고 위치 (상단 고정)" },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Korean: Story = {
  args: { isMain: false },
};

export const English: Story = {
  args: { isMain: true },
};
