import pinApi from "@apis/pin";
import { useQuery } from "react-query";
import QUERYKEYS from "@constants/queryKeys";

const usePin = () => {
  return useQuery(
    [QUERYKEYS.PIN],
    async () => {
      const response = await pinApi.getPins();
      return response.data;
    },
    { suspense: true }
  );
};

export default usePin;
