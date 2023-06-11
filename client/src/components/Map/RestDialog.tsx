import styled from "styled-components";
import { Box, Text, Image, Horizontal } from "@components/common";

interface RestDialogProps {
  country: string;
  restName: string;
  restNameKr: string;
  restNameColor: string;
  handleOnClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleOnMouseLeave: (event: React.MouseEvent<HTMLDivElement>) => void;
  top?: string | number;
  left?: string | number;
}

//TODO: hook 사용해서 restName 토대로 필요한 것들 가져오기
export default function RestDialog({
  country,
  restName,
  restNameKr,
  restNameColor,
  handleOnClick,
  handleOnMouseLeave,
  top,
  left,
}: RestDialogProps) {
  return (
    <div
      style={{ position: "absolute", top, left, zIndex: 10 }}
      onClick={handleOnClick}
      onMouseLeave={handleOnMouseLeave}
    >
      <Box style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
        <Text text={country} fancy={true} style={{ color: restNameColor }} />
        <Box style={{ backgroundColor: "#ffffff" }}>
          <Horizontal>
            <Image
              src={require(`@assets/images/restaurant/${restName}/menu1.png`)}
            />
            <Text text={restNameKr} size="t5" />
          </Horizontal>
        </Box>
      </Box>
    </div>
  );
}

const RestDishImg = styled.img`
  width: 25%;
  height: auto;
  margin-left: 3%;
`;

const RestName = styled.div`
  width: 60%;
  font-family: Noto Sans KR;
  font-size: 1.2vw;
  font-weight: 500;
  color: #555;
`;

export { RestDishImg, RestName };
