import styled, { css } from "styled-components";
import React from "react";

interface CustomProps {
  bgColor?: string;
  clicked?: boolean;
  label?: string;
  isVertical?: boolean;
  hoverColor?: string;
  size?: "small" | "medium" | "large";
}

export default function Button(
  props: React.HTMLAttributes<HTMLButtonElement> & CustomProps
) {
  return (
    <>
      <CustomButton {...props}>{props.label || "버튼"}</CustomButton>
    </>
  );
}

const CustomButton = styled.button<CustomProps>`
  font-family: "Noto Sans KR";
  font-weight: 700;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;

  background-color: ${(props) =>
    props.clicked ? props.bgColor || "#8d8de5" : "white"};
  color: ${(props) => (props.clicked ? "white" : props.bgColor || "#8d8de5")};

  :hover {
    background-color: ${(props) =>
      props.clicked ? "none" : props.hoverColor || "#aaaaf0"};
    color: ${(props) => (props.clicked ? "none" : "white")};
  }

  ${(props) => props.isVertical && "width: 4vw; height: 15vh;"}
  ${(props) => getButtonSize(props.size || "medium", props.isVertical)}
`;

const getButtonSize = (size: string, isVertical?: boolean) => {
  let properties = ``;

  switch (size) {
    case "small":
      properties = `font-size: 1.1vw; `;
      if (isVertical) {
        properties = properties.concat(`width: 3vw; height: 14vh;`);
      } else {
        properties = properties.concat(
          `height: 4vh; padding: 6px 18px 6px 18px;`
        );
      }
      return css`
        ${properties}
      `;

    case "medium":
      properties = `font-size: 1.3vw; `;

      if (isVertical) {
        properties = properties.concat(`width: 4vw; height: 15vh;`);
        console.log(properties);
      } else {
        properties = properties.concat(
          `height: 5vh; padding: 8px 20px 8px 20px;`
        );
      }

      return css`
        ${properties}
      `;

    case "large":
      properties = `font-size: 2vw; border-radius: 30px; `;

      if (isVertical) {
        properties = properties.concat(`width: 5vw; height: 18vh`);
      } else {
        properties = properties.concat(
          `height: 6vh; padding: 10px 30px 10px 30px;`
        );
      }

      return css`
        ${properties}
      `;
  }
};
