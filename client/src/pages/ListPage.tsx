import styled from "styled-components";
import { MemoizedVerticalButtons } from "../components/VerticalButtons";
import { MemoizedBackground } from "../components/Background";
import { MemoizedLogo } from "../components/Logo";
import Bg from "../assets/images/list/bg.png";
import RestCard from "../components/RestCard";
import SearchBar from "../components/SearchBar";
import Modal from "../components/Modal";
import { useState } from "react";

export default function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <MemoizedBackground bgPath={Bg} />
      <MemoizedLogo
        isMain={false}
        style={{
          marginTop: "2vw",
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
        }}
      />
      <div style={{ position: "relative" }}>
        <MemoizedVerticalButtons isMap={false} isList={true} />
        <Wrapper>
          <SearchBar />
          <CardWrapper>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => {
              return <RestCard />;
            })}
          </CardWrapper>
        </Wrapper>
      </div>
      {/* {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />} */}
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
