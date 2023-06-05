import React from "react";
import styled from "styled-components";

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: "small" | "medium" | "large" | "xlarge";
  src: string;
}

function Img({ src, size }: ImageProps) {
  return <CustomImage src={src} className={size ? size : "small"} />;
}

const CustomImage = styled.img`
  &.small {
    width: 3vw;
  }

  &.medium {
    width: 8vw;
  }

  &.large {
    width: 20vw;
  }

  &.xlarge {
    width: 50vw;
  }
`;

const Image = React.memo(Img);

export default Image;
