import React from "react";
import styled from "styled-components";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Grid({ children, ...props }: GridProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 52vw;
  height: 70vh;
  text-align: center;
  display: grid;
  justify-content: space-evenly;
  align-items: start;
  grid-template-columns: repeat(auto-fill, minmax(25vmax, 25vmax));
  margin: 20px;
  row-gap: 3vh;
  overflow: scroll;
  padding-top: 1px;
  padding-bottom: 1px;
`;

export default React.memo(Grid);
