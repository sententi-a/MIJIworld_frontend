import React from "react";
import styled from "styled-components";
import LogoKr from "@assets/images/main/logo_main.png";
import LogoEn from "@assets/images/logo/logo.png";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  isMain?: boolean;
}

function Logo_({ isMain, ...props }: LogoProps) {
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

const Logo = React.memo(Logo_);
export default Logo;
