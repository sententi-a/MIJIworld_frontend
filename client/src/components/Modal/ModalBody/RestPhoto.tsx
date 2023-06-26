import RestPhotoSlide from "@components/Modal/ModalCommon/RestPhotoSlide";
import ModalSubTitle from "@components/Modal/ModalCommon/ModalSubTitle";

interface RestPhotoProps {
  restName: string;
}

export default function RestPhoto({ restName }: RestPhotoProps) {
  return (
    <RestPhotoWrapper>
      <ModalSubTitle restName={restName} text="음식점 사진" />
      <RestPhotoSlide restName={restName} />
    </RestPhotoWrapper>
  );
}

interface RestPhotoWrapperProps {
  children: React.ReactNode;
}

function RestPhotoWrapper({ children }: RestPhotoWrapperProps) {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "2vmax",
        width: "80%",
      }}
    >
      {children}
    </div>
  );
}
