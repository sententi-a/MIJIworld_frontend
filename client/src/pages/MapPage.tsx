import { useState } from "react";
import styled from "styled-components";
import { Background, VerticalButtons, Logo } from "@components/common";
import WorldMap from "@components/Map/WorldMap";
import BgImage from "@assets/images/map/worldmap_background.png";
import Modal from "@pages/Modal";
import usePin from "@hooks/usePin";
import PinWithDialog from "@components/Map/PinWithDialog";

export default function MapPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRest, setCurrentRest] = useState("");

  const { data } = usePin();

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
          {data.map((elem: any) => (
            <>
              <PinWithDialog
                restName={elem.name}
                top={elem.top}
                left={elem.left}
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
