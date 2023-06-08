import React from "react";
import styled from "styled-components";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  shadowIntensity?: "strong" | "weak" | "modest";
}

function Box_({ children, shadowIntensity = "modest", ...props }: BoxProps) {
  return (
    <BoxDiv className={shadowIntensity} {...props}>
      {children}
    </BoxDiv>
  );
}

const BoxDiv = styled.div`
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;

  &.weak {
    box-shadow: rgba(105, 103, 103, 0.118) 0px 0px 10px;
  }
  &.modest {
    box-shadow: 5px 5px 10px 0 #cccccc;
  }
  &.strong {
    box-shadow: 8px 6px 12px 2px #cacaca;
  }
`;

const Box = React.memo(Box_);
export default Box;
