import styled from "styled-components";
import { Box, Text, Image, Horizontal } from "@components/common";
import { useRestDialog } from "@hooks/restaurant";

interface RestDialogProps {
  restName: string;
  handleOnClick: (event: React.MouseEvent<HTMLDivElement>) => void;
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
      onClick={handleOnClick}
      onMouseLeave={handleOnMouseLeave}
    >
      <Box style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
        <Text
          text={data?.country}
          fancy={true}
          style={{ color: data?.text_color }}
        />
        <Box style={{ backgroundColor: "#ffffff" }}>
          <Horizontal>
            <Image
              src={require(`@assets/images/restaurant/${restName}/menu1.png`)}
            />
            <Text text={data?.kr_name} size="t5" />
          </Horizontal>
        </Box>
      </Box>
    </div>
  );
}
