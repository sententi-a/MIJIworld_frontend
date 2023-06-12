import styled, { css } from "styled-components";
import React from "react";

interface CustomProps extends React.HTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  fontColor?: string;
  hoverColor?: string;
  clicked?: boolean;
  label?: string;
  isVertical?: boolean;
  size?: "small" | "medium" | "large";
}

function Button_({
  bgColor = "#8d8de5",
  fontColor = "#ffffff",
  hoverColor = "#7272db",
  clicked = false,
  label = "버튼",
  isVertical = false,
  size = "medium",
  ...props
}: CustomProps) {
  return (
    <>
      <CustomButton
        bgColor={bgColor}
        fontColor={fontColor}
        hoverColor={hoverColor}
        clicked={clicked}
        isVertical={isVertical}
        size={size}
        disabled={clicked}
        {...props}
      >
        {label}
      </CustomButton>
    </>
  );
}

const CustomButton = styled.button<CustomProps>`
  font-family: Noto Sans KR;
  font-weight: 700;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};

  ${(props) => getButtonSize(props.size, props.isVertical)}

  :hover {
    ${(props) =>
      props.clicked
        ? ""
        : props.hoverColor
        ? `background-color: ${props.hoverColor}`
        : "filter: brightness(0.9)"}
  }
`;

const getButtonSize = (size: string | undefined, isVertical?: boolean) => {
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

const Button = React.memo(Button_);
export default Button;
