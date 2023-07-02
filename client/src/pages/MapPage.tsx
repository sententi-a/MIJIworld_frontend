import { useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";
import styled from "styled-components";
import BgImage from "@assets/images/map/worldmap_background.png";
import {
  Background,
  VerticalButtons,
  Logo,
  ErrorFallback,
} from "@components/common";
import WorldMap from "@components/Map/WorldMap";
import Pins from "@components/Map/Pins";
import ModalFallback from "@components/Modal/ModalCommon/ModalFallback";
import Modal from "@pages/Modal";
import useModal from "@hooks/useModal";

export default function MapPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentRest, handleTriggerClick } = useModal(setIsModalOpen);
  const { reset } = useQueryErrorResetBoundary();

  return (
    <>
      <Background bgPath={BgImage} />
      <Logo isMain={false} />
      <VerticalButtons isMap={true} isList={false} />
      <Container>
        <WorldMap>
          <Suspense>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
              <Pins handleOnClick={handleTriggerClick} />
            </ErrorBoundary>
          </Suspense>
        </WorldMap>
      </Container>
      {isModalOpen && (
        <Suspense fallback={<ModalFallback />}>
          <Modal restName={currentRest} setIsModalOpen={setIsModalOpen} />
        </Suspense>
      )}
    </>
  );
}

const Container = styled.div`
  text-align: center;
  position: relative;
`;
