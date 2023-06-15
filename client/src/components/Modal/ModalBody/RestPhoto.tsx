import RestPhotoSlide from "@components/Modal/ModalCommon/RestPhotoSlide";

interface RestPhotoProps {
  restName: string;
}

export default function RestPhoto({ restName }: RestPhotoProps) {
  return (
    <RestPhotoWrapper>
      <RestPhotoSlide restName={restName} />
    </RestPhotoWrapper>
  );
}

interface RestPhotoWrapperProps {
  children: React.ReactNode;
}

function RestPhotoWrapper({ children }: RestPhotoWrapperProps) {
  return <div style={{}}>{children}</div>;
}
