import React from "react";
import styled from "styled-components";
import LogoKr from "@assets/images/main/logo_main.png";
import LogoEn from "@assets/images/logo/logo.png";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  isMain?: boolean;
  position?: "left" | "center" | "right";
}

function Logo_({ isMain, position = "center", ...props }: LogoProps) {
  return (
    <>
      <Wrapper className={position} {...props}>
        {isMain ? <KoreanLogo src={LogoKr} /> : <EnglishLogo src={LogoEn} />}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  &.left {
    position: absolute;
    margin-top: 2vw;
    top: 0;
    left: 5vw;
  }

  &.center {
    position: absolute;
    margin-top: 2vw;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }

  &.right {
    position: absolute;
    margin-top: 2vw;
    top: 0;
    right: 5vw;
  }
`;

const KoreanLogo = styled.img`
  width: 12vw;
`;

const EnglishLogo = styled.img`
  width: 10vw;
`;

const Logo = React.memo(Logo_);
export default Logo;
