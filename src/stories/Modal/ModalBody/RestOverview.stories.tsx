import { Meta, StoryObj } from "@storybook/react";
import RestOverview from "@components/Modal/ModalBody/RestOverview";

const meta: Meta<typeof RestOverview> = {
  title: "components/modal/ModalBody/RestOverview",
  component: RestOverview,
};

export default meta;

type Story = StoryObj<typeof RestOverview>;

const restData = {
  address: "서울 중구 마른내로 159-21",
  business_hour: "매일 10:00 - 22:00",
  country: "우즈베키스탄",
  country_word: "Men bu oziq-ovqat bahramand bo'ladi!",
  en_name: "samarkant",
  introduction:
    "사마르칸트는 현지인 셰프가 운영하는 우즈베키스탄 전문 음식점입니다.\n메뉴가 다양하고 특색이 있어 새로운 맛에 도전하고 싶은 분들에게 추천해요.",
  kr_name: "사마르칸트",
};

export const Rest_Overview: Story = {
  args: { restName: "samarkant", restData: restData },
};
