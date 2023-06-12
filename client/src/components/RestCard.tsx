import React from "react";
import { Image, Text, Box, Horizontal } from "@components/common";

interface RestCardProps {
  handleOnClick?: (event: React.MouseEvent) => void;
}

export default function RestCard({ handleOnClick }: RestCardProps) {
  //TODO: Hook으로 RestDialog와 같은 정보 전달받기
  const restName = "samarkant";
  const restNameKr = "사마르칸트";
  const restAddress = "서울 종로구 희우정로 110-40";
  const restBusinessHour = "매일 오전 11:00 - 오후 5:00";
  const countryName = "우즈베키스탄";

  return (
    <>
      <Box
        shadowIntensity="weak"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.123)", gap: "1vh" }}
        onClick={handleOnClick}
      >
        <Horizontal>
          <Image
            src={require(`../assets/images/restaurant/${restName}/flag.png`)}
          />
          <Text text={countryName} fancy={true} size="t6" />
        </Horizontal>
        <Box
          shadowIntensity="weak"
          style={{ backgroundColor: "rgba(248, 248, 248, 0.342)" }}
        >
          <Horizontal>
            <Image
              src={require(`../assets/images/restaurant/${restName}/menu1.png`)}
              size="medium"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Text text={restNameKr} size="t6" style={{ fontWeight: 600 }} />
              <Text text={restAddress} size="t7" />
              <Text text={restBusinessHour} size="t7" />
            </div>
          </Horizontal>
        </Box>
      </Box>
    </>
  );
}
