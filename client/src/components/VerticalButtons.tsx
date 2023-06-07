import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useCallback } from "react";
import Button from "../components/Button";

export interface VerticalButtonProps {
  isMap: boolean;
  isList: boolean;
}

function VerticalButtons({ isMap, isList }: VerticalButtonProps) {
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
        />
      </VerticalBtnContainer>
    </>
  );
}

const VerticalBtnContainer = styled.div`
  position: absolute;
  right: 0;
  float: right;
  margin-top: 1vh;
`;

export const MemoizedVerticalButtons = React.memo(
  VerticalButtons,
  (prev: VerticalButtonProps, next: VerticalButtonProps) => {
    return prev.isMap === next.isMap && prev.isList === next.isList;
  }
);
