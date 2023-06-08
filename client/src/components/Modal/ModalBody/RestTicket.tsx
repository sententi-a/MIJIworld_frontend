import { Text } from "@components/common";
import TicketCard from "../ModalCommon/TicketCard";

export default function RestTicket({ restInfo }: any) {
  return (
    <RestTicketWrapper>
      <Text
        text="Eat the World, Meet the World!"
        fancy={true}
        style={{ color: restInfo.countryNameColor }}
      />
      <Text text="나만의 여행 티켓 만들기" size="t5" />
      <TicketCard restName={restInfo.restName} />
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
