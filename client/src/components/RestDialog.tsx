import styled from "styled-components";

export default function RestDialog() {
  const country = "우즈베키스탄";
  const restName = "samarkant";
  const restNameKr = "사마르칸트";
  const restNameColor = "#10ef10";

  return (
    <>
      <DialogContainer>
        <CountryText color={restNameColor}>{country}</CountryText>
        <RestInfoContainer>
          <RestDishImg
            src={require(`@assets/images/restaurant/${restName}/menu1.png`)}
          />
          <RestName>{restNameKr}</RestName>
        </RestInfoContainer>
      </DialogContainer>
    </>
  );
}

const DialogContainer = styled.div`
  width: 20vw;
  height: 15vh;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  text-align: center;
  position: absolute;
  //TODO: delete it
  top: 0;
  left: 50%;
`;

const CountryText = styled.div<{ color: string }>`
  font-family: yg-jalnan;
  font-size: 1.3vw;
  color: ${(props) => props.color || "black"};
  margin-top: 3%;
`;

const RestInfoContainer = styled.div`
  width: 80%;
  height: 50%;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: space-between;
  align-items: center;
  margin: 0 auto;
`;

const RestDishImg = styled.img`
  width: 25%;
  height: auto;
  margin-left: 3%;
`;

const RestName = styled.div`
  width: 60%;
  font-family: Noto Sans KR;
  font-size: 1.2vw;
  font-weight: 500;
  color: #555;
`;

export { RestDishImg, RestName };
