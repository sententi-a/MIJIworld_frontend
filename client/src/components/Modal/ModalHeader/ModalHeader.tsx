import { Image, Text, Horizontal } from "@components/common";
import { CloseOutlined } from "@ant-design/icons";

export default function ModalHeader({ restInfo, handleOnClick }: any) {
  return (
    <ModalHeaderWrapper backgroundColor={restInfo.headerColor}>
      <Horizontal>
        <Image
          src={require(`@assets/images/restaurant/${restInfo.restName}/flag.png`)}
        />
        <Text
          text={restInfo.countryName}
          fancy={true}
          style={{ color: restInfo.countryNameColor }}
        />
      </Horizontal>
      <CloseOutlined
        onClick={handleOnClick}
        style={{
          fontSize: "2.3vw",
          color: "white",
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translate(-50%, -50%)",
        }}
      />
    </ModalHeaderWrapper>
  );
}

interface ModalHeaderWrapperProps {
  backgroundColor: string;
  children: React.ReactNode;
}

function ModalHeaderWrapper({
  backgroundColor,
  children,
}: ModalHeaderWrapperProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "6vw",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor,
      }}
    >
      <div
        style={{ height: "100%", display: "flex", justifyContent: "center" }}
      >
        {children}
      </div>
    </div>
  );
}
