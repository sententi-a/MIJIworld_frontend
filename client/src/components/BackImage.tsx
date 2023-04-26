import styled from "styled-components";

interface BackImageProps {
  path: string;
}

const BackImage = styled.div<BackImageProps>`
  background-image: url(${(props) => props.path});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export default BackImage;
