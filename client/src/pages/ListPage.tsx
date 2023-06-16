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
import { useState, useEffect, Suspense } from "react";
import { useRestaurants } from "@hooks/restaurant";

export default function ListPage() {
  const { data } = useRestaurants();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRest, setCurrentRest] = useState("");

  const handleCardClick = (restName: string) => {
    setIsModalOpen((prev) => !prev);
    setCurrentRest(restName);
  };

  return (
    <>
      <Background bgPath={BgImage} />
      <Logo isMain={false} />
      <VerticalButtons isMap={false} isList={true} />
      <Wrapper>
        <SearchBar />
        {/* TODO: RestCardList 컴포넌트로 만들기 */}
        <Grid>
          {/* TODO: 수정 */}
          <Suspense fallback={<div>만드는 중</div>}>
            {data &&
              data.map((elem: typeof data) => (
                <RestCard
                  key={"restCard " + elem.en_name}
                  restName={elem.en_name}
                  krRestName={elem.kr_name}
                  country={elem.country}
                  address={elem.address}
                  businessHour={elem.business_hour}
                  handleOnClick={() => handleCardClick(elem.en_name)}
                />
              ))}
          </Suspense>
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
