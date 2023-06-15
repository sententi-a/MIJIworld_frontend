import { useQuery } from "react-query";
import restaurantApi from "@apis/restaurant";
import QUERYKEYS from "@constants/queryKeys";

const useRestaurants = () => {
  return useQuery([QUERYKEYS.RESTAURANT.ALL], () => {
    return restaurantApi.getRestaurants();
  });
};

const useRestDialog = (name: string) => {
  return useQuery([QUERYKEYS.RESTAURANT.DIALOG], () => {
    return restaurantApi.getDialog(name);
  });
};

const useRestBasicInfo = (name: string) => {
  return useQuery([QUERYKEYS.RESTAURANT.BASIC_INFO], () => {
    return restaurantApi.getBasicInfo(name);
  });
};

export { useRestaurants, useRestDialog, useRestBasicInfo };
