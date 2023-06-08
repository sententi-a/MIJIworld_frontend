import { useRef } from "react";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import ModalBodyContent from "./ModalBodyContent";
import React from "react";
import Image from "./common/Image";
import Text from "./common/Text";
import Horizontal from "./common/Horizontal";

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
          <ModalHeader backgroundColor={headerColor}>
            <Horizontal>
              <Image
                src={require(`../assets/images/restaurant/${restName}/flag.png`)}
              />
              <Text
                text={countryName}
                fancy={true}
                style={{ color: countryNameColor }}
              />
            </Horizontal>
            <CloseOutlined
              onClick={closeModal}
              style={{
                fontSize: "2.3vw",
                color: "white",
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translate(-50%, -50%)",
              }}
            />
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
  z-index: 10;
`;

const ModalBg = styled.div`
  background-color: white;
  width: 80vw;
  height: 90vh;

  text-align: center;
  overflow: scroll;
`;

interface ModalHeaderProps {
  backgroundColor: string;
  children: React.ReactNode;
}

function ModalHeader({ backgroundColor, children }: ModalHeaderProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "6vw",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor,
      }}
    >
      <div
        style={{ height: "100%", display: "flex", justifyContent: "center" }}
      >
        {children}
      </div>
    </div>
  );
}
