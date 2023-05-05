import { useState } from "react";
import styled from "styled-components";
import BackImage from "../components/BackImage";
import Bg from "../assets/images/map/worldmap_background.png";
import MapBg from "../assets/images/map/worldmap.png";
import Logo from "../components/Logo";
import LogoPath from "../assets/images/logo/logo.png";
import VerticalButtons from "../components/VerticalButtons";
import RestDialog from "../components/RestDialog";
import Modal from "../components/Modal";

export default function MapPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <BackImage path={Bg}>
        <Logo src={LogoPath} />
        <Container>
          <WorldMap src={MapBg} />
          <VerticalButtons isMap={true} isList={false} />
        </Container>
        {isDialogOpen && <RestDialog />}
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </BackImage>
    </>
  );
}

const Container = styled.div`
  text-align: center;
`;

const WorldMap = styled.img`
  width: 90vw;
  height: auto;
  object-fit: contain;
  object-position: center center;
  margin-top: 15vh;
`;
