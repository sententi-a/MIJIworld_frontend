import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "@components/common";

const meta: Meta<typeof SearchBar> = {
  title: "common/SearchBar",
  component: SearchBar,
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Basic: Story = {
  args: { placeholder: "Search Everything!" },
};
