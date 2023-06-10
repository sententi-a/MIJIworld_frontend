import { useState } from "react";
import styled from "styled-components";
import { Background, VerticalButtons, Logo, Image } from "@components/common";
import WorldMap from "@components/Map/WorldMap";
import BgImage from "@assets/images/map/worldmap_background.png";
import RestDialog from "@components/Map/RestDialog";
import Modal from "@pages/Modal";
import usePin from "@hooks/usePin";
import PinWithDialog from "@components/Map/PinWithDialog";

export default function MapPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRest, setCurrentRest] = useState("");

  const { getPins } = usePin();

  const handleDialogClick = (restName: string) => {
    setIsModalOpen(true);
    setCurrentRest(restName);
  };

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
            <>
              <PinWithDialog
                restName={elem.name}
                top={elem.top}
                left={elem.left}
                country="우즈베키스탄"
                restNameKr="사마르칸트"
                restNameColor="#10ef10"
                handleOnClick={() => {
                  handleDialogClick(elem.name);
                }}
              />
            </>
          ))}
        </WorldMap>
      </Container>
      {isModalOpen && (
        <Modal restName={currentRest} setIsModalOpen={setIsModalOpen} />
      )}
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
