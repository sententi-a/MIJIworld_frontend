import { Text, Horizontal, Toggle } from "@components/common/index";
import RestMap from "@components/RestMap";

//TODO: types에 타입 지정하고, any 타입에서 바꾸기
export default function RestOverview({ restInfo }: any) {
  return (
    <RestOverviewWrapper>
      <Text text={restInfo.restNameKr} bold={true} size="t2" />
      <Horizontal>
        <Text text={"영업 시간 | "} bold={true} />
        <Text text={restInfo.restBusinessHour} />
      </Horizontal>
      <Toggle showComponent={<RestMap restInfo={restInfo} />}>
        {(isDown) => (
          <Horizontal>
            <Text text={`${isDown ? "▼" : "▶"} 주소 | `} bold={true} />
            <Text text={restInfo.restAddress} />
          </Horizontal>
        )}
      </Toggle>
      <Text
        text={restInfo.restIntroduction}
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
