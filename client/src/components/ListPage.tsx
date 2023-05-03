import styled from "styled-components";
import Logo from "./Logo";
import LogoPath from "../assets/images/logo/logo.png";
import VerticalButtons from "./VerticalButtons";
import BackImage from "./BackImage";
import Bg from "../assets/images/list/bg.png";
import RestCard from "./RestCard";
import SearchBar from "./SearchBar";

export default function ListPage() {
  return (
    <>
      <BackImage path={Bg}>
        <Logo src={LogoPath} />
        <VerticalButtons isMap={false} isList={true} />
        <Wrapper>
          <SearchBar />
          <CardWrapper>
            {[1, 2, 3, 4, 5, 6, 7].map((elem) => {
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
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: 8vmax;
`;

const CardWrapper = styled.div`
  width: 52vw;
  text-align: center;
  display: grid;
  justify-content: space-evenly;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(25vmax, 25vmax));
  margin: 20px;
  row-gap: 3vh;
  // col-gap: 3vw;
`;
