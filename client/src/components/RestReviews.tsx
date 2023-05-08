import styled from "styled-components";
import RestReview from "./RestReview";

export default function RestReviews() {
  const restNameKr = "사마르칸트";
  const naverReview = 4.5;
  const kakaoReview = 2.6;

  return (
    <>
      <ReviewWrapper>
        <Title>{restNameKr} 평점 보기</Title>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <RestReview
            mapType="네이버 지도"
            link="www.naver.com"
            score={naverReview}
          />
          <RestReview
            mapType="카카오맵"
            link="www.naver.com"
            score={kakaoReview}
          />
        </div>
      </ReviewWrapper>
    </>
  );
}

const ReviewWrapper = styled.div`
  width: 85%;
  margin: 10px auto;
  margin-bottom: 80px;
`;

const Title = styled.div`
  font-size: 1.5vw;
  font-weight: 700;
  font-family: yg-jalnan;
  margin-bottom: 15px;
`;
