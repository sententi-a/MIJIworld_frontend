import { Box, Horizontal, Image, Text } from "../common";
import StarRate from "../common/StarRate";

interface ReviewCardProps {
  mapType: string;
  rate: number;
  url: string;
}

export default function ReviewCard({ mapType, rate, url }: ReviewCardProps) {
  const mapName = mapType === "naver" ? "네이버 지도" : "카카오맵";

  return (
    <Box style={{ width: "30%", backgroundColor: "#fcfcfc" }}>
      <Horizontal gap="0.5vw">
        <Image src={require(`../../assets/images/icon/${mapType}map.png`)} />
        <Text text={mapName} bold={true} size="t5" />
        <Text text={`(${rate}점)`} size="t5" />
      </Horizontal>
      <StarRate rate={rate} />
      <Box
        shadowIntensity="weak"
        style={{ width: "80%", backgroundColor: "#ffffff" }}
      >
        <Text text={"리뷰 리스트"} size="t5" />
        <a href={url} target="_blank" rel="external">
          <Text text={"더보기"} size="t6" />
        </a>
      </Box>
    </Box>
  );
}
