import RestPhotoSlide from "@components/Modal/ModalCommon/RestPhotoSlide";

export default function RestPhoto({ restInfo }: any) {
  return (
    <RestPhotoWrapper>
      <RestPhotoSlide restName={restInfo.restName} />
    </RestPhotoWrapper>
  );
}

interface RestPhotoWrapperProps {
  children: React.ReactNode;
}

function RestPhotoWrapper({ children }: RestPhotoWrapperProps) {
  return <div style={{}}>{children}</div>;
}
