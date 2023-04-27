import { useRef } from "react";
import styled from "styled-components";
import Close from "../assets/images/icon/exit1.png";
import { CloseOutlined } from "@ant-design/icons";

interface ModalProps {
  setIsModalOpen: (open: boolean) => void;
}

export default function Modal({ setIsModalOpen }: ModalProps) {
  const headerColor = "#ef2345";
  const restName = "samarkant";
  const restNameKr = "사마르칸트";
  const countryName = "우즈베키스탄";
  const countryNameColor = "#10ef10";

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside (==Backdrop)
  const clickModalOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (modalRef.current == event.target) {
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
  color: ${(props) => props.color || "black"};
  margin-left: 1vw;
`;
