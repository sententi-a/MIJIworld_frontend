import { useQuery } from "react-query";
import restaurantApi from "@apis/restaurant";
import QUERYKEYS from "@constants/queryKeys";

const useRestaurant = () => {
  return useQuery(
    [QUERYKEYS.RESTAURANT.ALL],
    () => {
      return restaurantApi.getRestaurants();
    },
    { suspense: true }
  );
};

const useRestDialog = (name: string) => {
  return useQuery([QUERYKEYS.RESTAURANT.DIALOG], () => {
    return restaurantApi.getDialog(name);
  });
};

export { useRestaurant, useRestDialog };
