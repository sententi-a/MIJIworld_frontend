import React from "react";
import styled from "styled-components";

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge";
  src: string;
}

function Image_({ src, size, ...props }: ImageProps) {
  return <CustomImage src={src} className={size ? size : "small"} {...props} />;
}

const CustomImage = styled.img`
  &.small {
    width: 2.5vw;
  }

  &.medium {
    width: 6vw;
  }

  &.large {
    width: 20vw;
  }

  &.xlarge {
    width: 40vw;
  }

  &.xxlarge {
    width: 90vw;
  }
`;

const Image = React.memo(Image_);
export default Image;
