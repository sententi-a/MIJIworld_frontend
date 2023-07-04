import { Meta, StoryObj } from "@storybook/react";
import RestCard from "@components/List/RestCard";

const meta: Meta<typeof RestCard> = {
  title: "components/list/RestCard",
  component: RestCard,
};

export default meta;

type Story = StoryObj<typeof RestCard>;

export const Rest_Card: Story = {
  args: {
    restName: "samarkant",
    address: "서울 중구 마른내로 159-21",
    businessHour: "매일 10:00 - 22:00",
    country: "우즈베키스탄",
    krRestName: "사마르칸트",
  },
};
