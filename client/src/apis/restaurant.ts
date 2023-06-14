import api from "./index";

const server = process.env.SERVER || "localhost:5500";

const restaurantApi = {
  getRestaurants: async () => {
    const result = await api.get(`/restaurants`);
    console.log(result);
    return result.data;
  },
  getDialog: async (name: string) => {
    console.log(server);
    const result = await api.get(`/restaurant/dialog/${name}`);
    return result.data;
  },
};

export default restaurantApi;
