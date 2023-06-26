import { Text } from "@components/common";
import TicketCard from "../ModalCommon/TicketCard";
import { useColor } from "@hooks/useColor";

interface RestTicketProps {
  restName: string;
}

export default function RestTicket({ restName }: RestTicketProps) {
  const { data } = useColor(restName);

  return (
    <RestTicketWrapper>
      <Text
        text="Eat the World, Meet the World!"
        fancy={true}
        style={{ color: data ? data.text_color : "#707070" }}
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
