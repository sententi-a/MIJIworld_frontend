import { Text, Horizontal } from "@components/common";
import MenuCard from "@components/Modal/ModalCommon/MenuCard";
import { useMenu } from "@hooks/queries/menu";
import ModalSubTitle from "../ModalCommon/ModalSubTitle";

interface RestMenuProps {
  restName: string;
}

export default function RestMenu({ restName }: RestMenuProps) {
  const { data } = useMenu(restName);

  return (
    <RestMenuWrapper>
      <ModalSubTitle restName={restName} text="메뉴 리스트" />
      <Text text={`${data?.country_word}`} style={{ marginBottom: "1vh" }} />
      <Horizontal>
        {data &&
          data.menus.map((elem: typeof data) => (
            <MenuCard
              key={`menu${elem.id}`}
              restName={restName}
              menuId={elem.order}
              menuName={elem.name}
              description={elem.description}
              price={elem.price}
            />
          ))}
      </Horizontal>
    </RestMenuWrapper>
  );
}

interface RestMenuWrapperProps {
  children: React.ReactNode;
}

function RestMenuWrapper({ children }: RestMenuWrapperProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5vmax",
        alignItems: "center",
        width: "80%",
      }}
    >
      {children}
    </div>
  );
}
