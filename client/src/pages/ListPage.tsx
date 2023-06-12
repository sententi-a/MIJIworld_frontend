import styled from "styled-components";
import { VerticalButtons, Background, Logo } from "@components/common";
import BgImage from "@assets/images/list/bg.png";
import RestCard from "@components/RestCard";
import SearchBar from "@components/SearchBar";
import Modal from "./Modal";
import { useState } from "react";

export default function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRest, setCurrentRest] = useState("");

  const handleCardClick = (restName: string) => {
    setIsModalOpen((prev) => !prev);
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
          left: "50%",
          transform: "translate(-50%)",
        }}
      />
      <VerticalButtons isMap={false} isList={true} />
      <Wrapper>
        <SearchBar />
        <CardWrapper>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => {
            return (
              // TODO: currentRest를 elem의 restName으로 바꾸기
              <RestCard handleOnClick={() => handleCardClick(currentRest)} />
            );
          })}
        </CardWrapper>
      </Wrapper>
      {isModalOpen && (
        <Modal restName={currentRest} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 8vmax;
`;

const CardWrapper = styled.div`
  width: 52vw;
  height: 70vh;
  text-align: center;
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25vmax, 25vmax));
  margin: 20px;
  row-gap: 3vh;
  padding: 10px;
  overflow: scroll;
`;
