import React, { useEffect } from "react";
import { Grid } from "@components/common";
import RestCard from "@components/List/RestCard";
import { restDataType } from "@customTypes/restaurant";
import { useRestaurants } from "@hooks/queries/restaurant";

interface RestCardListProps {
  keyword: string;
  handleOnClick?: (restName: string) => void;
  handleOnDataChange?: (count: number) => void;
}

function RestCardList({
  keyword,
  handleOnClick,
  handleOnDataChange,
}: RestCardListProps) {
  const { data: restData } = useRestaurants(keyword);

  // If restData changes, set restCount state in ListPage component
  useEffect(() => {
    handleOnDataChange && handleOnDataChange(restData?.length || 0);
  }, [restData, handleOnDataChange]);

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
