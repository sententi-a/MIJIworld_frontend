import { Text, Horizontal, Toggle } from "@components/common/index";
import RestMap from "@components/Modal/ModalBody/RestMap";
import { restDataType } from "@customTypes/restaurant";
import useToggle from "@hooks/useToggle";

interface RestOverviewProps {
  restName: string;
  restData: restDataType;
}

export default function RestOverview({
  restName,
  restData,
}: RestOverviewProps) {
  const { isDown, handleOnClick } = useToggle();

  return (
    <RestOverviewWrapper>
      <Text text={restData.kr_name} bold={true} size="t2" />
      <Horizontal>
        <Text text={"영업 시간 | "} bold={true} />
        <Text text={restData.business_hour} />
      </Horizontal>
      <Horizontal>
        <Text
          text={`${isDown ? "▼" : "▶"} 주소 | `}
          bold={true}
          onClick={handleOnClick}
        />
        <Text text={restData.address} onClick={handleOnClick} />
      </Horizontal>
      {isDown && (
        <RestMap
          restName={restName}
          address={restData.address}
          krName={restData.kr_name}
        />
      )}
      <Text
        text={restData.introduction}
        size="t5"
        style={{
          backgroundColor: "#fafafa",
          borderRadius: "20px",
          marginTop: "0.5vmax",
          padding: "10px",
        }}
      />
    </RestOverviewWrapper>
  );
}

interface RestOverviewWrapperProps {
  children: React.ReactNode;
}

function RestOverviewWrapper({ children }: RestOverviewWrapperProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.3vmax",
        alignItems: "center",
        width: "80%",
      }}
    >
      {children}
    </div>
  );
}
