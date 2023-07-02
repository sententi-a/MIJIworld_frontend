import { useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";
import styled from "styled-components";
import BgImage from "@assets/images/list/bg.png";
import {
  VerticalButtons,
  Background,
  Logo,
  SearchBar,
  Text,
  ErrorFallback,
} from "@components/common";
import RestCardList from "@components/List/RestCardList";
import ModalFallback from "@components/Modal/ModalCommon/ModalFallback";
import Modal from "@pages/Modal";
import useSearch from "@hooks/useSearch";
import useModal from "@hooks/useModal";

export default function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { keyword, handleSearchChange } = useSearch();
  const { currentRest, handleTriggerClick } = useModal(setIsModalOpen);

  // Error boundary
  const { reset } = useQueryErrorResetBoundary();

  // Set the number of restaurant based on restData in RestCardList
  const [restCount, setRestCount] = useState(0);

  const handleRestCount = (count: number) => {
    setRestCount(count);
  };

  return (
    <>
      <Background bgPath={BgImage} />
      <Logo isMain={false} />
      <VerticalButtons isMap={false} isList={true} />
      <Wrapper>
        <SearchBar handleOnChange={handleSearchChange} />
        <Text
          text={`검색 결과 : ${restCount}개`}
          size="t4"
          bold={true}
          style={{ color: "#8D8DE5" }}
        />
        {/* TODO: Suspense fallback */}
        <Suspense>
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
            <RestCardList
              keyword={keyword}
              handleOnClick={handleTriggerClick}
              handleOnDataChange={handleRestCount}
            />
          </ErrorBoundary>
        </Suspense>
      </Wrapper>
      {isModalOpen && (
        <Suspense fallback={<ModalFallback />}>
          <Modal restName={currentRest} setIsModalOpen={setIsModalOpen} />
        </Suspense>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 8vmax;
  gap: 1vh;
`;
