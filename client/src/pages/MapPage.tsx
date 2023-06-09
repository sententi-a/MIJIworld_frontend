import { useState } from "react";
import styled from "styled-components";
import { Background, VerticalButtons, Logo, Image } from "@components/common";
import WorldMap from "@components/Map/WorldMap";
import BgImage from "@assets/images/map/worldmap_background.png";
import RestDialog from "@components/RestDialog";
import Modal from "@pages/Modal";
import usePin from "@hooks/usePin";
import Pin from "@components/Map/Pin";

export default function MapPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { getPins } = usePin();

  return (
    <>
      <Background bgPath={BgImage} />
      <Logo
        isMain={false}
        style={{
          marginTop: "2vw",
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%)",
        }}
      />
      <VerticalButtons isMap={true} isList={false} />
      <Container>
        <WorldMap>
          {getPins().map((elem) => (
            <Pin
              restName={elem.name}
              top={elem.top}
              left={elem.top}
              dialog={<RestDialog />}
            />
          ))}
        </WorldMap>
      </Container>
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
