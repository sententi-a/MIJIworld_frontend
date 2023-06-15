import { Text, Horizontal } from "@components/common";
import ReviewCard from "@components/Modal/ModalCommon/ReviewCard";

interface RestReviewProps {
  restName: string;
  // krRestName: string;
}

export default function RestReview({ restName }: RestReviewProps) {
  return (
    <RestReviewWrapper>
      <Text text={`${restName} 평점 보기`} fancy={true} />
      <Horizontal gap="2vw">
        {["naver", "kakao"].map((elem) => (
          <ReviewCard key={`map${elem}`} restName={restName} mapType={elem} />
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
