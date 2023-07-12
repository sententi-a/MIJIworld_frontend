import React from "react";
import { Text } from "@components/common";
import { useColor } from "@hooks/queries/color";

interface ModalSubTitleProps {
  restName: string;
  text: string;
}

function ModalSubTitle({ restName, text }: ModalSubTitleProps) {
  const { data: colorData } = useColor(restName);

  return (
    <Text
      text={text}
      size="t4"
      fancy={true}
      style={{
        color: colorData ? colorData.text_color : "#707070",
        backgroundColor: colorData ? colorData.header_color : "#eeeeee",
        width: "15vw",
        borderRadius: "50px",
      }}
    />
  );
}

export default React.memo(ModalSubTitle);
