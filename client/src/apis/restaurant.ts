import axios from "axios";

const server = process.env.SERVER || "localhost:5500";

const restaurantApi = {
  getRestaurants: async () => {
    const result = await axios.get(`${server}/restaurants`);
    console.log(result);
    return result.data;
  },
};

export default restaurantApi;
