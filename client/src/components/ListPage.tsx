import styled from "styled-components";
import Logo from "./Logo";
import LogoPath from "../assets/images/logo/logo.png";
import VerticalButtons from "./VerticalButtons";
import BackImage from "./BackImage";
import Bg from "../assets/images/list/bg.png";
import RestCard from "./RestCard";

export default function ListPage() {
  return (
    <>
      <BackImage path={Bg}>
        <Logo src={LogoPath} />
        <VerticalButtons isMap={false} isList={true} />
        <Wrapper>
          <CardWrapper>
            {[1, 2, 3, 4, 5].map((elem) => {
              return <RestCard />;
            })}
          </CardWrapper>
        </Wrapper>
      </BackImage>
    </>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 10vw;
`;

const CardWrapper = styled.div`
  width: 52vw;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
  row-gap: 3vh;
`;
