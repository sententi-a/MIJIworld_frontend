import React from "react";
import styled from "styled-components";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string | number;
  size?: string;
  bold?: boolean;
  fancy?: boolean;
}

function Text({ text, size, bold, fancy, ...props }: TextProps) {
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
  white-space: pre-line;

  &.bold {
    font-weight: bold;
  }

  &.t1 {
    font-size: 3.3vw;
  }

  &.t2 {
    font-size: 2.8vw;
  }

  &.t3 {
    font-size: 2vw;
  }

  &.t4 {
    font-size: 1.4vw;
  }

  &.t5 {
    font-size: 1.3vw;
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

export default React.memo(Text);
