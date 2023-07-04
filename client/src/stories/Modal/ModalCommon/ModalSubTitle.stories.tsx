import { Meta, StoryObj } from "@storybook/react";
import ModalSubTitle from "@components/Modal/ModalCommon/ModalSubTitle";

const meta: Meta<typeof ModalSubTitle> = {
  title: "modal/ModalCommon",
  component: ModalSubTitle,
  decorators: [
    (Story) => (
      <div style={{ textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ModalSubTitle>;

export const Modal_Subtitle: Story = {
  args: { text: "메뉴 보기", restName: "samarkant" },
};
