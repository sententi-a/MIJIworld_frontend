import api from "./index";

const colorApi = {
  getColor: async (name: string) => {
    try {
      const result = await api.get(`/restaurant/color/${name}`);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default colorApi;
