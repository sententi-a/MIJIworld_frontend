import styled from "styled-components";
import CustomInput from "./CustomInput";
import DayPicker from "./DayPicker";

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
        {/* <InputWrapper> */}
        <DayPicker />
        <CustomInput label={"이름"} />
        <CustomInput label={"동행"} />
        <CustomInput label={"노트"} />
        <CustomInput label={"ETC"} />
        {/* </InputWrapper> */}
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
  width: 80%;
  height: auto;
  margin: 30px auto;
  padding: 30px;
  border-radius: 20px;
  background-color: #fbfbfb;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80%;
  }
`;

const InputWrapper = styled.div`
  // width: 80%;
  // display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
