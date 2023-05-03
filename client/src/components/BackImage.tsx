import styled from "styled-components";

interface BackImageProps {
  path: string;
}

const BackImage = styled.div<BackImageProps>`
  background: url(${(props) => props.path}) no-repeat center center fixed;
  background-size: cover;
  width: 100vw;
  min-height: 100vh;
`;

export default BackImage;
