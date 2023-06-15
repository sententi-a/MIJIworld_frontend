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

const useRestBasicInfo = (name: string) => {
  return useQuery([QUERYKEYS.RESTAURANT.BASIC_INFO], () => {
    return restaurantApi.getBasicInfo(name);
  });
};

// TODO: 분리하기 (api도 분리 )
const useRestModal = (name: string) => {
  return useQuery([QUERYKEYS.RESTAURANT.MODAL], () => {
    return restaurantApi.getModal(name);
  });
};

export { useRestaurant, useRestDialog, useRestModal, useRestBasicInfo };
