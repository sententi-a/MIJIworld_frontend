import { Text, Horizontal } from "@components/common";
import MenuCard from "@components/Modal/ModalCommon/MenuCard";
import { useMenu } from "@hooks/queries/menu";

interface RestMenuProps {
  restName: string;
}

export default function RestMenu({ restName }: RestMenuProps) {
  const { data } = useMenu(restName);

  return (
    <RestMenuWrapper>
      <Text
        text={`잘 먹겠습니다!\n${data?.country_word}`}
        style={{ fontWeight: 500 }}
      />
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
  return <div style={{}}>{children}</div>;
}
