import styled from "styled-components";

interface RestDishProps {
  name: string;
  exp: string;
  restName: string;
  id: number;
  price: string;
}

export default function RestDish({
  restName,
  name,
  exp,
  id,
  price,
}: RestDishProps) {
  const priceWithComma = price
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      <DishContainer>
        <DishImage
          src={require(`../assets/images/restaurant/${restName}/menu${id}.png`)}
        />
        <DishName>{name}</DishName>
        <DishExplain>{exp}</DishExplain>
        <DishPrice>{priceWithComma}₩</DishPrice>
      </DishContainer>
    </>
  );
}

const DishContainer = styled.div`
  width: 25%;
  height: auto;
  border-radius: 10px;
  border: 1px solid gray;
  padding: 10px;
`;

const DishImage = styled.img`
  width: 60%;
`;

const DishName = styled.p`
  font-size: 1.4vw;
  font-weight: 500;
`;

const DishExplain = styled.div`
  font-size: 1.3vw;
  font-weight: 300;
  white-space: pre-line;
`;

const DishPrice = styled.p`
  font-size: 1.3vw;
`;
