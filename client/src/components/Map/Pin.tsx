import React, { useState, useCallback } from "react";
import { Image } from "@components/common";

interface PinProps extends React.HTMLAttributes<HTMLImageElement> {
  restName: string;
  top: string | number;
  left: string | number;
  dialog?: React.ReactNode;
}

function Pin_({ restName, top, left, dialog }: PinProps) {
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
        onMouseLeave={() => handleMouseLeave()}
        style={{ position: "absolute", top, left }}
      />
      {/* {isHovered && { dialog }} */}
    </>
  );
}

const Pin = React.memo(Pin_);
export default Pin;
