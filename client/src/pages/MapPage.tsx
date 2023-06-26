import { useState, useCallback } from "react";
import styled from "styled-components";
import { Background, VerticalButtons, Logo } from "@components/common";
import WorldMap from "@components/Map/WorldMap";
import BgImage from "@assets/images/map/worldmap_background.png";
import Modal from "@pages/Modal";
import usePin from "@hooks/queries/pin";
import PinWithDialog from "@components/Map/PinWithDialog";

export default function MapPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRest, setCurrentRest] = useState("");
  const { data } = usePin();
  //TODO: 리렌더링 되고 있으니 의존성 배열 확인하기
  const handleDialogClick = useCallback(
    (restName: string) => {
      setIsModalOpen(true);
      setCurrentRest(restName);
    },
    [setIsModalOpen, setCurrentRest]
  );

  return (
    <>
      <Background bgPath={BgImage} />
      <Logo isMain={false} />
      <VerticalButtons isMap={true} isList={false} />
      <Container>
        <WorldMap>
          {data &&
            data.map((elem: any) => (
              //TODO: memoization
              <PinWithDialog
                key={"pin " + elem.en_name}
                restName={elem.en_name}
                top={elem.top}
                left={elem.left}
                handleOnClick={() => {
                  handleDialogClick(elem.en_name);
                }}
              />
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
