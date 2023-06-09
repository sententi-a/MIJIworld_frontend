import React from "react";
import { Image } from "@components/common";

interface WorldMapProps {
  children: React.ReactNode;
}

function WorldMap_({ children }: WorldMapProps) {
  return (
    <div style={{ marginTop: "8vh" }}>
      <Image
        src={require("@assets/images/map/world_map.png")}
        size="xxlarge"
        style={{
          objectFit: "contain",
          objectPosition: "center center",
          minWidth: "100%",
          height: "auto",
        }}
      />
      {children}
    </div>
  );
}

const WorldMap = React.memo(WorldMap_);
export default WorldMap;
