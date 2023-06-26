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

  const { data } = useReview(restName);

  const score = data ? (data.overview.score ? data.overview.score : 0) : 0;
  const isEmpty = data ? (data.reviews.length > 0 ? false : true) : true;

  return (
    <Box style={{ backgroundColor: "#fcfcfc" }}>
      <Horizontal gap="2vw">
        <div>
          <Image src={require(`@assets/images/icon/${mapType}map.png`)} />
          <a href={data?.overview.url} target="_blank" rel="external">
            <Text text={`${mapName}`} bold={true} size="t5" />
          </a>
          <Text text={`(${score}점)`} size="t5" />
          <StarRate rate={score} />
        </div>

        <Box
          shadowIntensity="weak"
          style={{
            width: "30vw",
            backgroundColor: "#ffffff",
            display: "flex",
            gap: "0.5vmax",
            alignItems: "flex-start",
          }}
        >
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
          {isEmpty && <Text text="❗️ 해당 음식점에 등록된 리뷰가 없습니다." />}
        </Box>
      </Horizontal>
    </Box>
  );
}
