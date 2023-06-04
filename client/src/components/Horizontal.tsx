import React from "react";
import styled from "styled-components";

interface HorizontalProps {
  children: React.ReactNode;
  gap?: string;
}

function Horizon({ children, gap }: HorizontalProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: gap ? gap : "1vw",
      }}
    >
      {children}
    </div>
  );
}

const Placement = styled.div`
  &.centerX {
  }
`;

const Direction = styled.div`
  &.horizontal {
    display: flex,
    align-items: center,
    justify-content: center,
  }
`;

const Horizontal = React.memo(Horizon);
export default Horizontal;
