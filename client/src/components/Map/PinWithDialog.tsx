import React, { useState, useCallback } from "react";
import { Image } from "@components/common";
import RestDialog from "@components/Map/RestDialog";

interface PinProps extends React.HTMLAttributes<HTMLImageElement> {
  country: string;
  restName: string;
  restNameKr: string;
  restNameColor: string;
  handleOnClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  top: number;
  left: number;
}

//TODO: RestDialog에서 hook 준비 완료되면 props 정리하기
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
        style={{ position: "absolute", top: `${top}%`, left: `${left}%` }}
      />
      {isHovered && (
        <RestDialog
          country={country}
          restName={restName}
          restNameKr={restNameKr}
          restNameColor={restNameColor}
          top={`${top - 6.5}%`}
          left={`${left - 6.5}%`}
          handleOnClick={handleOnClick}
          handleOnMouseLeave={handleMouseLeave}
        />
      )}
    </>
  );
}

const Pin = React.memo(Pin_);
export default Pin;
