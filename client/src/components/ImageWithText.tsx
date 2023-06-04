// image의 크기, 텍스트의 속성
import React from "react";
import styled, { css } from "styled-components";

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {}
interface TextProps extends React.HTMLAttributes<HTMLDivElement> {}

interface ImageWithTextProps {
  imageProps?: ImageProps;
  textProps?: TextProps;
  imgSrc: string;
  text: string;
  isVertical?: boolean;
}

function ImgWithText({
  imageProps,
  textProps,
  imgSrc,
  text,
  isVertical,
}: ImageWithTextProps) {
  return (
    <div>
      <Container isVertical={isVertical}>
        <Image src={imgSrc} {...imageProps} />
        <Text {...textProps}>{text}</Text>
      </Container>
    </div>
  );
}

const Container = styled.div<{ isVertical?: boolean }>`
  ${(props) =>
    props.isVertical
      ? ""
      : "display: flex; justify-content: center; align-items: center; "}
`;

const Image = styled.img`
  height: auto;
  object-fit: contain;
`;

const Text = styled.div`
  font-family: yg-jalnan;
  font-weight: 700;
  margin: 1vw;
`;

const ImageWithText = React.memo(ImgWithText);

export default ImageWithText;
