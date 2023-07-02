import api from "./index";

const restaurantApi = {
  getRestaurants: async (filter: string | undefined = undefined) => {
    try {
      let endpoint = `/restaurants`;

      if (filter) {
        endpoint += `?q=${filter}`;
      }

      const result = await api.get(endpoint);
      return result.data;
    } catch (error) {
      throw error;
      // console.error(error);
    }
  },
  getDialog: async (name: string) => {
    try {
      const result = await api.get(`/restaurant/dialog/${name}`);
      // console.log(result.data);
      return result.data;
    } catch (error) {
      throw error;
      // console.error(error);
    }
  },
  getBasicInfo: async (name: string) => {
    try {
      const result = await api.get(`/restaurant/${name}`);
      return result.data;
    } catch (error) {
      throw error;
      // console.error(error);
    }
  },
};

export default restaurantApi;
