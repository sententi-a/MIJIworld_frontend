import React from "react";
import PinWithDialog from "@components/Map/PinWithDialog";
import usePin from "@hooks/queries/pin";
import pinDataType from "@customTypes/pin";

interface PinsProps {
  handleOnClick?: (restName: string) => void;
}

export default function Pins({ handleOnClick }: PinsProps) {
  const { data: pinData } = usePin();

  return (
    <>
      {pinData &&
        pinData.map((elem: pinDataType) => (
          <React.Fragment key={`pin ` + elem.en_name}>
            <PinWithDialog
              key={"pin " + elem.en_name}
              restName={elem.en_name}
              top={elem.top}
              left={elem.left}
              handleOnClick={() => {
                handleOnClick && handleOnClick(elem.en_name);
              }}
            />
          </React.Fragment>
        ))}
    </>
  );
}
