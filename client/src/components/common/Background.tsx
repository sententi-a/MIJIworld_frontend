import styled from "styled-components";
import React from "react";

interface BackgroundProps {
  bgPath: string;
}

function Background_({ bgPath }: BackgroundProps) {
  return (
    <>
      <BackImage path={bgPath} />
    </>
  );
}

const BackImage = styled.div<{ path: string }>`
  background: url(${(props) => props.path}) no-repeat center center fixed;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
`;

const Background = React.memo(Background_);
export default Background;
