import { useState } from "react";

export default function useToggle() {
  const [isDown, setIsDown] = useState(false);

  const handleOnClick = () => {
    setIsDown((prev) => !prev);
  };

  return { isDown, handleOnClick };
}
