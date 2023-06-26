import { Image, Text, Horizontal } from "@components/common";
import { CloseOutlined } from "@ant-design/icons";
import { useColor } from "@hooks/queries/color";

interface ModalHeaderProps {
  restName: string;
  country: string;
  handleOnClick: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function ModalHeader({
  restName,
  country,
  handleOnClick,
}: ModalHeaderProps) {
  const { data } = useColor(restName);

  return (
    <ModalHeaderWrapper backgroundColor={data?.header_color}>
      <Horizontal>
        <Image
          src={require(`@assets/images/restaurant/${restName}/flag.png`)}
        />
        <Text text={country} fancy={true} style={{ color: data?.text_color }} />
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
