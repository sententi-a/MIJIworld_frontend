import { useState } from "react";
import styled from "styled-components";

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
      {isMapOpen && <div />}
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
`;
