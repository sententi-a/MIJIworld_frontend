import { Text, Horizontal } from "@components/common";
import ReviewCard from "@components/Modal/ModalCommon/ReviewCard";

export default function RestReview({ restInfo }: any) {
  return (
    <RestReviewWrapper>
      <Text text={`${restInfo.restNameKr} 평점 보기`} fancy={true} />
      <Horizontal gap="2vw">
        {["naver", "kakao"].map((elem) => (
          <ReviewCard
            key={`map${elem}`}
            mapType={elem}
            rate={4.5}
            url={`www.${elem}map.com`}
          />
        ))}
      </Horizontal>
    </RestReviewWrapper>
  );
}

interface RestReviewWrapperProps {
  children: React.ReactNode;
}

function RestReviewWrapper({ children }: RestReviewWrapperProps) {
  return <div style={{}}>{children}</div>;
}
