import RestOverview from "@components/Modal/ModalBody/RestOverview";
import RestMenu from "@components/Modal/ModalBody/RestMenu";
import RestPhoto from "@components/Modal/ModalBody/RestPhoto";
import RestReview from "./RestReview";
import RestTicket from "./RestTicket";

export default function ModalBody({ restInfo }: any) {
  return (
    <ModalBodyWrapper>
      <RestOverview restInfo={restInfo} />

      <RestMenu restInfo={restInfo} />

      <RestPhoto restInfo={restInfo} />

      <RestReview restInfo={restInfo} />

      <RestTicket restInfo={restInfo} />
    </ModalBodyWrapper>
  );
}

interface ModalBodyWrapperProps {
  children: React.ReactNode;
}

function ModalBodyWrapper({ children }: ModalBodyWrapperProps) {
  return <div>{children}</div>;
}
