import React, { useRef } from "react";

export default function useModal(
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking button
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close modal when clicking outside (==Backdrop)
  const clickModalOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (modalRef.current === event.target) {
      setIsModalOpen(false);
    }
  };

  return { modalRef, closeModal, clickModalOutside };
}
