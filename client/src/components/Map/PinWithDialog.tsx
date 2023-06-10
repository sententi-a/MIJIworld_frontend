import React, { useState, useCallback } from "react";
import { Image } from "@components/common";
import RestDialog from "@components/Map/RestDialog";

interface PinProps extends React.HTMLAttributes<HTMLImageElement> {
  country: string;
  restName: string;
  restNameKr: string;
  restNameColor: string;
  handleOnClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  top: string | number;
  left: string | number;
}

function Pin_({
  restName,
  top,
  left,
  country,
  restNameKr,
  restNameColor,
  handleOnClick,
}: PinProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <>
      <Image
        src={require(`@assets/images/pin/${restName}.png`)}
        onMouseEnter={() => handleMouseEnter()}
        style={{ position: "absolute", top, left }}
      />
      {isHovered && (
        <RestDialog
          country={country}
          restName={restName}
          restNameKr={restNameKr}
          restNameColor={restNameColor}
          top={top}
          left={left}
          handleOnClick={handleOnClick}
          handleOnMouseLeave={handleMouseLeave}
        />
      )}
    </>
  );
}

const Pin = React.memo(Pin_);
export default Pin;
