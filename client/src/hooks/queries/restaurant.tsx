import { useQuery } from "react-query";
import restaurantApi from "@apis/restaurant";
import QUERYKEYS from "@constants/queryKeys";

const useRestaurants = (filter: string | undefined = undefined) => {
  return useQuery(
    [QUERYKEYS.RESTAURANT.LIST, filter],
    () => {
      return restaurantApi.getRestaurants(filter);
    },
    { suspense: true }
  );
};

const useRestDialog = (name: string) => {
  return useQuery([QUERYKEYS.RESTAURANT.DIALOG, name], () => {
    return restaurantApi.getDialog(name);
  });
};

const useRestBasicInfo = (name: string) => {
  return useQuery([QUERYKEYS.RESTAURANT.BASIC_INFO, name], () => {
    return restaurantApi.getBasicInfo(name);
  });
};

export { useRestaurants, useRestDialog, useRestBasicInfo };
