import React from "react";
import { Box, Horizontal, Image, Text } from "@components/common";
import StarRate from "@components/common/StarRate";
import { useKakaoReview } from "@hooks/queries/review";

interface ReviewCardProps {
  restName: string;
  mapType: string;
}

export default function ReviewCard({ restName, mapType }: ReviewCardProps) {
  const mapName = mapType === "naver" ? "네이버 지도" : "카카오맵";
  const useReview = mapType === "naver" ? useKakaoReview : useKakaoReview;

  // TODO: data?를 안 붙이면 undefined 에러 나는 이유 찾기
  // TODO: undefined 일수도 있는 상태에서 구조분해할당 어떻게 하는지
  const { data } = useReview(restName);
  // const { overview, reviews } = data;
  // const { score, url } = overview;

  return (
    <Box style={{ width: "30%", backgroundColor: "#fcfcfc" }}>
      <Horizontal gap="0.5vw">
        <Image src={require(`@assets/images/icon/${mapType}map.png`)} />
        <Text text={mapName} bold={true} size="t5" />
        <Text text={`(${data?.overview.score}점)`} size="t5" />
      </Horizontal>
      <StarRate rate={data?.overview.score} />
      <Box
        shadowIntensity="weak"
        style={{ width: "80%", backgroundColor: "#ffffff" }}
      >
        <Text text={"리뷰 리스트"} size="t5" bold={true} />
        {data &&
          data.reviews.map((elem: typeof data.reviews) => (
            <React.Fragment key={`${mapType}review${elem.id}`}>
              <Text
                key={elem.content}
                text={"📌 " + elem.content}
                size="t6"
                style={{ textAlign: "left" }}
              />
            </React.Fragment>
          ))}
        <a href={data?.overview.url} target="_blank" rel="external">
          <Text text={"더보기"} size="t6" />
        </a>
      </Box>
    </Box>
  );
}
