import React, { useState, useCallback } from "react";
import { Image } from "@components/common";
import RestDialog from "@components/Map/RestDialog";

interface PinProps extends React.HTMLAttributes<HTMLImageElement> {
  restName: string;
  handleOnClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  top: number;
  left: number;
}

function PinWithDialog_({ restName, top, left, handleOnClick }: PinProps) {
  //TODO: useMemo 안 써도 될까?
  const imagePath: string = React.useMemo(() => {
    return require(`@assets/images/pin/${restName}.png`);
  }, []);

  const imageStyle: React.CSSProperties = React.useMemo(() => {
    return { position: "absolute", top: `${top}%`, left: `${left}%` };
  }, []);

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
        src={imagePath}
        onMouseEnter={handleMouseEnter}
        style={imageStyle}
      />
      {isHovered && (
        <RestDialog
          restName={restName}
          top={`${top - 6.5}%`}
          left={`${left - 6.5}%`}
          handleOnClick={handleOnClick}
          handleOnMouseLeave={handleMouseLeave}
        />
      )}
    </>
  );
}

const PinWithDialog = React.memo(PinWithDialog_);
export default PinWithDialog;
