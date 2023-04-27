import RestBasicInfo from "./RestBasicInfo";

export default function ModalBodyContent({ restInfo }: any) {
  return (
    <div style={{ color: "#707070" }}>
      <RestBasicInfo restInfo={restInfo} />
    </div>
  );
}
