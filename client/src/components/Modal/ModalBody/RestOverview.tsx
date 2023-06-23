import { Text, Horizontal, Toggle } from "@components/common/index";
import RestMap from "@components/Modal/ModalBody/RestMap";
import { useRestBasicInfo } from "@hooks/restaurant";

interface RestOverviewProps {
  restName: string;
}

export default function RestOverview({ restName }: RestOverviewProps) {
  const { data } = useRestBasicInfo(restName);

  return (
    <RestOverviewWrapper>
      <Text text={data?.kr_name} bold={true} size="t2" />
      <Horizontal>
        <Text text={"영업 시간 | "} bold={true} />
        <Text text={data?.business_hour} />
      </Horizontal>
      <Toggle
        showComponent={<RestMap restName={restName} address={data?.address} />}
      >
        {(isDown) => (
          <Horizontal>
            <Text text={`${isDown ? "▼" : "▶"} 주소 | `} bold={true} />
            <Text text={data?.address} />
          </Horizontal>
        )}
      </Toggle>
      <Text
        text={data?.introduction}
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
