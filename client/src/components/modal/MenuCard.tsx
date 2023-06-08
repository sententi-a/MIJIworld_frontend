import { Box, Image, Text } from "../common";

interface MenuCardProps {
  restName: string;
  menuId: number;
}

export default function MenuCard({ restName, menuId }: MenuCardProps) {
  const menus = [
    { name: "menu1Name", explain: "menu1Explain\nExplain", price: 1000 },
    { name: "menu2Name", explain: "menu2Explain\nExplain", price: 1000 },
    { name: "menu3Name", explain: "menu3Explain\nExplain", price: 1000 },
  ];

  return (
    <Box style={{ width: "20%", gap: "1vh" }}>
      <Image
        src={require(`../../assets/images/restaurant/${restName}/menu${menuId}.png`)}
        size="medium"
      />
      <Text text={menus[menuId - 1]["name"]} bold={true} />
      <Text text={menus[menuId - 1]["explain"]} />
      <Text text={menus[menuId - 1]["price"]} />
    </Box>
  );
}
