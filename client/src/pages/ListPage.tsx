import { useState, Suspense } from "react";
import styled from "styled-components";
import BgImage from "@assets/images/list/bg.png";
import {
  VerticalButtons,
  Background,
  Logo,
  SearchBar,
  Text,
} from "@components/common";
import RestCardList from "@components/List/RestCardList";
import ModalFallback from "@components/Modal/ModalCommon/ModalFallback";
import Modal from "@pages/Modal";
import { useRestaurants } from "@hooks/queries/restaurant";
import useSearch from "@hooks/useSearch";
import useModal from "@hooks/useModal";

export default function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { keyword, handleSearchChange } = useSearch();
  const { data: restData } = useRestaurants(keyword);
  const { currentRest, handleTriggerClick } = useModal(setIsModalOpen);

  return (
    <>
      <Background bgPath={BgImage} />
      <Logo isMain={false} />
      <VerticalButtons isMap={false} isList={true} />
      <Wrapper>
        <SearchBar handleOnChange={handleSearchChange} />
        <Text
          text={`검색 결과 : ${restData.length}개`}
          size="t4"
          bold={true}
          style={{ color: "#8D8DE5" }}
        />
        <RestCardList restData={restData} handleOnClick={handleTriggerClick} />
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
