import styled, { css } from "styled-components";
import React from "react";

interface CustomProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
  clicked?: boolean;
  label?: string;
  isVertical?: boolean;
  size?: "small" | "medium" | "large";
}

export default function Button({
  color = "#8d8de5",
  clicked = false,
  label = "버튼",
  isVertical = false,
  size = "medium",
  ...props
}: CustomProps) {
  return (
    <>
      <CustomButton
        color={color}
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
  background-color: ${(props) => props.color};
  z-index: 10;

  ${(props) => getFontColor(props.color)}
  ${(props) => getButtonSize(props.size, props.isVertical)}

  :hover {
    ${(props) => (props.clicked ? "" : "filter: brightness(0.9)")}
  }
`;

// Get RGB number based on the color given
// It just parses the color code and make it decimal int type
const getRGB = (color: string): number[] => {
  const hexColor = color.replace("#", "");
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  return [r, g, b];
};

// Get Font Color based on the background-color of the Button
// It returns color: white if the color is dark enough, color: black vice versa.
const getFontColor = (bgColor: string | undefined) => {
  if (bgColor) {
    const [r, g, b] = getRGB(bgColor);
    const brightness = (0.1 * r + 0.1 * g + 0.1 * b) / 255;

    return brightness <= 0.5
      ? css`
          color: white;
        `
      : css`
          color: black;
        `;
  }

  return css`
    color: black;
  `;
};

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
