import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useCallback } from "react";
import Button from "@components/common/Button";

export interface VerticalButtonProps {
  isMap: boolean;
  isList: boolean;
}

function VerticalButtons_({ isMap, isList }: VerticalButtonProps) {
  const navigate = useNavigate();

  const handleButtonClick = useCallback(() => {
    const routePath = isMap ? "/list" : "/map";
    navigate(routePath);
  }, [navigate]);

  return (
    <>
      <VerticalBtnContainer>
        <Button
          clicked={isMap}
          onClick={isList ? handleButtonClick : undefined}
          label="지도 보기"
          isVertical={true}
          size="medium"
          bgColor={isMap ? undefined : "#ffffff"}
          fontColor={isMap ? undefined : "#8d8de5"}
          hoverColor={isMap ? undefined : "#faf5ff"}
          style={{ zIndex: 10 }}
        />
        <Button
          clicked={isList}
          onClick={isMap ? handleButtonClick : undefined}
          label="목록 보기"
          isVertical={true}
          size="medium"
          bgColor={isList ? undefined : "#ffffff"}
          fontColor={isList ? undefined : "#8d8de5"}
          hoverColor={isList ? undefined : "#faf5ff"}
          style={{ zIndex: 10 }}
        />
      </VerticalBtnContainer>
    </>
  );
}

const VerticalBtnContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  float: right;
  margin-top: 1vh;
`;

const VerticalButtons = React.memo(
  VerticalButtons_,
  (prev: VerticalButtonProps, next: VerticalButtonProps) => {
    return prev.isMap === next.isMap && prev.isList === next.isList;
  }
);

export default VerticalButtons;
