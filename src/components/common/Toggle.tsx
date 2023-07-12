import React from "react";
import { useState, useCallback } from "react";

interface ToggleProps {
  children: (isDown: boolean) => React.ReactNode;
  // setIsDown: Function;
  showComponent?: JSX.Element | null;
}

function Toggle_({ children, showComponent }: ToggleProps) {
  const [isDown, setIsDown] = useState(false);

  // declare a function when first mounted
  const toggleUpDown = useCallback(() => {
    setIsDown((prev: boolean) => !prev);
  }, []);

  return (
    <div onClick={() => toggleUpDown()}>
      {children(isDown)}
      {isDown && showComponent}
    </div>
  );
}

const Toggle = React.memo(Toggle_);
export default Toggle;
