import { useRef } from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import ModalBodyContent from "./ModalBodyContent";

interface ModalProps {
  setIsModalOpen: (open: boolean) => void;
}

export default function Modal({ setIsModalOpen }: ModalProps) {
  const headerColor = "#ef2345";
  const restName = "samarkant";
  const restNameKr = "사마르칸트";
  const restBusinessHour = "월-토 11:30 - 21:00";
  const restAddress = "서울 용산구 녹사평대로 174-11";
  const restMapId = 18577297;
  const latitude = 33.450701;
  const longitude = 126.570667;
  const restIntroduction = `사마르칸트는 녹사평로에 위치한 우즈베키스탄 음식점입니다. \n어쩌구저쩌구할 수 있어 어쩌구`;
  const menus = [
    { name: "menu1Name", explain: "menu1Explain\nExplain", price: 1000 },
    { name: "menu2Name", explain: "menu2Explain\nExplain", price: 1000 },
    { name: "menu3Name", explain: "menu3Explain\nExplain", price: 1000 },
  ];
  const countryWord = "Thank you for the meal!";
  const countryName = "우즈베키스탄";
  const countryNameColor = "#10ef10";

  const restInfo = {
    restName,
    restNameKr,
    restBusinessHour,
    restAddress,
    restMapId,
    latitude,
    longitude,
    restIntroduction,
    countryWord,
    menus,
    countryNameColor,
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside (==Backdrop)
  const clickModalOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (modalRef.current === event.target) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Backdrop ref={modalRef} onClick={(event) => clickModalOutside(event)}>
        <ModalBg>
          <ModalHeader color={headerColor}>
            <CloseButtonContainer>
              <CloseOutlined onClick={closeModal} />
            </CloseButtonContainer>
            <ModalHeaderContent>
              <CountryImage
                src={require(`../assets/images/restaurant/${restName}/flag.png`)}
              />
              <CountryName color={countryNameColor}>{countryName}</CountryName>
            </ModalHeaderContent>
          </ModalHeader>
          <ModalBodyContent restInfo={restInfo} />
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
  overflow: scroll;
`;

const ModalHeader = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 80vw;
  height: 10vh;
  position: fixed;
  z-index: 10;
`;

const ModalHeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const CloseButtonContainer = styled.div`
  font-size: 2vw;
  float: right;
  transform: translate(-50%, 50%);
`;

const CountryImage = styled.img`
  width: 6%;
  height: auto;
  object-fit: contain;
`;

const CountryName = styled.div<{ color: string }>`
  font-family: yg-jalnan;
  font-size: 1.4vw;
  font-weight: 700;
  color: ${(props) => props.color || "black"};
  margin-left: 1vw;
`;

export { CountryImage, CountryName };
