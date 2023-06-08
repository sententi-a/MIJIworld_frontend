import RestOverview from "@components/Modal/ModalBody/RestOverview";
import RestMenu from "@components/Modal/ModalBody/RestMenu";
import RestPhoto from "@components/Modal/ModalBody/RestPhoto";
import RestReview from "./Modal/ModalBody/RestReview";
import RestTicket from "./Modal/ModalBody/RestTicket";

export default function ModalBodyContent({ restInfo }: any) {
  return (
    <>
      <RestOverview restInfo={restInfo} />

      <RestMenu restInfo={restInfo} />

      <RestPhoto restInfo={restInfo} />

      <RestReview restInfo={restInfo} />

      <RestTicket restInfo={restInfo} />
    </>
  );
}

interface ModalBodyProps {
  children: React.ReactNode;
}

function ModalBody({ children }: ModalBodyProps) {
  return <div>{children}</div>;
}
