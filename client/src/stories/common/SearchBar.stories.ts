import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "@components/common";

const meta: Meta<typeof SearchBar> = {
  title: "components/common/SearchBar",
  component: SearchBar,
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Search_Bar: Story = {
  args: { placeholder: "Search Everything!" },
};
