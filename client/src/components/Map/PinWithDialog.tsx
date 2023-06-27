import React from "react";
import { Image } from "@components/common";
import RestDialog from "@components/Map/RestDialog";
import useHover from "@hooks/useHover";

interface PinProps extends React.HTMLAttributes<HTMLImageElement> {
  restName: string;
  handleOnClick: (restName: string) => void;
  top: number;
  left: number;
}

function PinWithDialog({ restName, top, left, handleOnClick }: PinProps) {
  const imageStyle: React.CSSProperties = React.useMemo(() => {
    return { position: "absolute", top: `${top}%`, left: `${left}%` };
  }, []);

  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <>
      <Image
        src={require(`@assets/images/pin/${restName}.png`)}
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

export default React.memo(PinWithDialog);
