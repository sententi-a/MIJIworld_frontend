import React, { useRef, useCallback, useState } from "react";

export default function useModal(
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [currentRest, setCurrentRest] = useState("");

  // When trigger is clicked, open the modal
  const handleTriggerClick = useCallback(
    (restName: string) => {
      setIsModalOpen(true);
      setCurrentRest(restName);
    },
    [setIsModalOpen, setCurrentRest]
  );

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

  return {
    currentRest,
    handleTriggerClick,
    modalRef,
    closeModal,
    clickModalOutside,
  };
}
