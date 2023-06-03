import React from "react";
import styled from "styled-components";
import LogoKr from "../assets/images/main/logo_main.png";
import LogoEn from "../assets/images/logo/logo.png";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  isMain?: boolean;
}

function Logo({ isMain, ...props }: LogoProps) {
  return (
    <>
      <div {...props}>
        {isMain ? <KoreanLogo src={LogoKr} /> : <EnglishLogo src={LogoEn} />}
      </div>
    </>
  );
}

const KoreanLogo = styled.img`
  width: 12vw;
`;

const EnglishLogo = styled.img`
  width: 10vw;
`;

export const MemoizedLogo = React.memo(Logo);
