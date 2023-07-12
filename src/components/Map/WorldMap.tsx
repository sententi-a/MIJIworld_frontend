import React from "react";
import { Image } from "@components/common";
import WorldMapImage from "@assets/images/map/world_map.png";

interface WorldMapProps {
  children: React.ReactNode | undefined;
}

function WorldMap({ children }: WorldMapProps) {
  const imageStyle: React.CSSProperties = React.useMemo(() => {
    return {
      objectFit: "contain",
      objectPosition: "center center",
      height: "auto",
    };
  }, []);

  return (
    <div style={{ marginTop: "8vh" }}>
      <Image src={WorldMapImage} size="xxlarge" style={imageStyle} />
      {children}
    </div>
  );
}

export default React.memo(WorldMap);
