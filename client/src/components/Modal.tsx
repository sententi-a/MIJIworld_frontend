import styled from "styled-components";
import Close from "../assets/images/icon/exit1.png";
import { CloseOutlined } from "@ant-design/icons";

export default function Modal() {
  const headerColor = "#ef2345";
  const restName = "samarkant";
  const restNameKr = "사마르칸트";
  const countryName = "우즈베키스탄";
  const countryNameColor = "#10ef10";

  return (
    <>
      <Backdrop>
        <ModalBg>
          <ModalHeader color={headerColor}>
            <CountryImage
              src={require(`../assets/images/restaurant/${restName}/flag.png`)}
            />
            <CountryName color={countryNameColor}>{countryName}</CountryName>
            <CloseOutlined style={{ fontSize: "2vw" }} />
          </ModalHeader>
        </ModalBg>
      </Backdrop>
    </>
  );
}

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBg = styled.div`
  background-color: white;
  width: 80vw;
  height: 90vh;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ModalHeader = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  height: 10vh;
  display: flex;
  text-align: center;
  jusify-content: center;
  align-items: center;
`;

const CountryImage = styled.img`
  width: 6%;
  height: auto;
`;

const CountryName = styled.div<{ color: string }>`
  font-family: yg-jalnan;
  font-size: 1.4vw;
  color: ${(props) => props.color || "black"};
`;
