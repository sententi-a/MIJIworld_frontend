import React from "react";
import { Image } from "@components/common";

interface WorldMapProps {
  children: React.ReactNode;
}

function WorldMap_({ children }: WorldMapProps) {
  return (
    <>
      <Image
        src={require("@assets/images/map/world_map.png")}
        size="xxlarge"
        style={{
          objectFit: "contain",
          objectPosition: "center center",
          marginTop: "6vh",
        }}
      />
      <div
        style={{ position: "absolute", top: 0, width: "90vw", height: "90vh" }}
      >
        {children}
      </div>
    </>
  );
}

const WorldMap = React.memo(WorldMap_);
export default WorldMap;
