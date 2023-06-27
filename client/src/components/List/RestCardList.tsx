import React from "react";
import { Grid } from "@components/common";
import RestCard from "@components/List/RestCard";
import { restDataType } from "@customTypes/restaurant";

interface RestCardListProps {
  restData: restDataType[];
  handleOnClick?: (restName: string) => void;
}

function RestCardList({ restData, handleOnClick }: RestCardListProps) {
  return (
    <Grid>
      {restData &&
        restData.map((elem: restDataType) => (
          <RestCard
            key={"restCard " + elem.en_name}
            restName={elem.en_name}
            krRestName={elem.kr_name}
            country={elem.country}
            address={elem.address}
            businessHour={elem.business_hour}
            handleOnClick={handleOnClick && (() => handleOnClick(elem.en_name))}
          />
        ))}
    </Grid>
  );
}

export default React.memo(RestCardList);
