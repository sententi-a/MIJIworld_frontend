import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface VerticalButtonProps {
  isMap: boolean;
  isList: boolean;
}

export default function VerticalButtons({
  isMap,
  isList,
}: VerticalButtonProps) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const routePath = isMap ? "/list" : "/map";
    navigate(routePath);
  };

  return (
    <>
      <VerticalBtnContainer>
        <VerticalBtn
          clicked={isMap}
          onClick={handleButtonClick}
          disabled={isMap ? true : false}
        >
          지도 보기
        </VerticalBtn>
        <VerticalBtn
          clicked={isList}
          onClick={handleButtonClick}
          disabled={isList ? true : false}
        >
          목록 보기
        </VerticalBtn>
      </VerticalBtnContainer>
    </>
  );
}

const VerticalBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  margin-top: 1vh;
`;

const VerticalBtn = styled.button<{ clicked: boolean }>`
  background-color: ${(props) => (props.clicked ? "#8d8de5" : "white")};
  font-family: Noto Sans KR;
  font-weight: 700;
  font-size: 1.2vw;
  color: ${(props) => (props.clicked ? "white" : "#8d8de5")};
  border: none;
  border-radius: 10px;
  width: 4vw;
  height: 15vh;
  // Text-align
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${(props) => (props.clicked ? "none" : "#aaaaf0")};
    color: ${(props) => (props.clicked ? "none" : "white")};
  }
`;
