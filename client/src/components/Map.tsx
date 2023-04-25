import React from "react";
import styled from "styled-components";
import BackImage from "./BackImage";
import Bg from "../assets/images/map/worldmap_background.png";
import MapBg from "../assets/images/map/worldmap.png";
import Logo from "./Logo";
import LogoPath from "../assets/images/logo/logo.png";

export default function Map() {
  return (
    <>
      <BackImage path={Bg}>
        <Logo src={LogoPath} />
        <WorldMap></WorldMap>
      </BackImage>
    </>
  );
}

const WorldMap = styled.div`
  background-image: url(${MapBg});
  background-size: 85vw 70vh;
  width: 85vw;
  height: 70vh;
  top: 52%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;
