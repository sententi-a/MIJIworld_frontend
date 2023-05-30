import LogoKr from "../assets/images/main/logo_main.png";
import LogoEn from "../assets/images/logo/logo.png";
import styled from "styled-components";
import React from "react";

interface BackgroundProps {
  children: React.ReactNode;
  bgPath: string;
  isMain: boolean;
}

function Background({ bgPath, isMain }: BackgroundProps) {
  return (
    <>
      <BackImage path={bgPath}>
        {isMain ? <Logo1 src={LogoKr} /> : <Logo2 src={LogoEn} />}
      </BackImage>
    </>
  );
}

const Logo1 = styled.img`
  width: 12vw;
  margin-top: 3vw;
  margin-left: 10vw;
`;

const Logo2 = styled.img`
  width: 10vw;
  margin-top: 2vw;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const BackImage = styled.div<{ path: string }>`
  background: url(${(props) => props.path}) no-repeat center center fixed;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
  z-index: 1000;
`;

export const MemoizedBackground = React.memo(Background);
