import { Meta, StoryObj } from "@storybook/react";
import MenuCard from "@components/Modal/ModalCommon/MenuCard";

const meta: Meta<typeof MenuCard> = {
  title: "components/modal/ModalCommon/MenuCard",
  component: MenuCard,
};

export default meta;

type Story = StoryObj<typeof MenuCard>;

export const Menu_Card: Story = {
  args: {
    restName: "samarkant",
    menuId: 2,
    menuName: "양고기 스프",
    description: "양고기, 무가 풍부하게 들어간\n우즈베키스탄 양고기 스프",
    price: 7000,
  },
};
