import React from "react";
import styled from "styled-components";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Grid_({ children, ...props }: GridProps) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  width: 52vw;
  height: 73.5vh;
  text-align: center;
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25vmax, 25vmax));
  margin: 20px;
  row-gap: 3vh;
  padding: 10px;
  overflow: scroll;
`;

const Grid = React.memo(Grid_);
export default Grid;
