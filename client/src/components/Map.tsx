import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackImage from "./BackImage";
import Bg from "../assets/images/map/worldmap_background.png";
import MapBg from "../assets/images/map/worldmap.png";
import Logo from "./Logo";
import LogoPath from "../assets/images/logo/logo.png";
import VerticalBtn from "./VerticalBtn";

export default function Map() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/list");
  };

  return (
    <>
      <BackImage path={Bg}>
        <Logo src={LogoPath} />
        <WorldMap src={MapBg} />
        <VerticalBtnContainer>
          <VerticalBtn clicked={true}>지도 보기</VerticalBtn>
          <VerticalBtn clicked={false} onClick={handleButtonClick}>
            목록 보기
          </VerticalBtn>
        </VerticalBtnContainer>
      </BackImage>
    </>
  );
}

const WorldMap = styled.img`
  width: 90vw;
  height: auto;
  object-fit: contain;
  object-position: center center;
  margin-top: 15vh;
`;

const VerticalBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  margin-top: 1vh;
`;
