import api from "./index";

const server = process.env.SERVER || "localhost:5500";

const restaurantApi = {
  getRestaurants: async () => {
    try {
      const result = await api.get(`/restaurants`);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  },
  getDialog: async (name: string) => {
    try {
      const result = await api.get(`/restaurant/dialog/${name}`);
      // console.log(result.data);
      return result.data;
    } catch (e) {
      console.error(e);
    }
  },
  getModal: async (name: string) => {
    try {
      const result = await api.get(`/restaurant/${name}`);
      // 헤더 컬러 가져오기
      return result.data;
    } catch (e) {
      console.error(e);
    }
  },
};

export default restaurantApi;
