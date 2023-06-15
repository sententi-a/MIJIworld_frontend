import QUERYKEYS from "@constants/queryKeys";
import { useQuery } from "react-query";
import mapApi from "@apis/map";

const useMap = (name: string) => {
  return useQuery([QUERYKEYS.MAP], () => {
    return mapApi.getMap(name);
  });
};

export { useMap };
