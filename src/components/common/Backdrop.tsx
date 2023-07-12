import React from "react";
import styled from "styled-components";

interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Backdrop_ = React.forwardRef<HTMLDivElement, BackdropProps>(
  ({ children, ...props }, ref) => {
    return (
      <CustomDiv ref={ref} {...props}>
        {children}
      </CustomDiv>
    );
  }
);

const CustomDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Backdrop = React.memo(Backdrop_);
export default Backdrop;
