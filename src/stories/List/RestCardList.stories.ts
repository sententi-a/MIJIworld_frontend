import { Meta, StoryObj } from "@storybook/react";
import RestCardList from "@components/List/RestCardList";

const meta: Meta<typeof RestCardList> = {
  title: "components/list/RestCardList",
  component: RestCardList,
};

export default meta;

type Story = StoryObj<typeof RestCardList>;

export const All: Story = {
  args: { keyword: "" },
};

export const Filtered: Story = {
  args: { keyword: "용산구" },
};
