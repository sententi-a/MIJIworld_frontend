import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components/common";

const meta: Meta<typeof Button> = {
  title: "components/common/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    componentSubtitle:
      "Button은 사용자 인터랙션을 위한 atomic한 컴포넌트입니다.",
  },
  argTypes: {
    label: {
      description: "버튼 내부 텍스트",
    },
    size: {
      description: "버튼 크기",
    },
    bgColor: {
      description: "버튼 색상",
    },
    fontColor: {
      description: "버튼 내부 텍스트 색상",
    },
    hoverColor: {
      description: "마우스 오버시 바뀌는 색상",
    },
    clicked: {
      description: "버튼 클릭 여부(true인 경우 버튼 비활성화)",
    },
    isVertical: {
      description: "버튼 수직화 여부",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: { label: "버튼", size: "small" },
};

export const Medium: Story = {
  args: { label: "버튼", size: "medium" },
};

export const Large: Story = {
  args: { label: "버튼", size: "large" },
};

export const Disabled: Story = {
  args: { label: "버튼", clicked: true },
};

export const Vertical: Story = {
  args: { label: "버튼", isVertical: true },
};
