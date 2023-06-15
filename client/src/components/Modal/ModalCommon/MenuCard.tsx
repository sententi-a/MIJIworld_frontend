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
    <Box style={{ width: "20%", gap: "1vh" }}>
      <Image
        src={require(`@assets/images/restaurant/${restName}/menu${menuId}.png`)}
        size="medium"
      />
      <Text text={menuName} bold={true} />
      <Text text={description} />
      <Text text={getPriceWithComma(price) + "원"} />
    </Box>
  );
}
