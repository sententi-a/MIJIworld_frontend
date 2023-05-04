import styled from "styled-components";

export default function RestReview() {
  return (
    <>
      <ReviewContainer>
        <Title>평점 보기</Title>
      </ReviewContainer>
    </>
  );
}

const ReviewContainer = styled.div`
  width: 80%;
  background-color: #eeeeee;
  border-radius: 20px;
`;

const Title = styled.div`
  font-size: 1.4vw;
  font-weight: 700;
  font-family: yg-jalnan;
`;
