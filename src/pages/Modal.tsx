import React from "react";
import { Backdrop } from "@components/common";
import ModalHeader from "@components/Modal/ModalHeader/ModalHeader";
import ModalBody from "@components/Modal/ModalBody/ModalBody";
import { useRestaurants } from "@hooks/queries/restaurant";
import useModal from "@hooks/useModal";

interface ModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  restName: string;
}

export default function Modal({ setIsModalOpen, restName }: ModalProps) {
  const { modalRef, closeModal, clickModalOutside } = useModal(setIsModalOpen);

  const { data } = useRestaurants(restName);
  const restData = data[0];

  return (
    <>
      <Backdrop ref={modalRef} onClick={(event) => clickModalOutside(event)}>
        <ModalWrapper>
          <ModalHeader
            restName={restName}
            handleOnClick={closeModal}
            country={restData.country}
          />
          <ModalBody restName={restName} restData={restData} />
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
