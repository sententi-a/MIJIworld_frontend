import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "@components/common";

const meta: Meta<typeof SearchBar> = {
  title: "components/common/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: "SearchBar은 검색을 위한 molecule 컴포넌트입니다.",
  },
  argTypes: {
    placeholder: {
      description: "검색창 내 짧은 도움말",
    },
    color: { description: "검색창 테두리 및 검색 아이콘 색상" },
    handleOnChange: { description: "검색어 입력시 호출되는 콜백 함수" },
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Search_Bar: Story = {
  args: { placeholder: "Search Everything!" },
};
