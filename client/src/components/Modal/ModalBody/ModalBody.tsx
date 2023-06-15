import RestOverview from "@components/Modal/ModalBody/RestOverview";
import RestMenu from "@components/Modal/ModalBody/RestMenu";
import RestPhoto from "@components/Modal/ModalBody/RestPhoto";
import RestReview from "./RestReview";
import RestTicket from "./RestTicket";

interface ModalBodyProps {
  restName: string;
}

export default function ModalBody({ restName }: ModalBodyProps) {
  return (
    <ModalBodyWrapper>
      <RestOverview restName={restName} />

      <RestMenu restName={restName} />

      <RestPhoto restName={restName} />

      <RestReview restName={restName} />

      <RestTicket restName={restName} />
    </ModalBodyWrapper>
  );
}

interface ModalBodyWrapperProps {
  children: React.ReactNode;
}

function ModalBodyWrapper({ children }: ModalBodyWrapperProps) {
  return <div>{children}</div>;
}
