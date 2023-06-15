import { useQuery } from "react-query";
import reviewApi from "@apis/review";
import QUERYKEYS from "@constants/queryKeys";

const useKakaoReview = (name: string) => {
  return useQuery([QUERYKEYS.REVIEW.KAKAO], () => {
    return reviewApi.getKakaoReview(name);
  });
};

export { useKakaoReview };
