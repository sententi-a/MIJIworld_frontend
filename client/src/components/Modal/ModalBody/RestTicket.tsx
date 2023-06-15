import { Text } from "@components/common";
import TicketCard from "../ModalCommon/TicketCard";

interface RestTicketProps {
  restName: string;
}

export default function RestTicket({ restName }: RestTicketProps) {
  return (
    <RestTicketWrapper>
      <Text
        text="Eat the World, Meet the World!"
        fancy={true}
        // TODO: color 바꾸기
        style={{ color: "red" }}
      />
      <Text text="나만의 여행 티켓 만들기" size="t5" />
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
      }}
    >
      {children}
    </div>
  );
}
