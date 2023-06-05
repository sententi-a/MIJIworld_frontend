import React from "react";
import styled from "styled-components";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Box_({ children, ...props }: BoxProps) {
  return <BoxDiv {...props}>{children}</BoxDiv>;
}

const BoxDiv = styled.div`
  box-shadow: 5px 5px 10px 0 #cccccc;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Box = React.memo(Box_);
export default Box;
