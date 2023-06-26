import styled from "styled-components";
import { Box, Text, Image, Horizontal } from "@components/common";
import { useRestDialog } from "@hooks/queries/restaurant";

interface RestDialogProps {
  restName: string;
  handleOnClick: (restName: string) => void;
  handleOnMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void;
  top?: string | number;
  left?: string | number;
}

export default function RestDialog({
  restName,
  handleOnClick,
  handleOnMouseLeave,
  top,
  left,
}: RestDialogProps) {
  const { data } = useRestDialog(restName);

  return (
    <div
      style={{ position: "absolute", top, left, zIndex: 10, cursor: "pointer" }}
      onClick={() => handleOnClick(restName)}
      onMouseLeave={handleOnMouseLeave}
    >
      <Box style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
        <Text
          text={data?.country}
          fancy={true}
          style={{ color: data?.text_color }}
          size="t6"
        />
        <Box style={{ backgroundColor: "#ffffff" }}>
          <Horizontal>
            <Image
              src={require(`@assets/images/restaurant/${restName}/menu1.png`)}
            />
            <Text text={data?.kr_name} size="t6" />
          </Horizontal>
        </Box>
      </Box>
    </div>
  );
}
