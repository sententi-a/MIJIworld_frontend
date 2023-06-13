import styled from "styled-components";
import {
  VerticalButtons,
  Background,
  Logo,
  Grid,
  SearchBar,
} from "@components/common";
import BgImage from "@assets/images/list/bg.png";
import RestCard from "@components/RestCard";
import Modal from "@pages/Modal";
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
        <Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => {
            return (
              // TODO: currentRest를 elem의 restName으로 바꾸기
              <RestCard handleOnClick={() => handleCardClick(currentRest)} />
            );
          })}
        </Grid>
      </Wrapper>
      {isModalOpen && (
        <Modal restName={currentRest} setIsModalOpen={setIsModalOpen} />
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
`;
