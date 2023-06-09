import { useState } from "react";
import styled from "styled-components";
import { Background, VerticalButtons, Logo } from "@components/common";
import WorldMap from "@components/Map/WorldMap";
import BgImage from "@assets/images/map/worldmap_background.png";
import RestDialog from "../components/RestDialog";
import Modal from "./Modal";

export default function MapPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <Background bgPath={BgImage} />
      <Logo
        isMain={false}
        style={{
          marginTop: "2vw",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
        }}
      />
      <VerticalButtons isMap={true} isList={false} />
      <Container>
        <WorldMap>
          <div>안녕하세요</div>
        </WorldMap>
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

// const WorldMap = styled.img`
//   width: 90vw;
//   height: auto;
//   object-fit: contain;
//   object-position: center center;
//   margin-top: 15vh;
// `;
