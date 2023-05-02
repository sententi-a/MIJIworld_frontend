import { useState } from "react";
import styled from "styled-components";
import RestMap from "./RestMap";

export default function RestBasicInfo({ restInfo }: any) {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const toggleMapOpen = () => {
    setIsMapOpen(!isMapOpen);
  };

  return (
    <>
      <RestName>{restInfo.restNameKr}</RestName>
      <RestBusinessHour>
        <strong>영업 시간 </strong>| {restInfo.restBusinessHour}
      </RestBusinessHour>
      <RestAddress onClick={toggleMapOpen}>
        <strong>{!isMapOpen ? "▶" : "▼"} 주소 </strong>| {restInfo.restAddress}
      </RestAddress>
      {isMapOpen && <RestMap restInfo={restInfo} />}
      <RestIntroduction>{restInfo.restIntroduction}</RestIntroduction>
      <DinnerGreeting>
        잘 먹겠습니다! <br />
        {restInfo.countryWord}
      </DinnerGreeting>
    </>
  );
}

const RestName = styled.h1`
  font-size: 3vw;
  font-weight: 900;
  margin: 20px 0 10px 0;
`;

const RestBusinessHour = styled.div`
  font-size: 1.5vw;
  font-weight: 500;
`;

const RestAddress = styled.div`
  font-size: 1.5vw;
  font-weight: 500;
  margin-top: 1vh;

  :hover {
    color: #8d8de5;
    cursor: pointer;
  }
`;

const RestIntroduction = styled.p`
  font-size: 1.4vw;
  font-weight: 400;
  white-space: pre-line;
  margin: 4vh;
`;

const DinnerGreeting = styled.p`
  font-size: 1.4vw;
  font-weight: 500;
`;
