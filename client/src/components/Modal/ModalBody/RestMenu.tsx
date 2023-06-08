import { Text, Horizontal } from "@components/common";
import MenuCard from "@components/Modal/ModalCommon/MenuCard";

//TODO: context API로 restInfo를 props 없이 사용할 수 있게 만들기
export default function RestMenu({ restInfo }: any) {
  return (
    <RestMenuWrapper>
      <Text
        text={`잘 먹겠습니다!\n${restInfo.countryWord}`}
        style={{ fontWeight: 500 }}
      />
      <Horizontal>
        {[1, 2, 3].map((id) => (
          <MenuCard
            key={`menu${id}`}
            restName={restInfo.restName}
            menuId={id}
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
