import styled from "styled-components";

interface VerticalBtnProps {
  text: string;
  clicked: boolean;
}

export default function VerticalBtn({ text, clicked }: VerticalBtnProps) {
  return <Btn clicked={clicked}>{text}</Btn>;
}

const Btn = styled.button<{ clicked: boolean }>`
  background-color: ${(props) => (props.clicked ? "#8d8de5" : "white")};
  font-family: Noto Sans KR;
  font-weight: 700;
  font-size: 1.2vw;
  color: ${(props) => (props.clicked ? "white" : "#8d8de5")};
  border: none;
  border-radius: 10px;
  width: 5vw;
  height: 15vh;
  // Text-align
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${(props) => (props.clicked ? "none" : "#aaaaf0")};
    color: ${(props) => (props.clicked ? "none" : "white")};
  }
`;
