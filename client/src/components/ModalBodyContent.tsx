import styled from "styled-components";
import RestBasicInfo from "./RestBasicInfo";
import RestDish from "./RestDish";
import RestExterior from "./RestExterior";
import RestTicket from "./RestTicket";
import RestReviews from "./RestReviews";

export default function ModalBodyContent({ restInfo }: any) {
  return (
    <div style={{ color: "#707070", padding: "10vh" }}>
      <RestBasicInfo restInfo={restInfo} />
      <DishesWrapper>
        {/* RestDishes (using map) */}
        {[1, 2, 3].map((elem) => (
          <RestDish
            restName={restInfo.restName}
            id={elem}
            name={restInfo.menus[elem - 1]["name"]}
            exp={restInfo.menus[elem - 1]["explain"]}
            price={restInfo.menus[elem - 1]["price"]}
          />
        ))}
      </DishesWrapper>
      <RestExterior restName={restInfo.restName} />
      <RestReviews />
      <RestTicket restInfo={restInfo} />
    </div>
  );
}

const DishesWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3vw;
  gap: 3vw;
`;
