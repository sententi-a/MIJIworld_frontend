import styled from "styled-components";
import { CountryImage, CountryName } from "./Modal";
import { RestDishImg, RestName } from "./RestDialog";

export default function RestCard() {
  const restName = "samarkant";
  const restNameKr = "사마르칸트";
  const restAddress = "서울 종로구 희우정로 110-40";
  const restBusinessHour = "매일 오전 11:00 - 오후 5:00";
  const countryName = "우즈베키스탄";

  return (
    <>
      <Card>
        <CountryHeader>
          <CountryImage
            src={require(`../assets/images/restaurant/${restName}/flag.png`)}
            style={{ width: "20%" }}
          ></CountryImage>
          <CountryName color={"#707070"} style={{ fontFamily: "Noto Sans KR" }}>
            {countryName}
          </CountryName>
        </CountryHeader>
        <InnerCard>
          <RestDishImg
            src={require(`../assets/images/restaurant/${restName}/menu1.png`)}
          />
          <RestBasicInfoContainer>
            <RestName style={{ width: "auto" }}>{restNameKr}</RestName>
            <DetailText>{restAddress}</DetailText>
            <DetailText>{restBusinessHour}</DetailText>
          </RestBasicInfoContainer>
        </InnerCard>
      </Card>
    </>
  );
}

const Card = styled.div`
  width: 25vmax;
  background-color: rgba(255, 255, 255, 0.123);
  box-shadow: 0px 0px 10px rgba(105, 103, 103, 0.116);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const CountryHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerCard = styled.div`
  width: 80%;
  background-color: rgba(248, 248, 248, 0.342);
  box-shadow: 0px 0px 10px rgba(141, 137, 137, 0.116);
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
`;

const RestBasicInfoContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DetailText = styled.div`
  font-size: 1.1vw;
  font-weight: 400;
  color: #707070;
`;
