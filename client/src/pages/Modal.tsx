import React from "react";
import { useRef } from "react";
import { Backdrop } from "@components/common";
import ModalHeader from "@components/Modal/ModalHeader/ModalHeader";
import ModalBody from "@components/Modal/ModalBody/ModalBody";

interface ModalProps {
  setIsModalOpen: (open: boolean) => void;
  restName: string;
}

export default function Modal({ setIsModalOpen, restName }: ModalProps) {
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
        <ModalWrapper>
          <ModalHeader restName={restName} handleOnClick={closeModal} />
          <ModalBody restName={restName} />
        </ModalWrapper>
      </Backdrop>
    </>
  );
}

interface ModalWrapperProps {
  children: React.ReactNode;
}
function ModalWrapper({ children }: ModalWrapperProps) {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "80vw",
        height: "90vh",
        textAlign: "center",
        overflow: "scroll",
      }}
    >
      {children}
    </div>
  );
}
