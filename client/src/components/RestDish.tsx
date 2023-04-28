import styled from "styled-components";

export default function RestDish() {
  return (
    <>
      <DishContainer></DishContainer>
      <DishContainer></DishContainer>
      <DishContainer></DishContainer>
    </>
  );
}

const DishContainer = styled.div`
  width: 25%;
  height: 25vh;
  border-radius: 10px;
  border: 1px solid gray;
`;
