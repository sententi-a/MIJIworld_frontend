import { Meta, StoryObj } from "@storybook/react";
import RestPhotoSlide from "@components/Modal/ModalCommon/RestPhotoSlide";

const meta: Meta<typeof RestPhotoSlide> = {
  title: "components/modal/ModalCommon/RestPhotoSlide",
  component: RestPhotoSlide,
  decorators: [
    (Story) => (
      <div style={{ textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof RestPhotoSlide>;

export const Rest_PhotoSlide: Story = {
  args: { restName: "samarkant" },
};
