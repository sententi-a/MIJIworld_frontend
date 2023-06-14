import pinApi from "@apis/pin";
import { useQuery } from "react-query";
import QUERYKEYS from "@constants/queryKeys";

const usePin = () => {
  return useQuery(
    [QUERYKEYS.PIN],
    () => {
      return pinApi.getPins();
    },
    { suspense: true }
  );
};

export default usePin;
