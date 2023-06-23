import React from "react";
import { Image, Text, Box, Horizontal } from "@components/common";

interface RestCardProps {
  handleOnClick?: (event: React.MouseEvent) => void;
  restName: string;
  address: string;
  businessHour: string;
  country: string;
  krRestName: string;
}

export default function RestCard({
  handleOnClick,
  restName,
  address,
  businessHour,
  country,
  krRestName,
}: RestCardProps) {
  return (
    <>
      <Box
        shadowIntensity="weak"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.123)",
          gap: "1vh",
          width: "90%",
          height: "90%",
        }}
        onClick={handleOnClick}
      >
        <Horizontal>
          <Image
            src={require(`@assets/images/restaurant/${restName}/flag.png`)}
          />
          <Text text={country} fancy={true} size="t6" />
        </Horizontal>
        <Box
          shadowIntensity="weak"
          style={{
            backgroundColor: "rgba(248, 248, 248, 0.342)",
            width: "85%",
            height: "90%",
          }}
        >
          <Horizontal>
            <Image
              src={require(`@assets/images/restaurant/${restName}/menu1.png`)}
              size="medium"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <Text text={krRestName} size="t6" style={{ fontWeight: 600 }} />
              <Text text={address} size="t7" />
              <Text text={businessHour} size="t7" />
            </div>
          </Horizontal>
        </Box>
      </Box>
    </>
  );
}
