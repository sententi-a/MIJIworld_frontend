import { Text, Horizontal, Toggle } from "@components/common/index";
import RestMap from "@components/Modal/ModalBody/RestMap";
//TODO: type path
import { restDataType } from "../../../types/restaurant";

interface RestOverviewProps {
  restName: string;
  restData: restDataType;
}

export default function RestOverview({
  restName,
  restData,
}: RestOverviewProps) {
  return (
    <RestOverviewWrapper>
      <Text text={restData.kr_name} bold={true} size="t2" />
      <Horizontal>
        <Text text={"영업 시간 | "} bold={true} />
        <Text text={restData.business_hour} />
      </Horizontal>
      <Toggle
        showComponent={
          <RestMap
            restName={restName}
            address={restData.address}
            krName={restData.kr_name}
          />
        }
      >
        {(isDown) => (
          <Horizontal>
            <Text text={`${isDown ? "▼" : "▶"} 주소 | `} bold={true} />
            <Text text={restData.address} />
          </Horizontal>
        )}
      </Toggle>
      <Text
        text={restData.introduction}
        style={{
          backgroundColor: "#fafafa",
          borderRadius: "40px",
        }}
      />
    </RestOverviewWrapper>
  );
}

interface RestOverviewWrapperProps {
  children: React.ReactNode;
}

function RestOverviewWrapper({ children }: RestOverviewWrapperProps) {
  return <div style={{ textAlign: "center" }}>{children}</div>;
}
