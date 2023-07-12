import { Meta, StoryObj } from "@storybook/react";
import { Background } from "@components/common";
import MainImage from "@assets/images/main/main.png";
import MapImage from "@assets/images/map/worldmap_background.png";
import ListImage from "@assets/images/list/bg.png";

const meta: Meta<typeof Background> = {
  title: "components/common/Background",
  component: Background,
};

export default meta;

type Story = StoryObj<typeof Background>;

export const Main: Story = {
  args: { bgPath: MainImage },
};

export const Map: Story = {
  args: { bgPath: MapImage },
};

export const List: Story = {
  args: { bgPath: ListImage },
};
