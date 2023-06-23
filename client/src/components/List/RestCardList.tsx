import React, { Suspense } from "react";
import { Grid } from "@components/common";
import RestCard from "@components/RestCard";

interface RestCardListProps {
  //TODO: Type 정리해서 정의하기
  restData?: any[] | undefined;
  handleOnClick?: (restName: string) => void;
}

function RestCardList({ restData, handleOnClick }: RestCardListProps) {
  return (
    <Grid>
      {/* TODO: Suspense 수정, elem type 변경 */}
      <Suspense fallback={<div>만드는 중</div>}>
        {restData &&
          restData.map((elem: any) => (
            <RestCard
              key={"restCard " + elem.en_name}
              restName={elem.en_name}
              krRestName={elem.kr_name}
              country={elem.country}
              address={elem.address}
              businessHour={elem.business_hour}
              handleOnClick={
                handleOnClick && (() => handleOnClick(elem.en_name))
              }
            />
          ))}
      </Suspense>
    </Grid>
  );
}

export default React.memo(RestCardList);
