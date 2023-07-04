import { Meta, StoryObj } from "@storybook/react";
import WorldMap from "@components/Map/WorldMap";

const meta: Meta<typeof WorldMap> = {
  title: "map/WorldMap",
  component: WorldMap,
};

export default meta;

type Story = StoryObj<typeof WorldMap>;

export const Basic: Story = {
  args: {},
};
