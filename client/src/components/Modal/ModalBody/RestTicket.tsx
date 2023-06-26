import { Text } from "@components/common";
import TicketCard from "../ModalCommon/TicketCard";
import ModalSubTitle from "../ModalCommon/ModalSubTitle";

interface RestTicketProps {
  restName: string;
}

export default function RestTicket({ restName }: RestTicketProps) {
  return (
    <RestTicketWrapper>
      <ModalSubTitle restName={restName} text="티켓 만들기" />
      <Text
        text="Eat the World, Meet the World!"
        size="t5"
        style={{ marginBottom: "1vh" }}
      />
      <TicketCard restName={restName} />
    </RestTicketWrapper>
  );
}

interface RestTicketWrapperProps {
  children: React.ReactNode;
}

function RestTicketWrapper({ children }: RestTicketWrapperProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "30px",
        gap: "0.5vmax",
        width: "80%",
      }}
    >
      {children}
    </div>
  );
}
