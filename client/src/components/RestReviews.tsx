import styled from "styled-components";
import StarRate from "./StarRate";

export default function RestReviews() {
  const restNameKr = "사마르칸트";
  const naverReview = 4.5;
  const kakaoReview = 2.6;

  return (
    <>
      <ReviewWrapper>
        <Title>{restNameKr} 평점 보기</Title>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <ReviewBg>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={require("../assets/images/icon/navermap.png")}
                style={{ width: "2.5vw" }}
              />
              네이버 지도 <Score>({naverReview}점)</Score>
            </div>
            <StarRate rate={naverReview}></StarRate>
            <ReviewContainer>
              리뷰 리스트
              <ReviewLink href="http://www.naver.com" target="_blank">
                더보기
              </ReviewLink>
            </ReviewContainer>
          </ReviewBg>

          <ReviewBg>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={require("../assets/images/icon/kakaomap.png")}
                style={{ width: "2.5vw" }}
              />
              카카오맵 <Score>({kakaoReview}점)</Score>
            </div>
            <StarRate rate={kakaoReview}></StarRate>
            <ReviewContainer>리뷰 리스트</ReviewContainer>
          </ReviewBg>
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

const ReviewBg = styled.div`
  width: 40%;
  background-color: #fbfbfb;
  border-radius: 20px;
  box-shadow: 0 5px 5px 0 #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 1.4vw;
  font-weight: 700;
`;

const Score = styled.span`
  font-size: 1.2vw;
  font-weight: 500;
`;

const ReviewContainer = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 20px;
  font-size: 1.3vw;
  font-weight: 500;
  box-shadow: 0 2px 2px 0 #eeeeee;
`;

const ReviewLink = styled.a`
  font-weight: 500;
  text-decoration: none;
`;
