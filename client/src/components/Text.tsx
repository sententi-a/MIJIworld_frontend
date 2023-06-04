import React from "react";
import styled from "styled-components";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  size?: string;
  bold?: boolean;
  fancy?: boolean;
}

function Txt({ text, size, bold, fancy, ...props }: TextProps) {
  const className = `${size ? size + " " : "t4 "}${bold ? "bold " : ""}${
    fancy ? "fancy " : ""
  }`;
  return (
    <CustomText className={className} {...props}>
      {text}
    </CustomText>
  );
}

const CustomText = styled.div`
  font-family: Noto Sans KR;
  color: #707070;

  &.bold {
    font-weight: bold;
  }

  &.t1 {
    font-size: 3.6vw;
  }

  &.t2 {
    font-size: 3vw;
  }

  &.t3 {
    font-size: 2vw;
  }

  &.t4 {
    font-size: 1.5vw;
  }

  &.t5 {
    font-size: 1.4vw;
  }

  &.t6 {
    font-size: 1.2vw;
  }

  &.t7 {
    font-size: 0.8vw;
  }

  &.fancy {
    font-family: yg-jalnan;
  }
`;

const Text = React.memo(Txt);
export default Text;
