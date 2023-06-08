import React from "react";
import { Image } from "@components/common/index";

interface StarRateProps {
  rate: number;
}

function StarRate_({ rate }: StarRateProps) {
  const width = (rate / 5) * 7.9 + "vw";

  return (
    <>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", overflow: "hidden", width }}>
          <Image
            src={require("@assets/images/icon/star_full.png")}
            size="medium"
            style={{ zIndex: 10, width: "7vw" }}
          />
        </div>
        <Image
          src={require("@assets/images/icon/star_bin.png")}
          size="medium"
          style={{ width: "7vw", top: 0 }}
        />
      </div>
    </>
  );
}

const StarRate = React.memo(StarRate_);
export default StarRate;
