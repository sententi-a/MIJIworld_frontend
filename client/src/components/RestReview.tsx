import styled from "styled-components";
import StarRate from "./StarRate";

interface RestReviewProps {
  mapType: string;
  score: number;
  link: string;
}

export default function RestReview({ mapType, score, link }: RestReviewProps) {
  const imageType = mapType === "네이버 지도" ? "navermap" : "kakaomap";

  return (
    <>
      <ReviewBg>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={require(`../assets/images/icon/${imageType}.png`)}
            style={{ width: "2.5vw" }}
          />
          {mapType} <Score>({score}점)</Score>
        </div>
        <StarRate rate={score}></StarRate>
        <ReviewContainer>
          리뷰 리스트
          <ReviewLink href={link} target="_blank">
            더보기
          </ReviewLink>
        </ReviewContainer>
      </ReviewBg>
    </>
  );
}

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
