import { useState } from "react";
import styled from "styled-components";
import { MemoizedBackground } from "../components/Background";
import { MemoizedVerticalButtons } from "../components/VerticalButtons";
import Bg from "../assets/images/map/worldmap_background.png";
import MapBg from "../assets/images/map/worldmap.png";
import RestDialog from "../components/RestDialog";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function MapPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <MemoizedBackground bgPath={Bg} isMain={false} />
      <MemoizedVerticalButtons isMap={true} isList={false} />
      <Container>
        <WorldMap src={MapBg} />
      </Container>
      {isDialogOpen && <RestDialog />}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

const Container = styled.div`
  text-align: center;
  position: relative;
`;

const WorldMap = styled.img`
  width: 90vw;
  height: auto;
  object-fit: contain;
  object-position: center center;
  margin-top: 15vh;
`;
