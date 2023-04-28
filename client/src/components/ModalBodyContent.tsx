import styled from "styled-components";
import RestBasicInfo from "./RestBasicInfo";
import RestDish from "./RestDish";

export default function ModalBodyContent({ restInfo }: any) {
  return (
    <div style={{ color: "#707070", padding: "10vh" }}>
      <RestBasicInfo restInfo={restInfo} />
      <DishesWrapper>
        {/* RestDishes (using map) */}
        <RestDish />
      </DishesWrapper>
    </div>
  );
}

const DishesWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;
  gap: 3vw;
`;
