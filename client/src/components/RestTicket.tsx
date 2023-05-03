import { useState } from "react";
import styled from "styled-components";
import CustomInput from "./CustomInput";
import DayPicker from "./DayPicker";

export default function RestTicket({ restInfo }: any) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [name, setName] = useState<String>("");
  const [company, setCompany] = useState<String>("");
  const [note, setNote] = useState<String>("");
  const [message, setMessage] = useState<String>("");

  const handleTicketDownload = () => {
    // 로컬에 티켓 사진 저장하기 / 로그인 기능 넣는다면, 티켓 저장소에 저장
    console.log("Save Button Clicked");
  };

  return (
    <>
      <Slogan color={restInfo.countryNameColor}>
        Eat the World, Meet the World! <p>나만의 여행 티켓 만들기</p>
      </Slogan>
      <FormWrapper>
        <div style={{ position: "relative", width: "80%" }}>
          <img
            src={require(`../assets/images/restaurant/${restInfo.restName}/ticket@2x.png`)}
            style={{ width: "100%" }}
          ></img>
          <ShowInputWrapper>
            <DateDiv>
              {selectedDate?.toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              (
              {selectedDate?.toLocaleDateString("ko-KR", {
                weekday: "short",
              })}
              )
            </DateDiv>
            <NameDiv>{name}</NameDiv>
            <CompanyDiv>{company}</CompanyDiv>
            <NoteDiv>{note}</NoteDiv>
            <MessageDiv>{message}</MessageDiv>
          </ShowInputWrapper>
        </div>
        <DayPicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <CustomInput handleChange={setName} label={"이름"} />
        <CustomInput handleChange={setCompany} label={"동행"} />
        <CustomInput handleChange={setNote} label={"노트"} />
        <CustomInput handleChange={setMessage} label={"ETC"} />
        <SaveButton onClick={handleTicketDownload}>다운로드</SaveButton>
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
const ShowInputWrapper = styled.div`
  z-index: 1;
  font-size: 0.6vmin;
  font-weight: 700;
  color: #464746;
`;

const DateDiv = styled.div`
  width: 9vw;
  position: absolute;
  top: 36.5%;
  left: 3.3%;
  // border: 1px solid red;
`;

const NameDiv = styled.div`
  width: 20%;
  position: absolute;
  top: 18%;
  right: 4%;
  border: 1px solid blue;
`;

const CompanyDiv = styled.div`
  width: 20%;
  position: absolute;
  top: 33%;
  right: 4%;
  border: 1px solid pink;
`;

const NoteDiv = styled.div`
  width: 20%;
  position: absolute;
  top: 49%;
  right: 4%;
  border: 1px solid green;
`;

const MessageDiv = styled.div`
  width: 20%;
  position: absolute;
  top: 65%;
  right: 4%;
  border: 1px solid red;
`;

const SaveButton = styled.button`
  padding: 5px 20px 5px 20px;
  height: auto;
  border: none;
  border-radius: 30px;
  // color: #707070;
  background-color: #df9391;
  margin-top: 2vh;
  font-weight: bold;
  font-size: 1.5vw;
  color: white;
  box-shadow: 0 2px 4px 0 #dddddd;

  :hover {
    // background-color: white;
    background-color: #db7976;
    cursor: pointer;
  }
`;
