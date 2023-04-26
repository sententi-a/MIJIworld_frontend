import Logo from "./Logo";
import LogoPath from "../assets/images/logo/logo.png";
import VerticalButtons from "./VerticalButtons";
import BackImage from "./BackImage";
import Bg from "../assets/images/list/bg.png";

export default function ListPage() {
  return (
    <>
      <BackImage path={Bg}>
        <Logo src={LogoPath} />
        <VerticalButtons isMap={false} isList={true} />
      </BackImage>
    </>
  );
}
