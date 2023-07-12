import ReviewCard from "@components/Modal/ModalCommon/ReviewCard";
import ModalSubTitle from "@components/Modal/ModalCommon/ModalSubTitle";

interface RestReviewProps {
  restName: string;
}

export default function RestReview({ restName }: RestReviewProps) {
  return (
    <RestReviewWrapper>
      <ModalSubTitle restName={restName} text="리뷰 보기" />
      {["naver", "kakao"].map((elem) => (
        <ReviewCard key={`map${elem}`} restName={restName} mapType={elem} />
      ))}
    </RestReviewWrapper>
  );
}

interface RestReviewWrapperProps {
  children: React.ReactNode;
}

function RestReviewWrapper({ children }: RestReviewWrapperProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "2vmax",
        width: "85%",
      }}
    >
      {children}
    </div>
  );
}
