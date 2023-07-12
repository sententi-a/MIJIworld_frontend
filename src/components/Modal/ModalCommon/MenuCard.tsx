import { Box, Image, Text } from "@components/common";
import getPriceWithComma from "@utils/getPriceWithComma";

interface MenuCardProps {
  restName: string;
  menuId: number;
  menuName: string;
  description: string;
  price: number;
}

export default function MenuCard({
  restName,
  menuId,
  menuName,
  description,
  price,
}: MenuCardProps) {
  return (
    <Box style={{ width: "100%", gap: "1vh", height: "20vmax" }}>
      <Image
        src={require(`@assets/images/restaurant/${restName}/menu${menuId}.png`)}
        size="medium"
      />
      <Text text={menuName} bold={true} size="t5" />
      <Text text={description} size="t6" />
      <Text text={getPriceWithComma(price) + "원"} size="t6" />
    </Box>
  );
}
