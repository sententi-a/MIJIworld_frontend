import { useQuery } from "react-query";
import QUERYKEYS from "@constants/queryKeys";
import colorApi from "@apis/color";

const useColor = (name: string) => {
  return useQuery([QUERYKEYS.COLOR], () => {
    return colorApi.getColor(name);
  });
};

export { useColor };
