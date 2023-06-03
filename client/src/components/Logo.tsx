import React from "react";
import styled from "styled-components";
import LogoKr from "../assets/images/main/logo_main.png";
import LogoEn from "../assets/images/logo/logo.png";

interface LogoProps {
  isMain?: boolean;
}

function Logo({ isMain }: LogoProps) {
  return (
    <>{isMain ? <KoreanLogo src={LogoKr} /> : <EnglishLogo src={LogoEn} />}</>
  );
}

const KoreanLogo = styled.img`
  width: 12vw;
  margin-top: 3vw;
  margin-left: 10vw;
  position: absolute;
`;

const EnglishLogo = styled.img`
  width: 10vw;
  margin-top: 2vw;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

export const MemoizedLogo = React.memo(Logo);
