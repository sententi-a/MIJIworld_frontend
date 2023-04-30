import styled from "styled-components";

export default function RestTicket({ restInfo }: any) {
  return (
    <>
      <Slogan color={restInfo.countryNameColor}>
        Eat the World, Meet the World! <p>나만의 여행 티켓 만들기</p>
      </Slogan>
      <FormWrapper>
        <img
          src={require(`../assets/images/restaurant/${restInfo.restName}/ticket@2x.png`)}
        ></img>
      </FormWrapper>
    </>
  );
}

const Slogan = styled.div<{ color: string }>`
  font-family: yg-jalnan;
  font-size: 1.7vw;
  color: ${(props) => props.color};
  p {
    font-family: Noto Sans KR;
    font-size: 1.4vw;
    margin: 0;
    color: #707070;
  }
`;

const FormWrapper = styled.div`
  width: 50vw;
  height: auto;
  margin: 3vh auto;
  padding: 3vh;
  border-radius: 20px;
  background-color: #fbfbfb;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  img {
    width: 80%;
  }
`;
